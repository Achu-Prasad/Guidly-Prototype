import React, { useState } from 'react';
import {
  Star,
  ChatCircle as MessageCircle,
  ArrowLeft,
  DotsThreeVertical as MoreVertical,
  GraduationCap,
  TrendUp,
  Microphone as Mic2,
  Folder,
  FileText,
  CaretLeft as ChevronLeft,
  ThumbsUp,
  ChatText as MessageSquare,
  Heart,
  ShareNetwork,
  WarningCircle
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from 'motion/react';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { toast } from "sonner";
import { Mentor, Service } from '../types/mentor';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MentorProfileProps {
  mentor: Mentor;
  onBack: () => void;
  onBook: (mentor: Mentor) => void;
  onChat: (mentor: Mentor) => void;
  initialTab?: string;
  onToggleFavourite: (mentor: Mentor) => void;
  isFavourite: boolean;
}

const ServiceIcon = ({ type }: { type: Service['icon'] }) => {
  switch (type) {
    case 'graduation': return <GraduationCap size={20} className="text-[#2D5A4C]" />;
    case 'trend': return <TrendUp size={20} className="text-[#2D5A4C]" />;
    case 'mic': return <Mic2 size={20} className="text-[#2D5A4C]" />;
    case 'folder': return <Folder size={20} className="text-[#2D5A4C]" />;
    case 'file': return <FileText size={20} className="text-[#2D5A4C]" />;
    default: return <GraduationCap size={20} className="text-[#2D5A4C]" />;
  }
};

export const MentorProfile = ({
  mentor,
  onBack,
  onBook,
  onChat,
  initialTab = 'Overview',
  onToggleFavourite,
  isFavourite
}: MentorProfileProps) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [reviewFilter, setReviewFilter] = useState<'Recent' | 'Highest' | 'Lowest'>('Recent');

  const sortedReviews = [...mentor.reviews].sort((a, b) => {
    if (reviewFilter === 'Highest') return b.rating - a.rating;
    if (reviewFilter === 'Lowest') return a.rating - b.rating;
    // For 'Recent', our dummy timestamps are strings, but we can assume the data order is newest first
    // In a real app, we'd use date objects.
    return 0;
  });

  return (
    <div className="bg-white flex flex-col h-full relative">
      {/* Sticky Header Actions */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-20">
        <button
          onClick={onBack}
          className="bg-white/40 backdrop-blur-md p-2 rounded-[8px] hover:bg-white/60 transition-colors"
        >
          <ChevronLeft size={24} className="text-black" />
        </button>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="p-2 bg-white/40 backdrop-blur-md rounded-[8px] hover:bg-white/60 transition-colors">
              <MoreVertical size={24} className="text-black" />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="min-w-[200px] bg-white rounded-[12px] p-1.5 shadow-[0px_10px_38px_-10px_rgba(22,23,24,0.35),0px_10px_20px_-15px_rgba(22,23,24,0.2)] z-[60] border border-gray-100 animate-in fade-in zoom-in duration-200"
              sideOffset={5}
              align="end"
            >
              <DropdownMenu.Item
                onClick={() => onToggleFavourite(mentor)}
                className="group text-[14px] leading-none text-[#3f4544] rounded-[8px] flex items-center h-[40px] px-[12px] gap-[12px] relative select-none outline-none hover:bg-[#f1f5f4] hover:text-[#2d5a4c] cursor-pointer transition-colors"
              >
                <Heart size={18} weight={isFavourite ? "fill" : "regular"} className={`${isFavourite ? 'text-[#2d5a4c]' : 'opacity-70 group-hover:opacity-100'}`} />
                <span className="font-['Figtree'] font-medium">{isFavourite ? 'Remove Favourite' : 'Add Favourite'}</span>
              </DropdownMenu.Item>

              <DropdownMenu.Item
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast.success("Profile link copied to clipboard!");
                }}
                className="group text-[14px] leading-none text-[#3f4544] rounded-[8px] flex items-center h-[40px] px-[12px] gap-[12px] relative select-none outline-none hover:bg-[#f1f5f4] hover:text-[#2d5a4c] cursor-pointer transition-colors"
              >
                <ShareNetwork size={18} className="opacity-70 group-hover:opacity-100" />
                <span className="font-['Figtree'] font-medium">Share Mentor Profile</span>
              </DropdownMenu.Item>

              <DropdownMenu.Separator className="h-[1px] bg-gray-100 m-[4px]" />

              <DropdownMenu.Item
                onClick={() => toast.error("Report submitted. We will review it.")}
                className="group text-[14px] leading-none text-[#fb2c36] rounded-[8px] flex items-center h-[40px] px-[12px] gap-[12px] relative select-none outline-none hover:bg-red-50 cursor-pointer transition-colors"
              >
                <WarningCircle size={18} className="opacity-70 group-hover:opacity-100" />
                <span className="font-['Figtree'] font-medium">Report Mentor</span>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>

      {/* Banner & Basic Info */}
      <div className="shrink-0">
        <div className="h-[121px] w-full relative">
          <ImageWithFallback
            src={mentor.banner_image}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-4 -mt-8 relative z-10 bg-white rounded-t-[24px] pt-4">
          <div className="flex justify-between items-end mb-4">
            <div className="relative">
              <div className="w-[66px] h-[66px] rounded-full border-4 border-white overflow-hidden shadow-sm bg-white">
                <ImageWithFallback
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-1 right-1 w-3 h-3 bg-[#00C951] border-2 border-white rounded-full" />
            </div>

            <div className="bg-[#f3f3f3]/50 backdrop-blur-[10px] px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-[#2d5a4c]/5">
              <Star size={12} weight="fill" className="text-[#2D5A4C]" />
              <span className="text-[12px] font-['Figtree'] font-semibold text-[#2D5A4C]">{mentor.rating_avg}</span>
            </div>
          </div>

          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-[20px] font-['Figtree'] font-medium text-[#3f4544] leading-tight">{mentor.name}</h1>
              <p className="text-[14px] font-['Figtree'] text-[#3f4544] opacity-70">{mentor.role}</p>
            </div>
            <button
              onClick={() => onChat(mentor)}
              className="bg-[#f3f3f3] h-[40px] px-4 rounded-[8px] flex items-center gap-1 text-[#2D5A4C] font-['Figtree'] text-[14px]"
            >
              <MessageCircle size={18} />
              Chat
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {mentor.languages.map(lang => (
              <span key={lang} className="bg-[#f3f3f3] px-2 py-1 rounded-[4px] text-[12px] text-[#3f4544] font-['Figtree']">
                {lang}
              </span>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-100">
            {['Overview', 'Review', 'Guidelines'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-[14px] font-['Figtree'] font-medium transition-colors relative ${activeTab === tab ? 'text-[#2D5A4C]' : 'text-[#3f4544] opacity-70'
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2D5A4C]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-4 pt-6 pb-24 space-y-8">
        {activeTab === 'Overview' && (
          <>
            {/* Mentor Message */}
            <section className="space-y-4">
              <h2 className="text-[14px] font-['Bricolage_Grotesque'] font-medium text-[#272d2c]">Mentor Message</h2>
              <div className="bg-[#f3f3f3] rounded-[12px] p-6 relative">
                <div className="text-[#ABBDB7] mb-2">
                  <svg width="23" height="20" viewBox="0 0 23 20" fill="currentColor">
                    <path d="M7.1875 0C3.21875 0 0 3.21875 0 7.1875V12.8125C0 16.7812 3.21875 20 7.1875 20H10V17.1875H7.1875C4.78125 17.1875 2.8125 15.2187 2.8125 12.8125V10H7.1875C9.09375 10 10.625 8.46875 10.625 6.5625V3.4375C10.625 1.53125 9.09375 0 7.1875 0ZM19.6875 0C15.7188 0 12.5 3.21875 12.5 7.1875V12.8125C12.5 16.7812 15.7188 20 19.6875 20H22.5V17.1875H19.6875C17.2812 17.1875 15.3125 15.2187 15.3125 12.8125V10H19.6875C21.5938 10 23.125 8.46875 23.125 6.5625V3.4375C23.125 1.53125 21.5938 0 19.6875 0Z" />
                  </svg>
                </div>
                <p className="text-[14px] font-['Figtree'] text-[#575c5b] leading-[20px] text-justify">
                  {mentor.about}
                </p>
              </div>
            </section>

            {/* Services Offered */}
            <section className="space-y-4">
              <h2 className="text-[14px] font-['Bricolage_Grotesque'] font-medium text-[#272d2c]">Service Offered</h2>
              <div className="space-y-2">
                {mentor.services.map(service => (
                  <div key={service.id} className="bg-white border border-gray-100 rounded-[12px] p-3 flex justify-between items-center shadow-[0px_4px_20px_-4px_rgba(0,0,0,0.06)]">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#f1f5f4] p-2 rounded-[8px]">
                        <ServiceIcon type={service.icon} />
                      </div>
                      <div>
                        <p className="text-[14px] font-['Figtree'] font-medium text-[#272d2c]">{service.title}</p>
                        <p className="text-[10px] font-['Figtree'] text-[#9fa2a1]">Duration: {service.duration}</p>
                      </div>
                    </div>
                    <div className={`px-2 py-0.5 rounded-[64px] text-[12px] font-['Figtree'] font-medium ${service.price === 'Free' ? 'bg-[#f1f5f4] text-[#2d5a4c]' : 'text-[#272d2c]'
                      }`}>
                      {service.price}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-[14px] font-['Bricolage_Grotesque'] font-medium text-[#272d2c]">Experience</h2>
                <span className="text-[14px] font-['Figtree'] text-[#3f4544] opacity-60 font-medium">{mentor.experience_years} YOE</span>
              </div>
              <div className="border border-gray-100 rounded-[12px] p-3 space-y-4">
                {mentor.work_history.map((work, idx) => (
                  <div key={idx} className={`space-y-1 ${idx !== mentor.work_history.length - 1 ? 'border-b border-gray-100 pb-4' : ''}`}>
                    <p className="text-[14px] font-['Figtree'] font-medium text-[#272d2c]">{work.role}</p>
                    <p className="text-[14px] font-['Figtree'] text-[#3f4544] opacity-70">{work.company} . {work.location}</p>
                    <p className="text-[12px] font-['Figtree'] text-[#3f4544] opacity-70">{work.period}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'Review' && (
          <div className="space-y-6">
            {/* Rating Summary & Filters */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-[18px] font-['Figtree'] font-bold text-[#272d2c]">{mentor.rating_avg}</span>
                  <Star size={16} className="fill-[#2D5A4C] text-[#2D5A4C]" />
                  <span className="text-[14px] font-['Figtree'] text-[#3f4544] opacity-70">({mentor.review_count})</span>
                </div>
                <span className="text-[12px] font-['Figtree'] text-[#3f4544] opacity-60">Reviews</span>
              </div>

              <div className="bg-[#f3f3f3] p-1 rounded-[12px] flex gap-1">
                {(['Recent', 'Highest', 'Lowest'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setReviewFilter(filter)}
                    className={`px-4 py-2 rounded-[8px] text-[13px] font-['Figtree'] font-medium transition-all ${reviewFilter === filter ? 'bg-white text-[#2D5A4C] shadow-sm' : 'text-[#3f4544] opacity-60'
                      }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-4">
              {sortedReviews.map((review) => (
                <div key={review.id} className="bg-[#f3f3f3]/50 border border-gray-100 rounded-[16px] p-4 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2D5A4C] font-bold text-[14px] shadow-sm">
                        {review.userInitials}
                      </div>
                      <div>
                        <h4 className="text-[15px] font-['Figtree'] font-semibold text-[#272d2c]">{review.userName}</h4>
                        <div className="flex items-center gap-1">
                          <span className="text-[12px] font-['Figtree'] font-medium text-[#272d2c]">{review.rating}</span>
                          <Star size={12} className="fill-[#2D5A4C] text-[#2D5A4C]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[14px] font-['Figtree'] text-[#575c5b] leading-relaxed">
                    {review.comment}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-[12px] font-['Figtree'] text-[#3f4544] opacity-60 border-t border-gray-200/50 pt-3">
                    <span>{review.timestamp}</span>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <ThumbsUp size={14} className="opacity-70" />
                        {review.likes}
                      </div>
                      <button className="hover:text-[#2D5A4C] transition-colors">Replay</button>
                    </div>
                  </div>

                  {/* Mentor Reply */}
                  {review.reply && (
                    <div className="mt-4 bg-[#f1f5f4] rounded-[12px] p-4 border border-[#2d5a4c]/5 space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full overflow-hidden border border-white">
                            <ImageWithFallback src={review.reply.mentorImage} alt={review.reply.mentorName} className="w-full h-full object-cover" />
                          </div>
                          <span className="text-[14px] font-semibold text-[#272d2c]">{review.reply.mentorName}</span>
                          <span className="bg-[#2d5a4c] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">Mentor</span>
                        </div>
                      </div>
                      <p className="text-[14px] text-[#575c5b] leading-relaxed">
                        {review.reply.comment}
                      </p>
                      <div className="flex items-center justify-between text-[11px] text-[#3f4544] opacity-50">
                        <span>{review.reply.timestamp}</span>
                        <div className="flex items-center gap-1">
                          <ThumbsUp size={12} weight="fill" className="text-[#2d5a4c]" />
                          {review.reply.likes}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Guidelines' && (
          <div className="space-y-6">
            <p className="text-[14px] font-['Figtree'] text-[#3f4544] leading-relaxed opacity-80">
              Guidelines helps mentees to understand topics or questions that the mentor prefers not to discuss. This ensures a respectful and productive session.
            </p>

            <div className="bg-[#f8f9f8] rounded-[24px] p-5 space-y-6">
              <h3 className="text-[16px] font-['Bricolage_Grotesque'] font-medium text-[#272d2c]">Restricted Topics</h3>

              <div className="flex gap-3">
                <div className="w-[1.5px] bg-[#2d5a4c] rounded-full shrink-0" />
                <p className="text-[14px] font-['Figtree'] text-[#3f4544] leading-relaxed opacity-80">
                  To make our session productive and respectful, please avoid asking the following
                </p>
              </div>

              <div className="space-y-3">
                {mentor.restricted_topics.map((topic, index) => (
                  <div key={index} className="bg-white rounded-[20px] p-4 flex items-center gap-4 shadow-[0px_2px_10px_rgba(0,0,0,0.02)] border border-white">
                    <div className="w-11 h-11 rounded-full bg-[#f1f5f4] flex items-center justify-center text-[15px] font-['Bricolage_Grotesque'] font-bold text-[#2d5a4c] shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <p className="text-[15px] font-['Figtree'] font-medium text-[#272d2c] leading-tight">
                      {topic}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Button */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent pt-8 pb-8 z-30">
        <button
          onClick={() => onBook(mentor)}
          className="w-full h-[52px] bg-[#2d5a4c] rounded-[12px] flex items-center justify-center text-white font-['Figtree'] font-medium text-[16px] shadow-[0px_8px_20px_rgba(45,90,76,0.3)] active:scale-[0.98] transition-all"
        >
          Book a Session
        </button>
      </div>
    </div>
  );
};
