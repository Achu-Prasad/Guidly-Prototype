import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    CaretLeft,
    Check,
    CalendarBlank,
    Clock
} from "@phosphor-icons/react";
import {
    format,
    isSameDay,
    startOfToday,
    addDays,
    parse
} from "date-fns";
import * as Popover from "@radix-ui/react-popover";
import { DayPicker } from "react-day-picker";

interface RescheduleScreenProps {
    booking: any;
    bookings?: any[]; // The global bookings to check availability
    onBack: () => void;
    onConfirm: (newDate: string, newTime: string) => void;
    onNavigate: (view: string) => void;
    hasUnreadChats?: boolean;
    unreadNotificationsCount?: number;
}

const TIME_SLOTS = [
    "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
];

export const RescheduleScreen = ({
    booking,
    bookings = [],
    onBack,
    onConfirm,
    onNavigate,
}: RescheduleScreenProps) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [showConfirmPopover, setShowConfirmPopover] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Default displayed month
    const [month, setMonth] = useState<Date>(startOfToday());

    // Original booking Date & Time mapped to avoid booking identical slot.
    // booking schema: { date: '21/06/2025', time: '11:00 AM - 12:00 PM', mentorId, type: 'session' }
    // Note: booking.date might be parsed as dd/MM/yyyy.
    const originalDateRaw = booking?.date;
    let originalDate: Date | null = null;
    try {
        if (originalDateRaw) {
            originalDate = parse(originalDateRaw, 'dd/MM/yyyy', new Date());
        }
    } catch (e) { }

    const originalTime = booking?.time?.split(' - ')[0] || booking?.time;

    // Check availability for a specific date
    const getAvailableSlotsForDate = (date: Date) => {
        const day = date.getDate();
        const dayOfWeek = date.getDay();

        // Disable weekends to simulate natural mentor unavailability 
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            return [];
        }

        let baseSlots: string[] = [];
        if (day % 3 === 0) baseSlots = TIME_SLOTS.slice(0, 3);
        else if (day % 2 === 0) baseSlots = TIME_SLOTS.slice(2, 5);
        else baseSlots = TIME_SLOTS;

        return baseSlots.filter(timeLine => {
            // Check if user already has it assigned (same date & time)
            const isOriginal = originalDate && isSameDay(date, originalDate) && timeLine === originalTime;
            if (isOriginal) return false;

            const isBooked = bookings.some(b =>
                b.type === 'session' &&
                b.mentorId === booking?.mentorId &&
                b.date === format(date, 'dd/MM/yyyy') &&
                b.time.startsWith(timeLine)
            );
            return !isBooked;
        });
    };

    const slotsForSelectedDate = useMemo(() => {
        if (!selectedDate) return [];
        return getAvailableSlotsForDate(selectedDate);
    }, [selectedDate, bookings, booking, originalDate, originalTime]);

    // Check if slots are no longer available for the reselcted date, clear it
    useEffect(() => {
        if (selectedTime && !slotsForSelectedDate.includes(selectedTime)) {
            setSelectedTime('');
        }
    }, [slotsForSelectedDate, selectedTime]);

    // Custom modifiers for calendar dots/styling
    const modifiers = {
        hasManySlots: (date: Date) => {
            if (date < startOfToday()) return false;
            const slots = getAvailableSlotsForDate(date);
            return slots.length >= 4;
        },
        hasFewSlots: (date: Date) => {
            if (date < startOfToday()) return false;
            const slots = getAvailableSlotsForDate(date);
            return slots.length > 0 && slots.length < 4;
        }
    };

    const modifiersClassNames = {
        hasManySlots: "calendar-day-many",
        hasFewSlots: "calendar-day-few"
    };

    return (
        <div className="flex flex-col h-full bg-[#fafafa] relative overflow-hidden">
            {/* Header */}
            <div className="bg-[#fafafa] px-6 pt-10 pb-4 shrink-0 flex items-center justify-between z-10 sticky top-0">
                <div className="flex items-center gap-3">
                    <button
                        onClick={onBack}
                        className="w-[40px] h-[40px] -ml-2 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                        <CaretLeft size={24} className="text-[#0F1615]" weight="bold" />
                    </button>
                    <h1 className="text-[18px] font-heading font-semibold text-[#0F1615]">Reschedule Session</h1>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 pt-2 pb-[120px] no-scrollbar">

                {/* Custom Month Chips */}
                <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-4 mb-2 -mx-6 px-6">
                    {[0, 1, 2, 3].map(offset => {
                        const d = addDays(startOfToday(), offset * 30);
                        d.setDate(1); // roughly get varying months
                        const isCurrentMonth = d.getMonth() === month.getMonth() && d.getFullYear() === month.getFullYear();
                        return (
                            <button
                                key={offset}
                                onClick={() => setMonth(d)}
                                className={`px-5 py-2.5 rounded-full font-sans text-[14px] font-medium whitespace-nowrap transition-all ${isCurrentMonth
                                    ? 'bg-[#2d5a4c] text-white shadow-md'
                                    : 'bg-white text-[#3f4544] border border-gray-200 hover:border-[#2d5a4c]/50 hover:bg-[#f8f9f8]'
                                    }`}
                            >
                                {format(d, 'MMMM yyyy')}
                            </button>
                        );
                    })}
                </div>

                {/* Text Guide */}
                <p className="font-['Figtree'] text-[14px] text-[#3f4544] font-medium opacity-80 mb-3 text-center">
                    Select a date to reschedule your session
                </p>

                {/* Styled Calendar Box */}
                <div className="bg-white rounded-[24px] p-[14px] shadow-[0px_8px_30px_-4px_rgba(0,0,0,0.04)] border border-gray-100/50 mb-6">
                    <style>{`
                        .rdp { margin: 0; }
                        .rdp-month { width: 100%; }
                        .rdp-table { width: 100%; max-width: 100%; border-collapse: separate; border-spacing: 4px 16px; }
                        .calendar-day-many {
                            background-color: #e6faee !important;
                            color: #00973d !important;
                            border: 1px solid #00c951 !important;
                        }
                        .calendar-day-few {
                            background-color: #fff0e6 !important;
                            color: #ff6900 !important;
                            border: 1px solid #ff6900 !important;
                        }
                        .rdp-day_selected.calendar-day-many,
                        .rdp-day_selected.calendar-day-few,
                        .rdp-day_selected {
                            background-color: #2d5a4c !important;
                            color: white !important;
                            border: 1px solid #2d5a4c !important;
                        }
                    `}</style>
                    <DayPicker
                        mode="single"
                        selected={selectedDate || undefined}
                        onSelect={(d) => d && setSelectedDate(d)}
                        month={month}
                        onMonthChange={setMonth}
                        disabled={[
                            { before: startOfToday() },
                            (date: Date) => {
                                if (date < startOfToday()) return true;
                                return getAvailableSlotsForDate(date).length === 0;
                            }
                        ]}
                        modifiers={modifiers}
                        modifiersClassNames={modifiersClassNames}
                        showOutsideDays={false}
                        classNames={{
                            months: "flex flex-col",
                            caption: "flex justify-center pt-2 pb-6 relative items-center",
                            caption_label: "text-[16px] font-heading font-semibold text-[#272d2c]",
                            nav: "hidden", // Nav buttons hidden because of chips
                            head_row: "flex justify-between w-full mb-3",
                            head_cell: "text-[#3f4544] !w-9 opacity-50 font-medium text-[12px] font-sans tracking-wide text-center mx-auto",
                            row: "flex justify-between w-full mb-3",
                            cell: "text-center relative p-0 overflow-visible",
                            day: "h-[34px] w-[34px] mx-auto p-0 font-medium hover:bg-[#2d5a4c]/10 rounded-[10px] transition-all duration-200 font-sans text-[#272d2c] flex items-center justify-center relative",
                            day_selected: "shadow-lg shadow-[#2d5a4c]/20 font-semibold transition-transform scale-[1.05]",
                            day_today: "text-[#2d5a4c] font-bold bg-[#2d5a4c]/5 rounded-[10px]",
                            day_disabled: "text-[#3f4544] opacity-20 cursor-not-allowed hover:bg-transparent !border-transparent !bg-transparent",
                            day_hidden: "invisible",
                        }}
                    />
                </div>

                {/* Legends */}
                <div className="flex items-center gap-8 mb-8 px-2 justify-center">
                    <div className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded-[4px] border border-[#00c951] bg-[#e6faee]" />
                        <span className="text-[13px] font-sans text-[#272d2c] opacity-80 font-medium">Slots Available</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded-[4px] border border-[#ff6900] bg-[#fff0e6]" />
                        <span className="text-[13px] font-sans text-[#272d2c] opacity-80 font-medium">Less Slots</span>
                    </div>
                </div>

                <AnimatePresence mode="popLayout">
                    {selectedDate && (
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white rounded-[24px] p-5 shadow-[0px_8px_30px_-4px_rgba(0,0,0,0.04)] border border-gray-100/50"
                        >
                            <h3 className="font-heading font-semibold text-[15px] text-[#272d2c] mb-4 flex items-center justify-between">
                                Available Slots
                                <span className="font-sans font-medium text-[13px] text-[#3f4544] opacity-50 bg-gray-50 px-2.5 py-1 rounded-[6px]">
                                    {format(selectedDate, 'MMM do')}
                                </span>
                            </h3>

                            {slotsForSelectedDate.length > 0 ? (
                                <div className="grid grid-cols-3 gap-2.5">
                                    {slotsForSelectedDate.map((time) => {
                                        const isSelected = selectedTime === time;
                                        return (
                                            <button
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                className={`flex items-center justify-center h-[42px] rounded-[10px] transition-all border
                                                    ${isSelected
                                                        ? 'bg-[#2d5a4c] text-white border-[#2d5a4c] shadow-[0_4px_12px_rgba(45,90,76,0.2)]'
                                                        : 'bg-white text-[#3f4544] border-gray-100 hover:border-[#2d5a4c]/30 hover:bg-[#f8f9f8]'
                                                    }`}
                                            >
                                                <span className={`font-sans text-[13px] leading-none ${isSelected ? 'font-semibold' : 'font-medium'}`}>
                                                    {time}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="text-center py-6 bg-[#fafafa] rounded-[12px] border border-dashed border-gray-200">
                                    <p className="font-sans font-medium text-[14px] text-[#3f4544] opacity-80">No time slots available.</p>
                                    <p className="font-sans text-[12px] text-[#3f4544] opacity-50 mt-1">Please select another date on the calendar.</p>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Sticky Action Button */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent pt-8 z-20">
                <motion.button
                    whileTap={{ scale: selectedDate && selectedTime ? 0.98 : 1 }}
                    disabled={!selectedDate || !selectedTime}
                    onClick={() => {
                        if (selectedDate && selectedTime) {
                            setShowConfirmPopover(true);
                        }
                    }}
                    className={`w-full h-[56px] flex items-center justify-center rounded-[16px] font-body font-semibold text-[16px] transition-all duration-200
                        ${(selectedDate && selectedTime)
                            ? 'bg-[#2D5A4C] text-white shadow-lg'
                            : 'bg-[#e7e8e8] text-[#b7b9b9] cursor-not-allowed border border-[#e7e8e8]'
                        }`}
                >
                    Reschedule Session
                </motion.button>
            </div>

            <AnimatePresence>
                {showConfirmPopover && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-50 flex items-center justify-center px-6"
                    >
                        <div className="absolute inset-0 bg-[#0F1615]/40 backdrop-blur-sm" onClick={() => !isLoading && setShowConfirmPopover(false)} />
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            className="bg-white rounded-[24px] p-6 w-full shadow-2xl relative z-10 flex flex-col gap-6"
                        >
                            <div className="text-center space-y-2">
                                <h3 className="font-heading font-semibold text-[18px] text-[#272d2c]">Confirm Reschedule</h3>
                                <p className="font-sans text-[14px] text-[#3f4544] opacity-80 leading-relaxed">
                                    Are you sure you want to change your session time?
                                </p>
                            </div>

                            <div className="flex flex-col gap-6 px-2">
                                <div className="flex flex-col gap-3">
                                    <p className="font-sans text-[13px] text-[#3f4544] opacity-60 font-medium">Original schedule</p>
                                    <div className="flex flex-col gap-2.5 text-[#272d2c] opacity-80">
                                        <div className="flex items-center gap-3">
                                            <CalendarBlank size={18} className="text-[#3f4544] opacity-50 rounded-[6px]" weight="regular" />
                                            <span className="font-sans text-[14px]">
                                                {booking?.date}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Clock size={18} className="text-[#3f4544] opacity-50 rounded-[6px]" weight="regular" />
                                            <span className="font-sans text-[14px]">
                                                {booking?.time?.replace(' (IST)', '')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-px bg-gray-100 w-full" />
                                <div className="flex flex-col gap-3">
                                    <p className="font-sans text-[13px] text-[#2d5a4c] opacity-90 font-medium">New schedule</p>
                                    <div className="flex flex-col gap-2.5 text-[#2d5a4c]">
                                        <div className="flex items-center gap-3">
                                            <CalendarBlank size={18} className="text-[#2d5a4c] opacity-80" weight="regular" />
                                            <span className="font-sans font-medium text-[14px]">
                                                {selectedDate ? format(selectedDate, 'dd/MM/yyyy') : ''}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Clock size={18} className="text-[#2d5a4c] opacity-80" weight="regular" />
                                            <span className="font-sans font-medium text-[14px]">
                                                {selectedTime?.replace(' (IST)', '')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-2">
                                <button
                                    disabled={isLoading}
                                    onClick={() => setShowConfirmPopover(false)}
                                    className="flex-1 h-[48px] rounded-[12px] font-sans font-medium text-[#3f4544] bg-[#f3f3f3] hover:bg-[#e7e8e8] transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    disabled={isLoading}
                                    onClick={() => {
                                        setIsLoading(true);
                                        setTimeout(() => {
                                            if (selectedDate && selectedTime) {
                                                onConfirm(format(selectedDate, 'dd/MM/yyyy'), selectedTime);
                                            }
                                        }, 1500);
                                    }}
                                    className="flex-1 h-[48px] rounded-[12px] font-sans font-semibold text-white bg-[#2d5a4c] hover:bg-[#23473c] transition-colors relative overflow-hidden"
                                >
                                    {isLoading ? (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        </div>
                                    ) : (
                                        "Confirm"
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
};
