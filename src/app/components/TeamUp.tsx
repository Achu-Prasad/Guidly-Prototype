import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MagnifyingGlass as Search,
  Bell,
  FadersHorizontal as FilterList,
  UsersThree as Users,
  GraduationCap,
  Smiley,
  Handshake,
  VideoCamera as VideoConference,
  Translate,
  House as Home,
  Calendar,
  ChatCircle as MessageCircle,
  User,
  CaretRight,
  BookmarkSimple as Bookmark,
  Clock,
  MapPin,
  Lightning,
  Crown,
  Ticket,
  ArrowRight
} from "@phosphor-icons/react";
import { Logo } from './Logo';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { COMMUNITIES } from '../data/communities';
import { BottomNav } from './ui/BottomNav';
import { MOCK_EVENTS } from '../data/events';
import { format, differenceInDays, isPast } from 'date-fns';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "./ui/drawer";
import { TeamUpEvent } from "../types/team";

// SVG Paths from Figma
const LOGO_SVG = (
  null
);

// Soft avatar colors for attendee stack
const AVATAR_COLORS = [
  'bg-[#E8D5B7]', 'bg-[#B7D5E8]', 'bg-[#D5E8B7]', 'bg-[#E8B7D5]', 'bg-[#B7E8D5]'
];

const AVATAR_INITIALS = ['A', 'S', 'R', 'M', 'P', 'K', 'J', 'N'];

// Category color mapping
const CATEGORY_STYLES: Record<string, { bg: string; text: string; dot: string }> = {
  Workshop: { bg: 'bg-[#E8F0ED]', text: 'text-[#2D5A4C]', dot: 'bg-[#2D5A4C]' },
  Masterclass: { bg: 'bg-[#FFF3E0]', text: 'text-[#B87333]', dot: 'bg-[#D4944A]' },
  Meetup: { bg: 'bg-[#EDE7F6]', text: 'text-[#5E4B8B]', dot: 'bg-[#7E57C2]' },
  Review: { bg: 'bg-[#E3F2FD]', text: 'text-[#3D6B99]', dot: 'bg-[#5C8DB8]' },
  Talk: { bg: 'bg-[#FFF8E1]', text: 'text-[#8D7B2E]', dot: 'bg-[#C9A94C]' },
};

interface TeamUpProps {
  onNavigate: (view: string) => void;
  hasUnreadChats?: boolean;
  onBookEvent?: (event: TeamUpEvent) => void;
}

