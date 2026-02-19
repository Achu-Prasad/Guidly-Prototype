import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MagnifyingGlass as Search,
  Bell,
  Star,
  CaretRight as ChevronRight,
  House as Home,
  UsersThree as Users,
  Calendar,
  ChatCircle as MessageCircle,
  User,
  SquaresFour as LayoutGrid,
  CurrencyDollar,
  BookmarkSimple as Bookmark
} from "@phosphor-icons/react";
import { Logo } from './Logo';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mentor } from '../types/mentor';
import { MENTORS } from '../data/mentors';
import { BottomNav } from './ui/BottomNav';

// SVG Paths from Figma Consistent with TeamUp
const LOGO_SVG = (
  null
);

interface HomeScreenProps {
  onSearch: (query: string) => void;
  onSelectMentor: (mentor: Mentor) => void;
  onNavigate: (view: string) => void;
  recentMentors: Mentor[];
  favouriteMentors: Mentor[];
  hasUnreadChats?: boolean;
  unreadNotificationsCount?: number;
}

export const HomeScreen = ({ onSearch, onSelectMentor, onNavigate, recentMentors, favouriteMentors, hasUnreadChats, unreadNotificationsCount = 0 }: HomeScreenProps) => {
  const [activeTab, setActiveTab] = useState('Feed');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const renderMentorCard = (mentor: Mentor) => (
    <motion.div
      key={mentor.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelectMentor(mentor)}
      className="relative h-[236px] w-full rounded-[12px] overflow-hidden group cursor-pointer shrink-0"
    >
      <div className="absolute inset-0 bg-gray-200">
        <ImageWithFallback
          src={mentor.image}
          alt={mentor.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-4 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-all hover:bg-white/20">
            <Star size={12} weight="fill" className="text-white" />
            <span className="text-[12px] font-['Figtree',sans-serif] font-medium text-white">{mentor.rating_avg}</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full text-white hover:bg-white/20 transition-all">
            <CurrencyDollar size={14} weight="bold" />
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-white text-[18px] font-['Bricolage_Grotesque',sans-serif] font-medium leading-tight">
            {mentor.name}
          </h3>
          <p className="text-white/70 text-[14px] font-['Figtree',sans-serif]">
            {mentor.role} @ {mentor.company}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="flex flex-col h-full bg-[#f8f7f3] relative">
      {/* Header Consistent with TeamUp */}
      <div className="bg-white rounded-bl-[12px] rounded-br-[12px] pb-6 shrink-0 z-10">
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

        {/* Search Bar - Figma Style Consistent with TeamUp */}
        <div className="px-4 flex gap-2">
          <form onSubmit={handleSearchSubmit} className="flex-1 bg-[#f3f3f3] h-[48px] rounded-[4px] flex items-center px-[12px]">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-[16px] font-['Figtree'] outline-none border-none placeholder-[#3f4544]/40"
            />
          </form>
          <button
            onClick={() => handleSearchSubmit()}
            className="w-[51px] h-[48px] bg-[#f3f3f3] rounded-[4px] flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Search size={24} weight="regular" />
          </button>
        </div>

        {/* Tabs - Figma Style Consistent with TeamUp */}
        <div className="px-4 mt-4 flex gap-2 overflow-x-auto no-scrollbar">
          {['Feed', 'Recent', 'Favourites'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-[12px] py-[8px] rounded-[4px] text-[14px] font-['Figtree'] font-medium transition-all whitespace-nowrap ${activeTab === tab
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
      <div className="flex-1 overflow-y-auto px-4 pb-[100px] pt-4 no-scrollbar">
        <div className="space-y-4">
          {activeTab === 'Feed' && MENTORS.map(renderMentorCard)}

          {activeTab === 'Recent' && (
            recentMentors.length > 0 ? (
              recentMentors.map(renderMentorCard)
            ) : (
              <div className="flex flex-col items-center justify-center py-20 px-8 text-center bg-white/50 rounded-2xl border border-dashed border-gray-200">
                <p className="text-[14px] font-['Bricolage_Grotesque'] font-medium text-[#3f4544] opacity-70">
                  You haven’t any recent searches
                </p>
              </div>
            )
          )}

          {activeTab === 'Favourites' && (
            favouriteMentors.length > 0 ? (
              favouriteMentors.map(renderMentorCard)
            ) : (
              <div className="flex flex-col items-center justify-center py-20 px-8 text-center bg-white/50 rounded-2xl border border-dashed border-gray-200">
                <p className="text-[14px] font-['Bricolage_Grotesque'] font-medium text-[#3f4544] opacity-70">
                  No favourites yet
                </p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeView="home" onNavigate={onNavigate} hasUnreadChats={hasUnreadChats} />
    </div>
  );
};