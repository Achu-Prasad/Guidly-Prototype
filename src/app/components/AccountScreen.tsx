import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
    Bell,
    CaretRight,
    User,
    LockKey,
    CreditCard,
    LinkSimpleHorizontal,
    FileText,
    ShieldStar,
    Globe,
    SignOut,
    House as Home,
    UsersThree as Users,
    BookmarkSimple as Bookmark,
    ChatCircle as MessageCircle
} from "@phosphor-icons/react";
import { Logo } from './Logo';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BottomNav } from './ui/BottomNav';
import dpImage from '../../assets/dp.jpeg';

interface AccountScreenProps {
    onNavigate: (view: any) => void;
    hasUnreadChats?: boolean;
    unreadNotificationsCount?: number;
}

export const AccountScreen = ({ onNavigate, hasUnreadChats, unreadNotificationsCount = 0 }: AccountScreenProps) => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    return (
        <div className="flex flex-col h-full bg-[#f8f7f3] relative overflow-hidden font-['Figtree']">
            {/* Header */}
            <header className="bg-white px-4 pt-10 pb-4 flex justify-between items-center shadow-sm">
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

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto px-4 pt-6 pb-[100px] no-scrollbar">
                {/* Profile Card */}
                <div className="bg-white rounded-[12px] p-6 flex flex-col items-center gap-4 shadow-sm mb-6">
                    <div className="relative">
                        <div className="w-[89px] h-[89px] rounded-full p-[2px] border-2 border-gray-100 overflow-hidden bg-white">
                            <img
                                src={dpImage}
                                alt="Achu Prasad"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-[2px] right-[2px] w-[16px] h-[16px] bg-[#00973d] border-2 border-white rounded-full" />
                    </div>

                    <div className="text-center">
                        <h2 className="text-[20px] font-medium text-[#3f4544] leading-tight">Achu Prasad</h2>
                        <p className="text-[14px] text-[#3f4544] opacity-70">Product Designer . Mentee</p>
                    </div>

                    <button className="h-[40px] px-6 bg-[#2d5a4c] text-white rounded-[8px] text-[14px] font-medium hover:bg-[#214a3e] transition-colors">
                        Edit Profile
                    </button>
                </div>

                {/* Account Section */}
                <div className="space-y-4 mb-6">
                    <h3 className="text-[12px] font-medium text-[#3f4544] opacity-70 uppercase tracking-wider pl-1">Account</h3>
                    <div className="bg-white rounded-[12px] overflow-hidden shadow-sm border border-gray-100">
                        <AccountItem
                            icon={<User size={20} />}
                            title="Personal Info"
                            subtitle="Name, email, phone"
                        />
                        <AccountItem
                            icon={<LockKey size={20} />}
                            title="Security"
                            subtitle="Password, 2FA"
                        />
                        <AccountItem
                            icon={<CreditCard size={20} />}
                            title="Payments"
                            subtitle="Methods, History"
                        />
                        <AccountItem
                            icon={<LinkSimpleHorizontal size={20} />}
                            title="Linked Accounts"
                            subtitle="Google, LinkedIn"
                            isLast
                        />
                    </div>
                </div>

                {/* App Settings Section */}
                <div className="space-y-4 mb-6">
                    <h3 className="text-[12px] font-medium text-[#3f4544] opacity-70 uppercase tracking-wider pl-1">App Settings</h3>
                    <div className="bg-white rounded-[12px] overflow-hidden shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between p-4 border-b border-gray-50">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#f1f5f4] p-2 rounded-[8px] text-[#2d5a4c]">
                                    <Bell size={20} />
                                </div>
                                <span className="text-[14px] font-medium text-[#272d2c]">Notifications</span>
                            </div>
                            <button
                                onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                                className={`w-[44px] h-[24px] rounded-full relative transition-colors ${notificationsEnabled ? 'bg-[#2d5a4c]' : 'bg-gray-200'}`}
                            >
                                <div className={`absolute top-[4px] w-[16px] h-[16px] bg-white rounded-full transition-all ${notificationsEnabled ? 'right-[4px]' : 'left-[4px]'}`} />
                            </button>
                        </div>
                        <AccountItem
                            icon={<Globe size={20} />}
                            title="Language"
                            rightText="English(US)"
                            isLast
                        />
                    </div>
                </div>

                {/* Legal Section */}
                <div className="space-y-4 mb-6">
                    <div className="bg-white rounded-[12px] overflow-hidden shadow-sm border border-gray-100">
                        <AccountItem
                            icon={<FileText size={20} />}
                            title="Terms of Service"
                        />
                        <AccountItem
                            icon={<ShieldStar size={20} />}
                            title="Privacy Policy"
                            isLast
                        />
                    </div>
                </div>

                {/* Logout Section */}
                <div className="flex flex-col items-center gap-2 mt-4 pb-4">
                    <button className="text-[#fb2c36] font-semibold text-[14px] flex items-center gap-2 hover:opacity-80 transition-opacity p-2">
                        <SignOut size={20} />
                        Log Out
                    </button>
                    <p className="text-[12px] text-[#3f4544] opacity-50">Version 2.4.0 (Build 302)</p>
                </div>
            </div>

            {/* Persistent Bottom Nav */}
            <BottomNav activeView="account" onNavigate={onNavigate} hasUnreadChats={hasUnreadChats} />
        </div>
    );
};

const AccountItem = ({ icon, title, subtitle, rightText, isLast = false }: { icon: React.ReactNode, title: string, subtitle?: string, rightText?: string, isLast?: boolean }) => (
    <div className={`group flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors ${!isLast ? 'border-b border-gray-50' : ''}`}>
        <div className="flex items-center gap-3">
            <div className="bg-[#f1f5f4] p-2 rounded-[8px] text-[#2d5a4c] group-hover:bg-white transition-colors">
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-[14px] font-medium text-[#272d2c]">{title}</span>
                {subtitle && <span className="text-[12px] text-[#9fa2a1]">{subtitle}</span>}
            </div>
        </div>
        <div className="flex items-center gap-1">
            {rightText && <span className="text-[12px] text-[#9fa2a1] pr-1">{rightText}</span>}
            <CaretRight size={20} className="text-gray-300" />
        </div>
    </div>
);

