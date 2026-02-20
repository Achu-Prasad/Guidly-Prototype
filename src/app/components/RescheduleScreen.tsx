import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
    CaretLeft,
    Bell,
    CalendarBlank,
    CaretDown,
    Calendar as CalendarIcon
} from "@phosphor-icons/react";
import { Logo } from './Logo';
import { BottomNav } from './ui/BottomNav';

interface RescheduleScreenProps {
    booking: any;
    onBack: () => void;
    onConfirm: (newDate: string, newTime: string) => void;
    onNavigate: (view: string) => void;
    hasUnreadChats?: boolean;
    unreadNotificationsCount?: number;
}

export const RescheduleScreen = ({
    booking,
    onBack,
    onConfirm,
    onNavigate,
    hasUnreadChats,
    unreadNotificationsCount = 0
}: RescheduleScreenProps) => {
    const [selectedDate, setSelectedDate] = useState('15');
    const [selectedTime, setSelectedTime] = useState('');

    const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    const dates = [
        { day: '1', status: 'unavailable' },
        { day: '2', status: 'available' },
        { day: '3', status: 'unavailable' },
        { day: '4', status: 'unavailable' },
        { day: '5', status: 'unavailable' },
        { day: '6', status: 'unavailable' },
        { day: '7', status: 'unavailable' },
        { day: '8', status: 'unavailable' },
        { day: '9', status: 'less' },
        { day: '10', status: 'unavailable' },
        { day: '11', status: 'unavailable' },
        { day: '12', status: 'unavailable' },
        { day: '13', status: 'unavailable' },
        { day: '14', status: 'unavailable' },
        { day: '15', status: 'available' },
        { day: '16', status: 'unavailable' },
        { day: '17', status: 'unavailable' },
        { day: '18', status: 'unavailable' },
        { day: '19', status: 'unavailable' },
        { day: '20', status: 'unavailable' },
        { day: '21', status: 'unavailable' },
        { day: '22', status: 'available' },
        { day: '23', status: 'available' },
        { day: '24', status: 'unavailable' },
        { day: '25', status: 'unavailable' },
        { day: '26', status: 'unavailable' },
        { day: '27', status: 'unavailable' },
        { day: '28', status: 'unavailable' },
        { day: '29', status: 'unavailable' },
        { day: '30', status: 'unavailable' },
    ];

    const timeSlots = [
        { time: '08:00AM', status: 'unavailable' },
        { time: '11:00AM', status: 'unavailable' },
        { time: '01:00PM', status: 'unavailable' },
        { time: '03:00PM', status: 'unavailable' },
        { time: '08:00PM', status: 'unavailable' },
    ];

    return (
        <div className="flex flex-col h-full bg-[#f8f7f3] relative">
            {/* Header */}
            <div className="bg-white rounded-bl-[12px] rounded-br-[12px] pb-4 shrink-0 shadow-sm border-b border-gray-100">
                <header className="px-4 pt-10 pb-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Logo />
                    </div>
                    <button
                        onClick={() => onNavigate('notifications')}
                        className="relative w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors"
                    >
                        <Bell size={24} weight="regular" className="text-[#0F1615]" />
                        {unreadNotificationsCount > 0 && (
                            <span className="absolute top-[11px] right-[11px] min-w-[15px] h-[15px] px-1 bg-[#fb2c36] rounded-full flex items-center justify-center text-[10px] text-white font-semibold shadow-sm">
                                {unreadNotificationsCount}
                            </span>
                        )}
                    </button>
                </header>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-4 pt-6 pb-[100px] no-scrollbar">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-[14px] font-heading font-medium text-[#3f4544] opacity-90 uppercase tracking-wider">Calendar</h2>
                    <div className="flex gap-2">
                        <button className="h-[30px] px-3 bg-[#edebe1] rounded-[4px] flex items-center gap-2 text-[12px] font-body font-medium text-[#3f4544]">
                            JUN <CaretDown size={14} />
                        </button>
                        <button className="h-[30px] px-3 bg-[#edebe1] rounded-[4px] flex items-center gap-2 text-[12px] font-body font-medium text-[#3f4544]">
                            <CalendarBlank size={14} /> 02 Jun, 2025 <CaretDown size={14} />
                        </button>
                    </div>
                </div>

                {/* Calendar Grid */}
                <div className="bg-[#edebe1]/40 rounded-[8px] p-4 mb-6 border border-[#edebe1]">
                    <div className="grid grid-cols-7 gap-y-2 mb-4">
                        {days.map(day => (
                            <div key={day} className="text-center text-[12px] font-body font-semibold text-[#3f4544] opacity-80">
                                {day}
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 gap-y-4 gap-x-2">
                        {/* Placeholder for leading empty slots if any */}
                        <div className="col-span-5"></div>
                        {dates.map((date, idx) => (
                            <button
                                key={idx}
                                disabled={date.status === 'unavailable'}
                                onClick={() => setSelectedDate(date.day)}
                                className={`w-10 h-10 rounded-[8px] flex items-center justify-center text-[12px] font-body font-semibold transition-all
                                    ${selectedDate === date.day
                                        ? 'bg-[#2D5A4C] text-white shadow-md scale-105'
                                        : date.status === 'available'
                                            ? 'bg-[#e6faee] border border-[#00c951] text-[#00973d]'
                                            : date.status === 'less'
                                                ? 'bg-[#fff0e6] border border-[#ff6900] text-[#ff6900]'
                                                : 'text-[#b7b9b9] cursor-not-allowed'
                                    }`}
                            >
                                {date.day}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 bg-[#e6faee] border border-[#00c951] rounded-[4px]" />
                        <span className="text-[12px] font-body text-[#3f4544] opacity-80">Slots Available</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 bg-[#fff0e6] border border-[#ff6900] rounded-[4px]" />
                        <span className="text-[12px] font-body text-[#3f4544] opacity-80">Less Slots</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 bg-[#e7e8e8] border border-[#cfd0d0] rounded-[4px]" />
                        <span className="text-[12px] font-body text-[#3f4544] opacity-80">Un available</span>
                    </div>
                </div>

                {/* Time Slots */}
                <div className="grid grid-cols-3 gap-2 mb-8">
                    {timeSlots.map((slot, idx) => (
                        <button
                            key={idx}
                            disabled={slot.status === 'unavailable'}
                            className={`h-[36px] px-2 rounded-[4px] border flex items-center justify-center text-[14px] font-body transition-all
                                ${slot.status === 'available'
                                    ? 'bg-white border-gray-200 text-[#272d2c]'
                                    : 'bg-[#e7e8e8] border-[#cfd0d0] text-[#b7b9b9] cursor-not-allowed'
                                }`}
                        >
                            {slot.time}
                        </button>
                    ))}
                </div>

                <div className="text-center mb-10">
                    <p className="text-[14px] font-body text-[#3f4544] opacity-70">
                        Select a date for re-schedule your session
                    </p>
                    <div className="h-[1px] bg-gray-200 w-full mt-8" />
                </div>

                {/* Action Button */}
                <motion.button
                    whileTap={{ scale: 0.98 }}
                    disabled={!selectedDate}
                    onClick={() => onConfirm(selectedDate, selectedTime)}
                    className={`w-full h-[56px] rounded-[8px] font-body font-semibold text-[15px] transition-all
                        ${selectedDate
                            ? 'bg-[#2D5A4C] text-white shadow-lg active:bg-[#23473c]'
                            : 'bg-[#e7e8e8] text-[#b7b9b9] cursor-not-allowed'
                        }`}
                >
                    Re-Schedule Meeting
                </motion.button>
            </div>

            {/* Bottom Nav */}
            <BottomNav activeView="bookings" onNavigate={onNavigate} hasUnreadChats={hasUnreadChats} />
        </div>
    );
};
