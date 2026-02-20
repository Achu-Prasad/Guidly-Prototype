import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
    MagnifyingGlass as Search,
    Bell,
    House as Home,
    UsersThree as Users,
    BookmarkSimple as Bookmark,
    ChatCircle as MessageCircle,
    User,
    VideoCamera,
    Calendar,
    Clock,
    FadersHorizontal as Filter
} from "@phosphor-icons/react";
import { Logo } from './Logo';
import { BottomNav } from './ui/BottomNav';
import { BookingDetailsModal } from './BookingDetailsModal';

interface BookingItem {
    id: string;
    title: string;
    subtitle: string;
    date: string;
    time: string;
    duration: string;
    type: 'session' | 'event';
    status?: 'join' | 'upcoming';
}

interface BookingsProps {
    onNavigate: (view: string) => void;
    bookings: BookingItem[];
    hasUnreadChats?: boolean;
    initialTab?: string;
    unreadNotificationsCount?: number;
}

export const Bookings = ({ onNavigate, bookings, hasUnreadChats, initialTab, unreadNotificationsCount = 0 }: BookingsProps) => {
    const [activeTab, setActiveTab] = useState(initialTab || 'All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBooking, setSelectedBooking] = useState<BookingItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col h-full bg-[#f8f7f3] relative">
            {/* Header */}
            <div className="bg-white rounded-bl-[12px] rounded-br-[12px] pb-6 shrink-0 shadow-sm">
                <header className="px-4 pt-10 pb-4 flex justify-between items-center">
                    <Logo />
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

                {/* Search Bar */}
                <div className="px-4 flex gap-2">
                    <div className="flex-1 bg-[#f3f3f3] h-[48px] rounded-[8px] flex items-center px-[12px]">
                        <input
                            type="text"
                            placeholder="Search Bookings"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent text-[16px] font-['Figtree'] outline-none border-none placeholder-[#3f4544]/40"
                        />
                    </div>
                    <button className="w-[51px] h-[48px] bg-[#f3f3f3] rounded-[8px] flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <Search size={24} weight="regular" />
                    </button>
                </div>

                {/* Tabs */}
                <div className="px-4 mt-4 flex gap-2 overflow-x-auto no-scrollbar">
                    {['All', 'Sessions', 'Events'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-[12px] py-[8px] rounded-[8px] text-[14px] font-['Figtree'] font-medium transition-all whitespace-nowrap ${activeTab === tab
                                ? 'bg-[#edebe1] text-[#2D5A4C]'
                                : 'text-[#3f4544] hover:bg-gray-50'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-4 pb-[100px] pt-4 space-y-3 no-scrollbar">
                {(() => {
                    const filteredBookings = bookings
                        .filter(b => activeTab === 'All' || (activeTab === 'Sessions' && b.type === 'session') || (activeTab === 'Events' && b.type === 'event'))
                        .filter(b => !searchQuery.trim() || b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.subtitle.toLowerCase().includes(searchQuery.toLowerCase()));

                    if (filteredBookings.length === 0) {
                        return (
                            <div className="flex flex-col items-center justify-center py-20 px-8 text-center bg-white/50 rounded-2xl border border-dashed border-gray-200">
                                <p className="text-[14px] font-heading font-medium text-[#3f4544] opacity-70">
                                    You haven't any {activeTab === 'All' ? 'bookings' : activeTab.toLowerCase()}
                                </p>
                            </div>
                        );
                    }

                    return filteredBookings.map((booking) => (
                        <motion.div
                            key={booking.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            onClick={() => {
                                setSelectedBooking(booking);
                                setIsModalOpen(true);
                            }}
                            className="bg-white p-2 rounded-[8px] cursor-pointer shadow-[0px_2px_2px_rgba(0,0,0,0.05)] border border-gray-100 flex gap-3 h-[98px] relative transition-transform hover:scale-[1.01]"
                        >
                            {booking.status === 'join' && (
                                <div className="absolute top-2 right-2 bg-[#00973d]/10 px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-[#00973d]/5">
                                    <div className="w-1.5 h-1.5 bg-[#00973d] rounded-full" />
                                    <span className="text-[10px] font-bold text-[#00973d] uppercase tracking-wider font-['Figtree']">Join</span>
                                </div>
                            )}
                            {booking.status === 'upcoming' && (
                                <div className="absolute top-2 right-2 bg-[#2d5a4c]/10 px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-[#2d5a4c]/5">
                                    <div className="w-1.5 h-1.5 bg-[#2d5a4c] rounded-full" />
                                    <span className="text-[10px] font-bold text-[#2d5a4c] uppercase tracking-wider font-['Figtree']">New</span>
                                </div>
                            )}

                            {/* Left Icon Area */}
                            <div className="w-10 h-10 bg-[#f1f5f4] rounded-[10px] flex items-center justify-center shrink-0 mt-1">
                                {booking.type === 'session' ? (
                                    <VideoCamera size={20} weight="duotone" className="text-[#2D5A4C]" />
                                ) : (
                                    <Users size={20} weight="duotone" className="text-[#2D5A4C]" />
                                )}
                            </div>

                            {/* Middle Content Area */}
                            <div className="flex-1 flex flex-col justify-between py-1 overflow-hidden">
                                <div className="space-y-0.5">
                                    <h3 className="text-[14px] font-medium text-[#272d2c] font-['Figtree'] truncate pr-16">{booking.title}</h3>
                                    <p className="text-[12px] text-[#3f4544] opacity-60 font-['Figtree'] truncate pr-16">
                                        {booking.subtitle}
                                    </p>
                                </div>

                                <div className="space-y-0.5">
                                    <div className="flex items-center gap-1 text-[11px] text-[#3f4544] opacity-80 font-['Figtree']">
                                        <Calendar size={12} weight="duotone" className="text-[#2D5A4C]" />
                                        <span>{booking.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[11px] text-[#3f4544] opacity-80 font-['Figtree']">
                                        <div className="flex items-center gap-1">
                                            <Clock size={12} weight="duotone" className="text-[#2D5A4C]" />
                                            <span>{booking.time}</span>
                                        </div>
                                        <div className="w-[1px] h-3 bg-gray-200" />
                                        <div className="flex items-center gap-1">
                                            <span className="opacity-40">Dur :</span>
                                            <span>{booking.duration}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ));
                })()}
            </div>

            {/* Bottom Navigation */}
            <BottomNav activeView="bookings" onNavigate={onNavigate} hasUnreadChats={hasUnreadChats} />

            {/* Booking Details Modal Popup */}
            {isModalOpen && (
                <BookingDetailsModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    booking={selectedBooking}
                    onReschedule={(b) => {
                        console.log("Rescheduling flow for:", b);
                    }}
                />
            )}
        </div>
    );
};