export const TeamUp = ({ onNavigate, hasUnreadChats, onBookEvent }: TeamUpProps) => {
  const [activeTab, setActiveTab] = useState('Communities');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedEvents, setBookmarkedEvents] = useState<string[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<TeamUpEvent | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleEventClick = (event: TeamUpEvent) => {
    setSelectedEvent(event);
    setIsDrawerOpen(true);
  };

  const toggleBookmark = (eventId: string) => {
    setBookmarkedEvents(prev =>
      prev.includes(eventId) ? prev.filter(id => id !== eventId) : [...prev, eventId]
    );
  };

  return (
    <div className="flex flex-col h-full bg-[#f8f7f3] relative">
      {/* Figma Header Style */}
      <div className="bg-white rounded-bl-[12px] rounded-br-[12px] pb-6 shrink-0">
        <header className="px-4 pt-10 pb-4 flex justify-between items-center">
          <Logo />
          <button
            onClick={() => onNavigate('notifications')}
            className="relative w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors"
          >
            <Bell size={24} weight="regular" className="text-[#0F1615]" />
            <span className="absolute top-[11px] right-[11px] w-[15px] h-[15px] bg-[#fb2c36] rounded-full flex items-center justify-center text-[10px] text-white font-semibold">
              4
            </span>
          </button>
        </header>

        {/* Search Bar - Figma Style */}
        <div className="px-4 flex gap-2">
          <div className="flex-1 bg-[#f3f3f3] h-[48px] rounded-[4px] flex items-center px-[12px]">
            <input
              type="text"
              placeholder={`Search ${activeTab}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-[16px] font-['Figtree'] outline-none border-none placeholder-[#3f4544]/40"
            />
          </div>
          <button className="w-[51px] h-[48px] bg-[#f3f3f3] rounded-[4px] flex items-center justify-center hover:bg-gray-200 transition-colors">
            <Search size={24} weight="regular" />
          </button>
        </div>

        {/* Tabs - Figma Style */}
        <div className="px-4 mt-4 flex gap-2 overflow-x-auto no-scrollbar">
          {['Communities', 'Events', 'Joined'].map((tab) => (
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
        {activeTab === 'Communities' && (
          <div className="space-y-6">
            {COMMUNITIES.map((community) => (
              <motion.div
                key={community.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[16px] overflow-hidden shadow-[0px_4px_9px_0px_rgba(0,0,0,0.08)] border border-[rgba(63,69,68,0.1)]"
              >
                {/* Image Banner */}
                <div className="h-[176px] relative">
                  <ImageWithFallback
                    src={community.image}
                    alt={community.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#4b6e68]/80" />

                  {/* Profile Info inside Banner */}
                  <div className="absolute bottom-4 left-4 flex gap-3 items-center">
                    <div className="w-[45px] h-[45px] rounded-[12px] overflow-hidden bg-white shadow-lg">
                      <ImageWithFallback src={community.logo} alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-white">
                      <h3 className="text-[16px] font-semibold font-['Figtree'] leading-tight">{community.name}</h3>
                      <div className="flex items-center gap-3 mt-0.5">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-[#00973d] rounded-full" />
                          <span className="text-[12px] font-medium opacity-90">{community.isOnlineOnly ? 'Online Only' : 'Hybrid'}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={14} />
                          <span className="text-[12px] font-medium opacity-90">{community.memberCount} Members</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-4">
                  <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 pb-2 pt-1 flex-nowrap scroll-smooth touch-pan-x min-w-0">
                    {community.tags.map(tag => (
                      <div key={tag} className="bg-[#f3f3f3] border border-[rgba(63,69,68,0.1)] px-[10px] py-[6px] rounded-[4px] flex items-center gap-1 shrink-0 whitespace-nowrap">
                        <TagIcon tag={tag} />
                        <span className="text-[12px] font-['Figtree'] text-[#272d2c]">{tag}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-[14px] font-['Figtree'] text-[#3f4544] opacity-80 leading-relaxed line-clamp-2">
                    {community.description}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <button className="text-[12px] font-medium text-[#3f4544] opacity-70">
                      View page
                    </button>
                    <button className="bg-[#2D5A4C] text-white px-4 py-2 rounded-[64px] text-[14px] font-medium">
                      Request to Join
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'Events' && (
          <div className="flex flex-col gap-5">
            {MOCK_EVENTS.map((event, index) => {
              const community = COMMUNITIES.find(c => c.id === event.community_id);
              const catStyle = CATEGORY_STYLES[event.category || 'Workshop'] || CATEGORY_STYLES.Workshop;
              const isBookmarked = bookmarkedEvents.includes(event.id);
              const eventDate = new Date(event.start_time);
              const endDate = new Date(event.end_time);
              const daysUntil = differenceInDays(eventDate, new Date());
              const durationHrs = ((endDate.getTime() - eventDate.getTime()) / 3600000).toFixed(1);
              const spotsLeft = (event.max_attendees || 30) - event.attendee_ids.length;
              const isFree = event.ticket_price === 0;
              const isSoon = daysUntil >= 0 && daysUntil <= 3;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  onClick={() => handleEventClick(event)}
                  className="bg-white rounded-[16px] overflow-hidden border border-[rgba(63,69,68,0.06)] shadow-[0px_2px_8px_rgba(0,0,0,0.04),0px_8px_24px_rgba(0,0,0,0.06)] group/card cursor-pointer active:scale-[0.98] transition-all"
                >
                  {/* Image Banner */}
                  <div className="h-[148px] relative w-full overflow-hidden">
                    <ImageWithFallback
                      src={event.image || "https://images.unsplash.com/photo-1710799885122-428e63eff691?auto=format&fit=crop&q=80&w=800"}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover/card:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    {/* Soft gradient - lighter, warmer */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/30" />

                    {/* Floating Date Badge - top left */}
                    <div className="absolute top-3 left-3">
                      <div className="bg-white/95 backdrop-blur-sm rounded-[10px] px-[10px] py-[6px] flex flex-col items-center min-w-[44px] shadow-[0px_2px_8px_rgba(0,0,0,0.08)]">
                        <span className="text-[10px] font-['Figtree'] font-semibold text-[#2D5A4C] uppercase leading-none tracking-wide">
                          {format(eventDate, 'MMM')}
                        </span>
                        <span className="text-[18px] font-['Bricolage_Grotesque'] font-semibold text-[#1b362e] leading-tight">
                          {format(eventDate, 'd')}
                        </span>
                      </div>
                    </div>

                    {/* "Happening Soon" ribbon */}
                    {isSoon && (
                      <div className="absolute bottom-3 left-3">

                      </div>
                    )}

                    {/* Price badge - top right of image */}
                    <div className="absolute top-3 right-3">
                      <div className={`rounded-full px-[10px] py-[5px] backdrop-blur-sm ${isFree ? 'bg-[#E8F0ED]/95' : 'bg-white/95'} shadow-[0px_2px_6px_rgba(0,0,0,0.06)] flex items-center justify-center`}>
                        <span className={`text-[11px] font-['Figtree'] font-bold leading-[11px] block ${isFree ? 'text-[#2D5A4C]' : 'text-[#272d2c]'}`}>
                          {isFree ? 'Free' : `$${event.ticket_price}`}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col gap-[10px]">
                    {/* Category + Community Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-[8px]">
                        {/* Category pill */}
                        <div className={`${catStyle.bg} rounded-full px-[8px] py-[3px] flex items-center gap-[4px]`}>
                          <div className={`w-[5px] h-[5px] rounded-full ${catStyle.dot}`} />
                          <span className={`text-[10px] font-['Figtree'] font-semibold ${catStyle.text} tracking-wide uppercase`}>
                            {event.category}
                          </span>
                        </div>
                        {/* Duration */}
                        <div className="flex items-center gap-[3px]">
                          <Clock size={12} className="text-[#3f4544] opacity-35" />
                          <span className="text-[11px] font-['Figtree'] text-[#3f4544] opacity-50">{durationHrs}h</span>
                        </div>
                      </div>

                      {/* Community badge */}
                      <div className="flex items-center gap-[5px]">
                        <div className="size-[16px] rounded-full overflow-hidden ring-1 ring-[rgba(63,69,68,0.08)]">
                          <ImageWithFallback src={community?.logo} alt="" className="size-full object-cover" />
                        </div>
                        <span className="text-[11px] font-['Figtree'] text-[#3f4544] opacity-55 max-w-[80px] truncate">{community?.name}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-[16px] font-['Bricolage_Grotesque'] font-semibold text-[#1b362e] leading-[1.3] line-clamp-2" style={{ fontVariationSettings: "'opsz' 16, 'wdth' 100" }}>
                      {event.title}
                    </h4>

                    {/* Meta Row: Time + Platform */}
                    <div className="flex items-center gap-[12px]">
                      <div className="flex items-center gap-[4px]">
                        <Calendar size={13} className="text-[#2D5A4C] opacity-60" />
                        <span className="text-[12px] font-['Figtree'] font-medium text-[#3f4544] opacity-75">
                          {format(eventDate, 'EEE, dd MMM')}
                        </span>
                      </div>
                      <div className="w-[3px] h-[3px] bg-[#d4d4d4] rounded-full" />
                      <span className="text-[12px] font-['Figtree'] font-semibold text-[#2D5A4C]">
                        {format(eventDate, 'hh:mm a')}
                      </span>
                    </div>

                    {/* Host + Location Row */}
                    <div className="flex items-center gap-[12px]">
                      <div className="flex items-center gap-[5px]">
                        <div className="size-[18px] rounded-full bg-[#E8F0ED] flex items-center justify-center">
                          <Crown size={10} weight="fill" className="text-[#2D5A4C]" />
                        </div>
                        <span className="text-[12px] font-['Figtree'] text-[#3f4544] opacity-70">{event.host_name}</span>
                      </div>
                      <div className="w-[3px] h-[3px] bg-[#d4d4d4] rounded-full" />
                      <div className="flex items-center gap-[4px]">
                        <VideoConference size={13} className="text-[#3f4544] opacity-40" />
                        <span className="text-[12px] font-['Figtree'] text-[#3f4544] opacity-60">Online</span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-[#f0efe9] mt-[2px]" />

                    {/* Bottom Row: Attendees + CTA */}
                    <div className="flex items-center justify-between mt-[2px]">
                      {/* Attendee Avatars + Spots */}
                      <div className="flex items-center gap-[10px]">
                        {/* Avatar Stack */}
                        <div className="flex -space-x-[6px]">
                          {event.attendee_ids.slice(0, 4).map((id, i) => (
                            <div
                              key={id}
                              className={`size-[24px] rounded-full ${AVATAR_COLORS[i % AVATAR_COLORS.length]} flex items-center justify-center ring-[1.5px] ring-white text-[9px] font-['Figtree'] font-bold text-[#3f4544]/60`}
                              style={{ zIndex: 4 - i }}
                            >
                              {AVATAR_INITIALS[i % AVATAR_INITIALS.length]}
                            </div>
                          ))}
                          {event.attendee_ids.length > 4 && (
                            <div
                              className="size-[24px] rounded-full bg-[#f3f3f3] flex items-center justify-center ring-[1.5px] ring-white text-[9px] font-['Figtree'] font-bold text-[#3f4544]/50"
                              style={{ zIndex: 0 }}
                            >
                              +{event.attendee_ids.length - 4}
                            </div>
                          )}
                        </div>
                        {/* Spots left */}
                        <div className="flex flex-col">
                          <span className="text-[11px] font-['Figtree'] font-medium text-[#3f4544] opacity-60 leading-tight">
                            {spotsLeft} spots left
                          </span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        whileTap={{ scale: 0.96 }}
                        className="bg-[#2D5A4C] text-white px-[16px] py-[8px] rounded-[10px] text-[13px] font-['Figtree'] font-semibold flex items-center gap-[6px] shadow-[0px_2px_6px_rgba(45,90,76,0.2)] hover:bg-[#244a3e] transition-colors"
                      >
                        {isFree ? (
                          <>
                            RSVP
                            <ArrowRight size={13} weight="bold" />
                          </>
                        ) : (
                          <>
                            <Ticket size={14} weight="bold" />
                            Get Ticket
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>


      {/* Bottom Navigation */}
      <BottomNav activeView="teamup" onNavigate={onNavigate} hasUnreadChats={hasUnreadChats} />

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} shouldScaleBackground={false}>
        <DrawerContent className="h-[85vh] rounded-t-[48px] z-[100] px-0 pt-0" portal={false}>
          {selectedEvent && (
            <div className="flex flex-col h-full w-full bg-white overflow-hidden">
              {/* Image Banner - Full Width */}
              <div className="shrink-0 relative w-full mb-[-24px]">
                <div className="h-[240px] w-full relative overflow-hidden transform-gpu">
                  <ImageWithFallback
                    src={selectedEvent.image || "https://images.unsplash.com/photo-1710799885122-428e63eff691?auto=format&fit=crop&q=80&w=800"}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full mb-3 border border-white/10 shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-[#00ff85] shadow-[0_0_8px_rgba(0,255,133,0.8)]" />
                      <span className="text-[11px] font-bold tracking-wider uppercase font-['Figtree'] shadow-sm">{selectedEvent.category}</span>
                    </div>
                    <h2 className="text-[26px] font-['Bricolage_Grotesque'] font-bold leading-[1.1] text-white drop-shadow-lg tracking-tight">
                      {selectedEvent.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Scrollable Details */}
              <div className="flex-1 overflow-y-auto p-5 pb-24">
                {/* Community Info (was Host Info) */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-[48px] rounded-[12px] overflow-hidden border border-gray-100 shadow-sm relative">
                    <ImageWithFallback
                      src={COMMUNITIES.find(c => c.id === selectedEvent.community_id)?.logo}
                      alt="Community"
                      className="size-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[16px] font-['Bricolage_Grotesque'] font-semibold text-[#1b362e] leading-tight">
                      {COMMUNITIES.find(c => c.id === selectedEvent.community_id)?.name}
                    </p>
                    <p className="text-[12px] text-[#3f4544] opacity-60 font-medium mt-0.5">
                      Hosted by <span className="text-[#2D5A4C] font-semibold">{selectedEvent.host_name}</span>
                    </p>
                  </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="bg-[#f8f7f3] p-3 rounded-[12px] flex flex-col gap-1 border border-[#ecebe6]">
                    <div className="flex items-center gap-2 text-[#2D5A4C]">
                      <Calendar size={18} weight="duotone" />
                      <span className="text-[12px] font-semibold uppercase opacity-80">Date</span>
                    </div>
                    <p className="text-[14px] font-medium text-[#272d2c] mt-1">
                      {format(new Date(selectedEvent.start_time), 'EEE, d MMM')}
                    </p>
                  </div>
                  <div className="bg-[#f8f7f3] p-3 rounded-[12px] flex flex-col gap-1 border border-[#ecebe6]">
                    <div className="flex items-center gap-2 text-[#2D5A4C]">
                      <Clock size={18} weight="duotone" />
                      <span className="text-[12px] font-semibold uppercase opacity-80">Time</span>
                    </div>
                    <p className="text-[14px] font-medium text-[#272d2c] mt-1">
                      {format(new Date(selectedEvent.start_time), 'hh:mm a')}
                    </p>
                  </div>
                  <div className="col-span-2 bg-[#f8f7f3] p-3 rounded-[12px] flex flex-col gap-1 border border-[#ecebe6]">
                    <div className="flex items-center gap-2 text-[#2D5A4C]">
                      <VideoConference size={18} weight="duotone" />
                      <span className="text-[12px] font-semibold uppercase opacity-80">Location</span>
                    </div>
                    <p className="text-[14px] font-medium text-[#272d2c] mt-1 truncate">
                      Online Event
                    </p>
                  </div>
                </div>

                {/* About Section */}
                <div className="mb-8">
                  <h3 className="text-[18px] font-['Bricolage_Grotesque'] font-semibold text-[#1b362e] mb-3">About Event</h3>
                  <p className="text-[15px] font-['Figtree'] text-[#3f4544] opacity-80 leading-[1.6]">
                    Join us for an immersive session on {selectedEvent.title}. This event is designed to specific topics related to {selectedEvent.category}, offering deep insights and practical takeaways for all attendees. Whether you are a beginner or an expert, you'll find value in the discussions and networking opportunities.
                  </p>
                  <p className="text-[15px] font-['Figtree'] text-[#3f4544] opacity-80 leading-[1.6] mt-3">
                    Don't miss out on this opportunity to connect with like-minded individuals and learn from industry experts.
                  </p>
                </div>
              </div>

              {/* Fixed Bottom Action */}
              <div className="absolute bottom-0 left-0 w-full p-5 bg-white/90 backdrop-blur-xl border-t border-gray-100 shadow-[0_-8px_30px_rgba(0,0,0,0.04)] flex items-center justify-between gap-6 pb-8 z-20">
                <div className="flex flex-col gap-1.5 flex-1">
                  <div className="flex items-center -space-x-2">
                    {selectedEvent.attendee_ids.slice(0, 4).map((id, i) => (
                      <div key={id} className={`w-[28px] h-[28px] rounded-full border-[2px] border-white flex items-center justify-center text-[10px] font-bold text-[#1b362e]/70 ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}>
                        {AVATAR_INITIALS[i % AVATAR_INITIALS.length]}
                      </div>
                    ))}
                    {selectedEvent.attendee_ids.length > 4 && (
                      <div className="w-[28px] h-[28px] rounded-full border-[2px] border-white bg-[#f1f5f4] flex items-center justify-center text-[9px] font-bold text-[#3f4544]">
                        +{selectedEvent.attendee_ids.length - 4}
                      </div>
                    )}
                  </div>
                  <span className="text-[13px] font-['Figtree'] font-medium text-[#3f4544] opacity-80 pl-1">
                    {selectedEvent.max_attendees ? (selectedEvent.max_attendees - selectedEvent.attendee_ids.length) : 0} spots left
                  </span>
                </div>

                <button className="flex-[1.6] bg-gradient-to-r from-[#2D5A4C] to-[#1F4439] text-white h-[56px] rounded-[20px] font-['Figtree'] font-bold text-[16px] shadow-[0_8px_24px_-6px_rgba(45,90,76,0.3)] flex items-center justify-center gap-2.5 px-6 whitespace-nowrap hover:shadow-[0_12px_32px_-8px_rgba(45,90,76,0.4)] hover:-translate-y-[1px] active:translate-y-[1px] active:shadow-md transition-all duration-300 group" onClick={() => onBookEvent?.(selectedEvent)}>
                  {selectedEvent.ticket_price === 0 ? (
                    <span>Get free ticket</span>
                  ) : (
                    <>
                      <span>Pay </span>
                      <span>${selectedEvent.ticket_price}</span>
                    </>
                  )}

                  <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors ml-1.5">
                    <ArrowRight size={14} weight="bold" />
                  </div>
                </button>
              </div>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </div >
  );
};

const TagIcon = ({ tag }: { tag: string }) => {
  if (tag.includes('Study')) return <GraduationCap size={14} className="text-[#2D5A4C]" />;
  if (tag.includes('Referral')) return <Smiley size={14} className="text-[#2D5A4C]" />;
  if (tag.includes('Mentor')) return <Handshake size={14} className="text-[#2D5A4C]" />;
  if (tag.includes('Interview')) return <VideoConference size={14} className="text-[#2D5A4C]" />;
  return <GraduationCap size={14} className="text-[#2D5A4C]" />;
};