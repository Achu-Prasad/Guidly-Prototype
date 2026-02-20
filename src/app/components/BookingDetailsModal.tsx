import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    X,
    Calendar,
    Clock,
    VideoCamera,
    Users,
    ArrowsClockwise,
    CaretRight
} from '@phosphor-icons/react';
import { parse, differenceInMinutes } from 'date-fns';

interface BookingItem {
    id: string;
    title: string;
    subtitle: string;
    date: string;
    time: string;
    duration: string;
    type: 'session' | 'event';
    status?: 'join' | 'upcoming';
    mentorId?: string | number;
}

interface BookingDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    booking: BookingItem | null;
    onReschedule: (booking: BookingItem) => void;
}

export const BookingDetailsModal = ({ isOpen, onClose, booking, onReschedule }: BookingDetailsModalProps) => {
    // Generate realistic start time based on booking.status for demo
    // If status is "join", it's already started
    const isStarted = booking?.status === 'join';

    const [timeLeftStr, setTimeLeftStr] = useState("00h 00m");

    useEffect(() => {
        if (!booking) return;

        if (isStarted) {
            setTimeLeftStr("00h 00m");
            return;
        }

        const calculateTimeLeft = () => {
            try {
                // time format like "11:00 AM (IST)" - remove the timezone part
                const timeStrClean = booking.time.split('(')[0].trim();

                // date format like "23/02/2026"
                const parsedDate = parse(`${booking.date} ${timeStrClean}`, 'dd/MM/yyyy h:mm a', new Date());

                if (isNaN(parsedDate.getTime())) {
                    // Fallback if parsing fails for some reason
                    setTimeLeftStr("Unknown");
                    return;
                }

                const now = new Date();
                const totalMinutes = differenceInMinutes(parsedDate, now);

                if (totalMinutes <= 0) {
                    setTimeLeftStr("00h 00m");
                } else {
                    const days = Math.floor(totalMinutes / (24 * 60));
                    const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
                    const minutes = totalMinutes % 60;

                    if (days > 0) {
                        setTimeLeftStr(`${days}d ${hours}h`);
                    } else {
                        setTimeLeftStr(`${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m`);
                    }
                }
            } catch (e) {
                setTimeLeftStr("Unknown");
            }
        };

        calculateTimeLeft();
        const interval = setInterval(calculateTimeLeft, 60000); // update every minute

        return () => clearInterval(interval);
    }, [booking, isStarted]);

    if (!booking) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#0f1615]/40 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-[340px] bg-white rounded-[24px] shadow-[0px_20px_50px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col border border-gray-100"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-100">
                            <h2 className="text-[16px] font-semibold text-[#272d2c] font-heading">Booking Details</h2>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <X size={20} className="text-[#3f4544]" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col gap-6">

                            {/* Booking Info Card */}
                            <div className="bg-[#f8f9f8] p-4 rounded-[16px] border border-[#eef2f1] flex gap-4 items-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                                    {booking.type === 'session' ? (
                                        <VideoCamera size={24} weight="duotone" className="text-[#2D5A4C]" />
                                    ) : (
                                        <Users size={24} weight="duotone" className="text-[#2D5A4C]" />
                                    )}
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <h3 className="text-[16px] font-semibold text-[#272d2c] font-heading truncate">
                                        {booking.title}
                                    </h3>
                                    <p className="text-[14px] text-[#3f4544] opacity-70 font-body truncate mt-0.5">
                                        {booking.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Schedule info */}
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-[#3f4544]">
                                        <Calendar size={18} weight="duotone" className="text-[#2D5A4C]" />
                                        <span className="text-[14px] font-medium font-body">Date</span>
                                    </div>
                                    <span className="text-[14px] font-semibold text-[#272d2c] font-body">{booking.date}</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-[#3f4544]">
                                        <Clock size={18} weight="duotone" className="text-[#2D5A4C]" />
                                        <span className="text-[14px] font-medium font-body">Time</span>
                                    </div>
                                    <span className="text-[14px] font-semibold text-[#272d2c] font-body">{booking.time}</span>
                                </div>

                                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                                    <span className="text-[14px] font-medium text-[#3f4544] font-body opacity-80">Duration</span>
                                    <span className="text-[14px] font-semibold text-[#272d2c] font-body">{booking.duration}</span>
                                </div>
                            </div>

                        </div>

                        {/* Actions */}
                        <div className="p-4 bg-gray-50 border-t border-gray-100 flex flex-col gap-3">
                            <button
                                className={`h-[48px] w-full rounded-[8px] flex items-center justify-center font-body font-semibold text-[15px] transition-all relative overflow-hidden ${isStarted ? 'bg-[#00973d] text-white' : 'bg-[#2D5A4C] text-white hover:bg-[#23473c]'}`}
                            >
                                {isStarted ? 'Join Session Now' : `Session starts in ${timeLeftStr}`}
                            </button>

                            <button
                                onClick={() => !isStarted && onReschedule(booking)}
                                disabled={isStarted}
                                className={`h-[48px] w-full rounded-[8px] flex items-center justify-center gap-2 font-body font-semibold text-[15px] transition-colors border ${isStarted
                                    ? 'border-gray-200 text-gray-400 bg-transparent cursor-not-allowed'
                                    : 'border-[#2D5A4C] text-[#2D5A4C] hover:bg-[#2D5A4C]/5'
                                    }`}
                            >
                                <ArrowsClockwise size={20} weight="bold" />
                                Reschedule
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
