import React, { useState } from 'react';
import {
    Bell,
    MagnifyingGlass as Search,
    Checks,
    Check,
    UsersThree as Users,
    House as Home,
    BookmarkSimple as Bookmark,
    ChatCircle as MessageCircle,
    User
} from "@phosphor-icons/react";
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BottomNav } from './ui/BottomNav';
import { Chat } from '../types/chat';

interface ChatListProps {
    onNavigate: (view: string) => void;
    onSelectChat: (user: { id: string | number, name: string, image: string, isGroup?: boolean }) => void;
    chats: Chat[];
    hasUnreadChats?: boolean;
    unreadNotificationsCount?: number;
}

export const ChatList = ({ onNavigate, onSelectChat, chats, hasUnreadChats, unreadNotificationsCount = 0 }: ChatListProps) => {
    const [activeTab, setActiveTab] = useState('All Chats');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredChats = chats.filter(chat => {
        if (activeTab === 'Mentors') return chat.type === 'mentor';
        if (activeTab === 'Communities') return chat.type === 'community';
        return true;
    }).filter(chat =>
        chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chat.message.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col h-full bg-[#f8f7f3] relative">
            {/* Header Container */}
            <div className="bg-white rounded-bl-[12px] rounded-br-[12px] pb-6 shrink-0 z-10 shadow-sm">
                <header className="px-4 pt-10 pb-4 flex justify-between items-center">
                    <Logo />
                    <button
                        onClick={() => onNavigate('notifications')}
                        className="relative w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors"
                    >
                        <Bell size={24} weight="regular" className="text-[#0F1615] opacity-80" />
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
                            placeholder="Search Chats, Groups ..etc"
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
                    {['All Chats', 'Mentors', 'Communities'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-[12px] py-[8px] rounded-[8px] text-[14px] font-['Figtree'] font-medium transition-all whitespace-nowrap ${activeTab === tab
                                ? 'bg-[#edebe1] text-[#2D5A4C]'
                                : 'text-[#3f4544] opacity-90 hover:bg-gray-50'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Chat List Content */}
            <div className="flex-1 overflow-y-auto px-4 pt-4 pb-[100px] no-scrollbar">
                <div className="space-y-2">
                    {filteredChats.length > 0 ? (
                        filteredChats.map((chat, index) => (
                            <motion.div
                                key={chat.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.05,
                                    duration: 0.4,
                                    ease: [0.21, 0.45, 0.32, 0.9]
                                }}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => onSelectChat({ id: chat.id, name: chat.name, image: chat.image, isGroup: chat.isGroup })}
                                className="bg-white rounded-[12px] p-3 flex items-center gap-3 cursor-pointer hover:bg-white/80 transition-colors shadow-sm"
                            >
                                <div className="relative">
                                    <div className="w-[47px] h-[47px] rounded-full overflow-hidden shrink-0">
                                        <ImageWithFallback
                                            src={chat.image}
                                            alt={chat.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {chat.isGroup && (
                                        <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-md border border-gray-50">
                                            <Users size={12} weight="bold" className="text-[#2d5a4c]" />
                                        </div>
                                    )}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-center mb-0.5">
                                        <h3 className="text-[14px] font-['Figtree'] font-medium text-[#272d2c] truncate">
                                            {chat.name}
                                        </h3>
                                        <span className="text-[11px] font-['Figtree'] text-[#b7b9b9]">
                                            {chat.time}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-1.5 min-w-0">
                                            {chat.status === 'read' ? (
                                                <Checks size={16} className="text-[#2d5a4c] shrink-0" />
                                            ) : (
                                                <Check size={16} className="text-[#b7b9b9] shrink-0" />
                                            )}
                                            <p className="text-[14px] font-['Figtree'] text-[#3f4544] truncate">
                                                {chat.message}
                                            </p>
                                        </div>
                                        {chat.unread > 0 && (
                                            <div className="min-w-[18px] h-[18px] bg-[#2d5a4c] rounded-full flex items-center justify-center px-1">
                                                <span className="text-[14px] font-['Figtree'] font-medium text-white text-[10px]">
                                                    {chat.unread}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 px-8 text-center bg-white/50 rounded-2xl border border-dashed border-gray-200">
                            <p className="text-[14px] font-heading font-medium text-[#3f4544] opacity-70">
                                You haven't any {activeTab === 'All Chats' ? 'chats' : activeTab.toLowerCase()}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Persistent Bottom Nav */}
            <BottomNav activeView="chat" onNavigate={onNavigate} hasUnreadChats={hasUnreadChats} />
        </div>
    );
};

