import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    X,
    DotsThreeVertical,
    Clock,
    Book,
    ChatCircleText,
    Heart,
    CalendarCheck,
} from '@phosphor-icons/react';
import { Notification } from '../types/notification';
import { formatDistanceToNow } from 'date-fns';

interface NotificationScreenProps {
    notifications: Notification[];
    onMarkAsRead: (id: string) => void;
    onMarkAllRead: () => void;
    onDeleteAll: () => void;
    onClose: () => void;
    onNavigateToBooking?: (bookingId: string) => void;
    onNavigateToReview?: (reviewId: string) => void;
}

export const NotificationScreen = ({
    notifications,
    onMarkAsRead,
    onMarkAllRead,
    onDeleteAll,
    onClose,
    onNavigateToBooking,
    onNavigateToReview,
}: NotificationScreenProps) => {
    const [activeTab, setActiveTab] = useState<'General' | 'Bookings' | 'All read'>('General');
    const [menuOpen, setMenuOpen] = useState(false);
    const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

    const filteredNotifications = notifications.filter((n) => {
        if (activeTab === 'Bookings') return !n.is_read && (n.type === 'booking_confirmed' || n.type === 'session_reminder');
        if (activeTab === 'All read') return n.is_read;
        // General tab: only unread notifications
        return !n.is_read;
    }).sort((a, b) => {
        const dateA = new Date(a.created_at).getTime();
        const dateB = new Date(b.created_at).getTime();
        return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    const getIcon = (type: string) => {
        const iconSize = 18;
        switch (type) {
            case 'booking_confirmed':
                return <Book size={iconSize} weight="regular" className="text-[#2d5a4c]" />;
            case 'session_reminder':
                return <CalendarCheck size={iconSize} weight="regular" className="text-[#2d5a4c]" />;
            case 'review':
                return <ChatCircleText size={iconSize} weight="regular" className="text-[#2d5a4c]" />;
            case 'system':
                return <Heart size={iconSize} weight="regular" className="text-[#2d5a4c]" />;
            default:
                return <Book size={iconSize} weight="regular" className="text-[#2d5a4c]" />;
        }
    };

    const handleMarkAllRead = () => {
        onMarkAllRead();
        setMenuOpen(false);
    };

    const handleDeleteAll = () => {
        onDeleteAll();
        setMenuOpen(false);
    };

    const handleSort = () => {
        setSortOrder(prev => prev === 'newest' ? 'oldest' : 'newest');
        setMenuOpen(false);
    };

    return (
        <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute inset-0 bg-[#f8f7f3] z-[100] flex flex-col font-['Figtree']"
        >
            {/* Header */}
            <header className="px-4 pt-10 pb-4 flex justify-between items-center bg-white shadow-sm shrink-0">
                <h1 className="text-[16px] font-semibold text-[#272d2c] font-['Bricolage_Grotesque']">
                    Notifications
                </h1>
                <button
                    onClick={onClose}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors"
                >
                    <X size={24} weight="regular" className="text-[#0F1615]" />
                </button>
            </header>

            {/* Tabs */}
            <div className="bg-white px-4 border-b border-gray-100 flex items-center justify-between shrink-0">
                <div className="flex gap-4">
                    {['General', 'Bookings', 'All read'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`py-4 px-1 text-[14px] font-medium relative transition-colors ${activeTab === tab ? 'text-[#2d5a4c]' : 'text-[#3f4544] opacity-50'
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="activeTabUnderline"
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2d5a4c]"
                                />
                            )}
                        </button>
                    ))}
                </div>
                <div className="relative">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-2 text-[#3f4544] hover:bg-gray-50 rounded-full transition-colors"
                    >
                        <DotsThreeVertical size={20} weight="bold" />
                    </button>

                    <AnimatePresence>
                        {menuOpen && (
                            <>
                                <div
                                    className="fixed inset-0 z-[80]"
                                    onClick={() => setMenuOpen(false)}
                                />
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                    className="absolute right-0 top-full mt-1 w-[180px] bg-white rounded-[12px] shadow-[0px_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 z-[90] overflow-hidden"
                                >
                                    <button
                                        onClick={handleMarkAllRead}
                                        className="w-full px-4 py-3 text-left text-[14px] text-[#3f4544] hover:bg-[#f8f7f3] transition-colors"
                                    >
                                        Mark all as read
                                    </button>
                                    <button
                                        onClick={handleDeleteAll}
                                        className="w-full px-4 py-3 text-left text-[14px] text-[#3f4544] hover:bg-[#f8f7f3] transition-colors"
                                    >
                                        Delete all
                                    </button>
                                    <button
                                        onClick={handleSort}
                                        className="w-full px-4 py-3 text-left text-[14px] text-[#3f4544] hover:bg-[#f8f7f3] transition-colors flex justify-between items-center"
                                    >
                                        <span>Sort</span>
                                        <span className="text-[10px] opacity-40 uppercase tracking-wider">{sortOrder}</span>
                                    </button>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Notifications List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar">
                <AnimatePresence mode="popLayout">
                    {filteredNotifications.length > 0 ? (
                        filteredNotifications.map((notification) => (
                            <motion.div
                                key={notification.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                onClick={() => {
                                    onMarkAsRead(notification.id);
                                    if (notification.type === 'booking_confirmed' && onNavigateToBooking) {
                                        onNavigateToBooking(notification.related_id || '');
                                    }
                                }}
                                className={`p-4 rounded-[16px] transition-all cursor-pointer relative flex gap-4 bg-white border border-gray-100/50 shadow-sm`}
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${!notification.is_read ? 'bg-white shadow-sm' : 'bg-[#f8f7f3]'
                                    }`}>
                                    {getIcon(notification.type)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className={`text-[15px] font-semibold leading-tight truncate pr-4 ${!notification.is_read ? 'text-[#272d2c]' : 'text-[#3f4544] opacity-70'
                                            }`}>
                                            {notification.title}
                                        </h3>
                                        <span className="text-[12px] text-[#3f4544] opacity-40 whitespace-nowrap pt-0.5">
                                            {formatDistanceToNow(new Date(notification.created_at), { addSuffix: false })
                                                .replace('about ', '')
                                                .replace(' hours', 'h')
                                                .replace(' hour', 'h')
                                                .replace(' minutes', 'm')
                                                .replace(' minute', 'm')
                                                .replace(' days', 'd')
                                                .replace(' day', 'd')
                                            }
                                        </span>
                                    </div>
                                    <p className={`text-[14px] leading-[1.4] ${!notification.is_read ? 'text-[#3f4544]' : 'text-[#3f4544] opacity-50'
                                        }`}>
                                        {notification.message}
                                    </p>
                                </div>
                                {!notification.is_read && (
                                    <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#fb2c36] rounded-full" />
                                )}
                            </motion.div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center opacity-40">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <Clock size={32} />
                            </div>
                            <p className="text-[14px]">No notifications in this category</p>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};
