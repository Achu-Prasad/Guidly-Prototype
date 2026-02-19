import React, { useState, useRef, useMemo } from 'react';
import {
    CaretLeft,
    DotsThreeVertical,
    Check,
    SealCheck,
    Users,
    House,
    Calendar,
    CalendarCheck,
    ListChecks,
    UsersThree,
    User,
    ArrowUpRight,
    CaretRight,
    PencilSimple,
    Camera,
    Image as ImageIcon,
    CaretDown,
    Heart,
    Star,
    Quotes,
    Sparkle,
    Globe,
    ArrowLeft,
    Warning,
    VideoCamera as VideoConference,
    Crown,
    Ticket,
    ArrowRight,
    WarningCircle,
    ShareNetwork,
    X,
    Clock,
    Plus,
    Minus
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from 'motion/react';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { toast } from "sonner";
import { format } from 'date-fns';
import { Community, TeamUpEvent, CommunityLeader, CommunityPerk } from '../types/team';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MOCK_EVENTS } from '../data/events';
import {
    Drawer,
    DrawerContent,
} from "./ui/drawer";

interface CommunityProfileProps {
    community: Community;
    onBack: () => void;
    onJoin: (community: Community) => void;
    onBookEvent?: (event: TeamUpEvent) => void;
    bookedEventTitles?: string[];
}

const PerkIcon = ({ type }: { type: CommunityPerk['iconType'] }) => {
    switch (type) {
        case 'referral': return <User size={20} className="text-[#57726d]" />;
        case 'interview': return <Sparkle size={20} className="text-[#57726d]" />;
        case 'portfolio': return <ImageIcon size={20} className="text-[#57726d]" />;
        case 'career': return <ArrowUpRight size={20} className="text-[#57726d]" />;
        case 'mock': return <Calendar size={20} className="text-[#57726d]" />;
        default: return <Sparkle size={20} className="text-[#57726d]" />;
    }
};

const AVATAR_COLORS = [
    'bg-[#E8D5B7]', 'bg-[#B7D5E8]', 'bg-[#D5E8B7]', 'bg-[#E8B7D5]', 'bg-[#B7E8D5]'
];

const AVATAR_INITIALS = ['A', 'S', 'R', 'M', 'P', 'K', 'J', 'N', 'C', 'D'];

const CATEGORY_STYLES: Record<string, { bg: string; text: string; dot: string }> = {
    Workshop: { bg: 'bg-[#E8F0ED]', text: 'text-[#2D5A4C]', dot: 'bg-[#2D5A4C]' },
    Masterclass: { bg: 'bg-[#FFF3E0]', text: 'text-[#B87333]', dot: 'bg-[#D4944A]' },
    Meetup: { bg: 'bg-[#EDE7F6]', text: 'text-[#5E4B8B]', dot: 'bg-[#7E57C2]' },
    Review: { bg: 'bg-[#E3F2FD]', text: 'text-[#3D6B99]', dot: 'bg-[#5C8DB8]' },
    Talk: { bg: 'bg-[#FFF8E1]', text: 'text-[#8D7B2E]', dot: 'bg-[#C9A94C]' },
};

const REVIEW_AVATAR_COLORS = [
    'bg-[#E8F5E9]', 'bg-[#E3F2FD]', 'bg-[#FFF3E0]', 'bg-[#F3E5F5]', 'bg-[#E0F7FA]'
];

// Leader placeholder avatar colors
const LEADER_COLORS = ['#F9E0A6', '#A6D5F9', '#A6F9C3'];

export const CommunityProfile = ({
    community,
    onBack,
    onJoin,
    onBookEvent,
    bookedEventTitles = []
}: CommunityProfileProps) => {
    const [activeTab, setActiveTab] = useState('Overview');
    const [reviewFilter, setReviewFilter] = useState('Top Recent');
    const [showRateError, setShowRateError] = useState(false);
    const [isMember, setIsMember] = useState(false); // Default to false to show the error logic
    const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});
    const [selectedEvent, setSelectedEvent] = useState<TeamUpEvent | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedChatUser, setSelectedChatUser] = useState<{ id: string | number, name: string, image: string, isGroup?: boolean } | null>(null);
    const [expandedFaqId, setExpandedFaqId] = useState<string | null>(null);
    const reviewScrollRef = useRef<HTMLDivElement>(null);

    const handleEventClick = (event: TeamUpEvent) => {
        setSelectedEvent(event);
        setIsDrawerOpen(true);
    };

    const toggleLike = (reviewId: string) => {
        setLikedReviews(prev => ({
            ...prev,
            [reviewId]: !prev[reviewId]
        }));
    };

    const getFilteredReviews = () => {
        if (!community.reviews) return [];
        let reviews = [...community.reviews];
        switch (reviewFilter) {
            case 'Top Rated':
                return reviews.sort((a, b) => b.rating - a.rating);
            case 'Least Rated':
                return reviews.sort((a, b) => a.rating - b.rating);
            case 'This Month':
                // For demo purposes, we'll just show all since we don't have actual dates, 
                // but in a real app we'd filter by timestamp
                return reviews;
            default: // Top Recent
                return reviews;
        }
    };

    const filteredReviews = getFilteredReviews();

    return (
        <div className="bg-white flex flex-col h-full relative overflow-hidden">
            {/* Sticky Header Actions */}
            <div className="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-4 z-20">
                <button
                    onClick={onBack}
                    className="size-[40px] rounded-[8px] flex items-center justify-center"
                    style={{ backgroundImage: "linear-gradient(90deg, rgba(45, 90, 76, 0.2) 0%, rgba(45, 90, 76, 0.2) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%)" }}
                >
                    <CaretLeft size={24} weight="bold" className="text-white" />
                </button>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                        <button
                            className="size-[40px] rounded-[8px] flex items-center justify-center"
                            style={{ backgroundImage: "linear-gradient(90deg, rgba(45, 90, 76, 0.2) 0%, rgba(45, 90, 76, 0.2) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%)" }}
                        >
                            <DotsThreeVertical size={24} className="text-white" />
                        </button>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>
                        <DropdownMenu.Content
                            className="min-w-[200px] bg-white rounded-[12px] p-1.5 shadow-[0px_10px_38px_-10px_rgba(22,23,24,0.35),0px_10px_20px_-15px_rgba(22,23,24,0.2)] z-[60] border border-gray-100 animate-in fade-in zoom-in duration-200"
                            sideOffset={5}
                            align="end"
                        >
                            <DropdownMenu.Item
                                onClick={() => {
                                    navigator.clipboard.writeText(window.location.href);
                                    toast.success("Community link copied to clipboard!");
                                }}
                                className="group text-[14px] leading-none text-[#3f4544] rounded-[8px] flex items-center h-[40px] px-[12px] gap-[12px] relative select-none outline-none hover:bg-[#f1f5f4] hover:text-[#2d5a4c] cursor-pointer transition-colors"
                            >
                                <ShareNetwork size={18} className="opacity-70 group-hover:opacity-100" />
                                <span className="font-['Figtree'] font-medium">Share Community</span>
                            </DropdownMenu.Item>

                            <DropdownMenu.Item
                                onClick={() => {
                                    if (!isMember) {
                                        setShowRateError(true);
                                    } else {
                                        toast.success("Opening rating dialog...");
                                    }
                                }}
                                className="group text-[14px] leading-none text-[#3f4544] rounded-[8px] flex items-center h-[40px] px-[12px] gap-[12px] relative select-none outline-none hover:bg-[#f1f5f4] hover:text-[#2d5a4c] cursor-pointer transition-colors"
                            >
                                <Star size={18} className="opacity-70 group-hover:opacity-100" />
                                <span className="font-['Figtree'] font-medium">Rate Community</span>
                            </DropdownMenu.Item>

                            <DropdownMenu.Separator className="h-[1px] bg-gray-100 m-[4px]" />

                            <DropdownMenu.Item
                                onClick={() => toast.error("Report submitted. We will review it.")}
                                className="group text-[14px] leading-none text-[#fb2c36] rounded-[8px] flex items-center h-[40px] px-[12px] gap-[12px] relative select-none outline-none hover:bg-red-50 cursor-pointer transition-colors"
                            >
                                <WarningCircle size={18} className="opacity-70 group-hover:opacity-100" />
                                <span className="font-['Figtree'] font-medium">Report Community</span>
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </div>

            {/* Hero / Cover */}
            <div className="shrink-0 relative h-[235px] overflow-hidden">
                <ImageWithFallback
                    src={community.image}
                    alt="Community Cover"
                    className="w-full h-full object-cover"
                />
                {/* Best Community Badge */}
                <div className="absolute left-[14px] top-[98px]">
                    <div
                        className="backdrop-blur-[6px] px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20"
                        style={{ backgroundImage: "linear-gradient(90deg, rgba(45, 90, 76, 0.7) 0%, rgba(96, 192, 162, 0.7) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }}
                    >
                        <Sparkle size={13} weight="fill" className="text-white" />
                        <span className="text-[12px] font-['Figtree'] font-medium text-white">Best Community 2025</span>
                    </div>
                </div>
            </div>

            {/* Profile Header Card */}
            <div className="px-4 -mt-[101px] relative z-10 bg-white rounded-t-[24px] pt-4 flex flex-col gap-4 shadow-[0px_4px_28px_-17px_rgba(0,0,0,0.25)]">
                {/* Community Logo + Name */}
                <div className="flex gap-4 items-center">
                    <div className="size-[66px] rounded-full border-2 border-white overflow-hidden shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] bg-white shrink-0 p-1">
                        <ImageWithFallback
                            src={community.logo}
                            alt={community.name}
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                    <div className="flex flex-col gap-[6px] flex-1">
                        <h1 className="text-[20px] font-['Figtree'] font-medium text-[#3f4544] leading-[25px]">{community.name}</h1>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                                <div className="w-3 h-3 bg-[#00C951] rounded-full border-[1.6px] border-white" />
                                <span className="text-[12px] font-['Figtree'] font-medium text-[#3f4544]">{community.isOnlineOnly ? 'Online Only' : 'Hybrid'}</span>
                            </div>
                            <div className="bg-[#e9f5fb] px-3 h-[22px] rounded-full flex items-center justify-center">
                                <span className="text-[12px] font-['Figtree'] font-medium text-[#0083c9]">Founded : {community.foundedYear}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Members Avatars */}
                <div className="flex items-center gap-[10px]">
                    <div className="relative h-[24px] w-[96px]">
                        {[0, 1, 2, 3].map(i => (
                            <div
                                key={i}
                                className={`absolute w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-['Figtree'] font-bold text-[#3f4544]/60 ${AVATAR_COLORS[i]}`}
                                style={{ left: `${i * 18}px`, zIndex: 5 - i }}
                            >
                                {AVATAR_INITIALS[i]}
                            </div>
                        ))}
                        <div
                            className="absolute w-6 h-6 rounded-full bg-[#f3f3f3] flex items-center justify-center text-[9px] font-['Figtree'] font-bold text-[#3f4544]/50"
                            style={{ left: '72px', zIndex: 0 }}
                        >
                            +1
                        </div>
                    </div>
                    <span className="text-[11px] font-['Figtree'] font-medium text-[#3f4544] opacity-60">{community.memberCount} + Active Members</span>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-[#f3f4f6]">
                    {['Overview', 'Events', 'Guidelines'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 h-[45px] text-[14px] font-['Figtree'] font-medium transition-colors relative ${activeTab === tab ? 'text-[#2d5a4c]' : 'text-[#3f4544] opacity-70'
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="activeTabComm"
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2d5a4c]"
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto no-scrollbar px-4 pt-6 pb-28 space-y-8">
                {activeTab === 'Overview' && (
                    <>
                        {/* Overview Section */}
                        <section className="space-y-4">
                            <h2 className="text-[14px] font-['Bricolage_Grotesque'] font-medium text-[#272d2c] leading-[21px]">Overview</h2>
                            <div className="bg-[#f3f3f3] rounded-[12px] p-6">
                                <p className="text-[14px] font-['Figtree'] text-[#3f4544] leading-[20px]">
                                    {community.description}
                                </p>
                            </div>
                        </section>

                        {/* Community Perks */}
                        <section className="space-y-4">
                            <h2 className="text-[14px] font-['Bricolage_Grotesque'] font-medium text-[#272d2c] leading-[21px]">Community Perks</h2>
                            <div className="space-y-2">
                                {community.perks.map(perk => (
                                    <div key={perk.id} className="bg-white border-[0.8px] border-[#f3f4f6] rounded-[12px] h-[61.6px] px-[12.8px] flex justify-between items-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)]">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-[#f1f5f4] size-[36px] rounded-[8px] flex items-center justify-center">
                                                <PerkIcon type={perk.iconType} />
                                            </div>
                                            <div>
                                                <p className="text-[14px] font-['Figtree'] font-medium text-[#272d2c] leading-[21px]">{perk.title}</p>
                                                <p className="text-[10px] font-['Figtree'] text-[#9fa2a1] leading-[15px]">{perk.subtitle}</p>
                                            </div>
                                        </div>
                                        <div className={`h-[22px] rounded-[64px] px-2 flex items-center text-[12px] font-['Figtree'] font-medium ${perk.isFree ? 'bg-[#f1f5f4] text-[#2d5a4c]' : 'bg-[#fff9ed] text-[#b38b2d]'
                                            }`}>
                                            {perk.isFree ? 'Free' : 'Premium'}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Member Reviews */}
                        {community.reviews && community.reviews.length > 0 && (
                            <section className="space-y-4 overflow-hidden">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <h2 className="text-[14px] font-['Bricolage_Grotesque'] font-medium text-[#272d2c] leading-[21px]">Member Reviews</h2>
                                        {community.rating && (
                                            <div className="bg-gradient-to-r from-[rgba(45,90,76,0.9)] to-[rgba(96,192,162,0.9)] border border-white/70 rounded-full px-2 py-1 flex items-center gap-1">
                                                <span className="text-[12px] font-['Figtree'] font-medium text-white leading-[16px]">{community.rating}</span>
                                                <Star size={12} weight="fill" className="text-white" />
                                            </div>
                                        )}
                                    </div>
                                    <DropdownMenu.Root>
                                        <DropdownMenu.Trigger asChild>
                                            <button className="flex items-center gap-[5px] bg-white rounded-[8px] outline-none group">
                                                <span className="text-[14px] font-['Figtree'] font-medium text-[#3f4544] opacity-80 group-hover:opacity-100 transition-opacity whitespace-nowrap">{reviewFilter}</span>
                                                <CaretDown size={20} className="text-[#3f4544] opacity-60 group-hover:opacity-100 transition-opacity" />
                                            </button>
                                        </DropdownMenu.Trigger>
                                        <DropdownMenu.Portal>
                                            <DropdownMenu.Content
                                                className="min-w-[140px] bg-white rounded-[12px] p-1.5 shadow-[0px_10px_38px_-10px_rgba(22,23,24,0.35),0px_10px_20px_-15px_rgba(22,23,24,0.2)] z-[60] border border-gray-100 animate-in fade-in zoom-in duration-200"
                                                sideOffset={5}
                                                align="end"
                                            >
                                                {['Top Recent', 'Top Rated', 'Least Rated', 'This Month'].map((option) => (
                                                    <DropdownMenu.Item
                                                        key={option}
                                                        onClick={() => setReviewFilter(option)}
                                                        className={`text-[13px] leading-none rounded-[8px] flex items-center h-[36px] px-[12px] relative select-none outline-none cursor-pointer transition-colors ${reviewFilter === option ? 'bg-[#f1f5f4] text-[#2d5a4c] font-semibold' : 'text-[#3f4544] hover:bg-gray-50'}`}
                                                    >
                                                        {option}
                                                    </DropdownMenu.Item>
                                                ))}
                                            </DropdownMenu.Content>
                                        </DropdownMenu.Portal>
                                    </DropdownMenu.Root>
                                </div>

                                {/* Horizontal scrolling review cards */}
                                <motion.div
                                    ref={reviewScrollRef}
                                    drag="x"
                                    dragConstraints={{ right: 0, left: -400 }} // Adjust based on content width if needed
                                    className="flex gap-4 overflow-x-visible cursor-grab active:cursor-grabbing -mx-4 px-4"
                                >
                                    {filteredReviews.map((review, idx) => (
                                        <div
                                            key={review.id}
                                            className={`shrink-0 w-[270px] rounded-[12px] border border-[rgba(63,69,68,0.1)] p-4 flex flex-col gap-3 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)] ${idx === 0 ? 'bg-[#f3f3f3]' : 'bg-white'}`}
                                        >
                                            {/* Header: Avatar + Name + Rating */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className={`size-8 rounded-full flex items-center justify-center ${REVIEW_AVATAR_COLORS[idx % REVIEW_AVATAR_COLORS.length]}`}>
                                                        <span className="text-[16px] font-['Figtree'] font-medium text-[#24483d] leading-[24px]">{review.initials}</span>
                                                    </div>
                                                    <span className="text-[14px] font-['Figtree'] font-semibold text-[#272d2c] opacity-90 leading-[20px]">{review.name}</span>
                                                </div>
                                                <div className="bg-white rounded-full px-2 py-1 flex items-center gap-1">
                                                    <span className="text-[12px] font-['Figtree'] font-medium text-[#3f4544]">{review.rating}</span>
                                                    <Star size={16} weight="fill" className="text-[#f59e0b]" />
                                                </div>
                                            </div>

                                            {/* Review text */}
                                            <div className="border-b border-[rgba(63,69,68,0.1)] pb-4">
                                                <p className="text-[14px] font-['Figtree'] text-[#3f4544] opacity-80 leading-[20px]">{review.text}</p>
                                            </div>

                                            {/* Footer: time + likes + reply */}
                                            <div className="flex items-center justify-between">
                                                <span className="text-[14px] font-['Figtree'] text-[#3f4544] opacity-45 leading-[20px]">{review.timeAgo}</span>
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => toggleLike(review.id)}
                                                        className={`flex items-center gap-1 px-2 py-0.5 rounded-[200px] transition-colors ${likedReviews[review.id] ? 'bg-[#2d5a4c]/10' : 'hover:bg-gray-100'}`}
                                                    >
                                                        <Heart
                                                            size={14}
                                                            weight={likedReviews[review.id] ? "fill" : "regular"}
                                                            className={likedReviews[review.id] ? "text-[#2d5a4c]" : "text-[#3f4544] opacity-70"}
                                                        />
                                                        <span className={`text-[14px] font-['Figtree'] font-medium ${likedReviews[review.id] ? "text-[#2d5a4c]" : "text-[#3f4544] opacity-70"}`}>
                                                            {review.likes + (likedReviews[review.id] ? 1 : 0)}
                                                        </span>
                                                    </button>
                                                    <span className="text-[12px] font-['Figtree'] text-[#3f4544] opacity-70 cursor-pointer hover:underline">Replay</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </section>
                        )}

                        {/* Community Gallery */}
                        {community.gallery && community.gallery.length > 0 && (
                            <section className="space-y-4">
                                <h2 className="text-[14px] font-['Bricolage_Grotesque'] font-medium text-[#272d2c] leading-[21px]">Community Gallery</h2>
                                <motion.div
                                    drag="x"
                                    dragConstraints={{ right: 0, left: -200 }}
                                    className="flex gap-2 overflow-x-visible cursor-grab active:cursor-grabbing -mx-4 px-4"
                                >
                                    {community.gallery.map((img, idx) => (
                                        <div key={idx} className="shrink-0 size-[140px] rounded-[8px] overflow-hidden">
                                            <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </motion.div>
                            </section>
                        )}

                        {/* Community Leaders */}
                        {community.leaders && community.leaders.length > 0 && (
                            <section className="space-y-4">
                                <h2 className="text-[14px] font-['Bricolage_Grotesque'] font-medium text-[#272d2c] leading-[21px]">Community Leaders</h2>
                                <motion.div
                                    drag="x"
                                    dragConstraints={{ right: 0, left: -300 }}
                                    className="flex gap-6 overflow-x-visible cursor-grab active:cursor-grabbing -mx-4 px-4"
                                >
                                    {community.leaders.map((leader, idx) => (
                                        <div
                                            key={leader.id}
                                            className="shrink-0 bg-white border border-[#e2e8f0] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-[17px] flex flex-col gap-3 items-center min-w-[140px] h-[196px]"
                                        >
                                            {/* Avatar */}
                                            <div className="relative">
                                                <div
                                                    className="size-[80px] rounded-full border-2 overflow-hidden flex items-center justify-center bg-[#f1f5f4]"
                                                    style={{ borderColor: LEADER_COLORS[idx % LEADER_COLORS.length] }}
                                                >
                                                    {leader.image ? (
                                                        <img src={leader.image} alt={leader.name} className="w-full h-full object-cover rounded-full" />
                                                    ) : (
                                                        <span className="text-[28px] font-['Bricolage_Grotesque'] font-medium text-[#24483d]">{leader.name.charAt(0)}</span>
                                                    )}
                                                </div>
                                                {/* Online status dot */}
                                                <div
                                                    className={`absolute bottom-0 right-0 size-5 rounded-full border-2 border-white ${leader.isOnline ? 'bg-[#22c55e]' : 'bg-[#9fa2a1]'}`}
                                                />
                                            </div>

                                            {/* Name + Role */}
                                            <div className="text-center w-full">
                                                <p className="text-[14px] font-['Bricolage_Grotesque'] font-medium text-[#0f172a] text-center leading-[20px]">{leader.name}</p>
                                                <p className="text-[10px] font-['Figtree'] font-medium text-[#64748b] text-center leading-[14px]">{leader.role}</p>
                                            </div>

                                            {/* Follow button */}
                                            <button className="mt-auto bg-[rgba(45,90,76,0.1)] rounded-full h-8 px-6 flex items-center justify-center hover:bg-[rgba(45,90,76,0.2)] active:scale-95 transition-all w-fit">
                                                <span className="text-[12px] font-['Figtree'] font-semibold text-[#2d5a4c]">Follow</span>
                                            </button>
                                        </div>
                                    ))}
                                </motion.div>
                            </section>
                        )}
                    </>
                )}

                {activeTab === 'Events' && (
                    <div className="space-y-5">
                        {(() => {
                            const communityEvents = MOCK_EVENTS.filter(e => e.community_id === community.id);
                            return communityEvents.length > 0 ? (
                                communityEvents.map((event, index) => {
                                    const catStyle = CATEGORY_STYLES[event.category || 'Workshop'] || CATEGORY_STYLES.Workshop;
                                    const eventDate = new Date(event.start_time);
                                    const endDate = new Date(event.end_time);
                                    const durationHrs = ((endDate.getTime() - eventDate.getTime()) / 3600000).toFixed(1);
                                    const spotsLeft = (event.max_attendees || 30) - event.attendee_ids.length;

                                    return (
                                        <div
                                            key={event.id}
                                            onClick={() => handleEventClick(event)}
                                            className="bg-white rounded-[16px] overflow-hidden border border-[rgba(63,69,68,0.1)] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] cursor-pointer active:scale-[0.98] transition-all"
                                        >
                                            <div className="p-4 space-y-4">
                                                {/* Top Meta Row */}
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <div className={`px-2 py-0.5 rounded-full flex items-center gap-1.5 ${catStyle.bg}`}>
                                                            <div className={`size-1.5 rounded-full ${catStyle.dot}`} />
                                                            <span className={`text-[10px] font-['Figtree'] font-bold uppercase tracking-wider ${catStyle.text}`}>
                                                                {event.category}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-1 opacity-50">
                                                            <VideoConference size={12} />
                                                            <span className="text-[11px] font-['Figtree']">{durationHrs}h</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 opacity-60">
                                                        <div className="size-4 rounded-full overflow-hidden border border-black/5">
                                                            <img src={community.logo} alt="" className="w-full h-full object-cover" />
                                                        </div>
                                                        <span className="text-[11px] font-['Figtree']">{community.name}</span>
                                                    </div>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-[16px] font-['Bricolage_Grotesque'] font-semibold text-[#1b362e] leading-tight">
                                                    {event.title}
                                                </h3>

                                                {/* Date/Time Row */}
                                                <div className="flex items-center gap-3">
                                                    <div className="flex items-center gap-1.5 opacity-75">
                                                        <Calendar size={13} className="text-[#3f4544]" />
                                                        <span className="text-[12px] font-['Figtree'] font-medium text-[#3f4544]">{format(eventDate, 'EEE, dd MMM')}</span>
                                                    </div>
                                                    <div className="size-0.5 rounded-full bg-[#d4d4d4]" />
                                                    <span className="text-[12px] font-['Figtree'] font-bold text-[#2d5a4c]">{format(eventDate, 'hh:mm a')}</span>
                                                </div>

                                                {/* Host/Location Row */}
                                                <div className="flex items-center gap-3">
                                                    <div className="flex items-center gap-1.5">
                                                        <div className="size-[18px] bg-[#e8f0ed] rounded-full flex items-center justify-center overflow-hidden">
                                                            <Crown size={10} weight="fill" className="text-[#2d5a4c]" />
                                                        </div>
                                                        <span className="text-[12px] font-['Figtree'] text-[#3f4544] opacity-70">{event.host_name}</span>
                                                    </div>
                                                    <div className="size-0.5 rounded-full bg-[#d4d4d4]" />
                                                    <div className="flex items-center gap-1 opacity-60">
                                                        <Globe size={13} className="text-[#3f4544]" />
                                                        <span className="text-[12px] font-['Figtree'] text-[#3f4544]">Online</span>
                                                    </div>
                                                </div>

                                                {/* Divider */}
                                                <div className="h-px bg-[rgba(240,239,233,1)]" />

                                                {/* Footer Row */}
                                                <div className="flex items-center justify-between pt-1">
                                                    <div className="flex items-center gap-3">
                                                        <div className="relative h-6 w-24">
                                                            {event.attendee_ids.slice(0, 4).map((id, i) => (
                                                                <div
                                                                    key={id}
                                                                    className={`absolute w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-['Figtree'] font-bold text-[#1b362e]/70 ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
                                                                    style={{ left: `${i * 18}px`, zIndex: 5 - i }}
                                                                >
                                                                    {AVATAR_INITIALS[i % AVATAR_INITIALS.length]}
                                                                </div>
                                                            ))}
                                                            {event.attendee_ids.length > 4 && (
                                                                <div className="absolute w-6 h-6 rounded-full border-2 border-white bg-[#f3f3f3] flex items-center justify-center text-[9px] font-bold text-[#3f4544]/50" style={{ left: '72px', zIndex: 0 }}>
                                                                    +{event.attendee_ids.length - 4}
                                                                </div>
                                                            )}
                                                        </div>
                                                        <span className="text-[11px] font-['Figtree'] font-medium text-[#3f4544] opacity-60">
                                                            {spotsLeft} spots left
                                                        </span>
                                                    </div>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            const isBooked = bookedEventTitles.includes(event.title);
                                                            if (!isBooked) handleEventClick(event);
                                                        }}
                                                        disabled={bookedEventTitles.includes(event.title)}
                                                        className={`h-9 px-4 rounded-[10px] flex items-center gap-2 transition-all active:scale-95 ${bookedEventTitles.includes(event.title)
                                                            ? 'bg-[#575c5b] opacity-60 cursor-not-allowed'
                                                            : 'bg-[#2d5a4c] shadow-[0px_2px_6px_0px_rgba(45,90,76,0.2)] hover:bg-[#24483d]'
                                                            }`}
                                                    >
                                                        <span className="text-[13px] font-['Figtree'] font-semibold text-white">
                                                            {bookedEventTitles.includes(event.title) ? 'Booked' : 'RSVP'}
                                                        </span>
                                                        {!bookedEventTitles.includes(event.title) && <ArrowRight size={14} className="text-white" />}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                                    <Calendar size={48} className="text-gray-200" />
                                    <div>
                                        <h3 className="text-[16px] font-medium text-[#272d2c]">No upcoming events</h3>
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                )}

                {activeTab === 'Guidelines' && community.guidelines && (
                    <div className="space-y-6">
                        {/* Intro Text */}
                        <div className="px-0">
                            <p className="text-[14px] font-['Figtree'] font-normal leading-[20px] text-[#3f4544] opacity-90 text-justify">
                                {community.guidelines.intro}
                            </p>
                        </div>

                        {/* Restricted Topics / Summary Section */}
                        <div className="bg-[#f8f7f3] border-b border-[rgba(63,69,68,0.1)] rounded-[12px] p-6 flex flex-col gap-6 items-start">
                            <div className="flex flex-col gap-[15px] items-start w-full">
                                <p className="font-['Figtree'] font-medium h-[20px] leading-[20px] text-[#3f4544] text-[14px]">
                                    {community.guidelines.summaryTitle}
                                </p>
                                <div className="flex gap-3 items-start w-full">
                                    <div className="flex h-10 w-[2px] bg-[rgba(63,69,68,0.1)] shrink-0 self-center" />
                                    <p className="flex-1 font-['Figtree'] font-normal leading-[20px] text-[#3f4544] text-[14px]">
                                        {community.guidelines.summaryDescription}
                                    </p>
                                </div>
                            </div>

                            {/* Guideline Items Cards */}
                            <div className="flex flex-col gap-2 w-full">
                                {community.guidelines.items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white border border-[rgba(63,69,68,0.1)] flex items-center p-3 rounded-[12px] shadow-[0px_4px_20px_-4px_rgba(0,0,0,0.06)] w-full"
                                    >
                                        <div className="flex flex-1 gap-3 items-start">
                                            {/* Number Indicator */}
                                            <div className="relative shrink-0 size-8 flex items-center justify-center">
                                                <div className="absolute inset-0 bg-[#24483d]/5 rounded-full" />
                                                <span className="font-['Figtree'] font-semibold text-[#24483d] text-[16px] leading-[24px]">
                                                    {item.id}
                                                </span>
                                            </div>

                                            {/* Text Content */}
                                            <div className="flex flex-1 flex-col gap-1.5 justify-center">
                                                <p className="font-['Figtree'] font-medium text-[#3f4544] text-[14px] leading-[20px]">
                                                    {item.title}
                                                </p>
                                                <p className="font-['Figtree'] font-normal text-[#3f4544] text-[14px] leading-[20px]">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className="bg-white rounded-[16px] p-0 flex flex-col gap-4">
                            {community.guidelines.faqs.map((faq) => (
                                <motion.div
                                    layout
                                    key={faq.id}
                                    className="border border-[rgba(63,69,68,0.1)] flex flex-col p-4 rounded-[8px] w-full cursor-pointer transition-colors hover:bg-[#fafafa]"
                                    onClick={() => setExpandedFaqId(expandedFaqId === faq.id ? null : faq.id)}
                                >
                                    <div className="flex items-center justify-between w-full">
                                        <p className="font-['Figtree'] font-medium leading-[24px] opacity-80 text-[#272d2c] text-[16px] pr-4 flex-1">
                                            {faq.question}
                                        </p>
                                        <motion.div
                                            animate={{ rotate: expandedFaqId === faq.id ? 180 : 0 }}
                                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                            className="shrink-0 size-6 text-[#3f4544] flex items-center justify-center"
                                        >
                                            {expandedFaqId === faq.id ? <Minus size={22} weight="bold" /> : <Plus size={22} weight="bold" />}
                                        </motion.div>
                                    </div>
                                    <AnimatePresence initial={false}>
                                        {expandedFaqId === faq.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{
                                                    height: "auto",
                                                    opacity: 1,
                                                    transition: {
                                                        height: {
                                                            duration: 0.3,
                                                            ease: [0.4, 0, 0.2, 1]
                                                        },
                                                        opacity: {
                                                            duration: 0.2,
                                                            delay: 0.1
                                                        }
                                                    }
                                                }}
                                                exit={{
                                                    height: 0,
                                                    opacity: 0,
                                                    transition: {
                                                        height: {
                                                            duration: 0.25,
                                                            ease: [0.4, 0, 1, 1]
                                                        },
                                                        opacity: {
                                                            duration: 0.1
                                                        }
                                                    }
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <div className="border-t border-gray-100 pt-3 mt-3">
                                                    <p className="text-[14px] font-['Figtree'] text-[#3f4544] opacity-70 leading-[22px]">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Footer Action */}
            <div className="absolute bottom-0 left-0 right-0 px-4 pt-4 pb-4 bg-gradient-to-t from-white via-white to-transparent z-40">
                <button
                    onClick={() => onJoin(community)}
                    className="w-full h-[52px] bg-[#2d5a4c] rounded-[12px] flex items-center justify-center text-white font-['Figtree'] font-medium text-[16px] shadow-[0px_8px_20px_0px_rgba(45,90,76,0.3)] active:scale-[0.98] transition-all"
                >
                    Join  Community
                </button>
            </div>
            {/* Rate Error Popup */}
            <AnimatePresence>
                {showRateError && (
                    <div className="absolute inset-0 z-[100] flex items-center justify-center px-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowRateError(false)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-white rounded-[24px] p-8 w-full max-w-[320px] flex flex-col items-center text-center shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.1)]"
                        >
                            <div className="size-16 rounded-full bg-red-50 flex items-center justify-center mb-6">
                                <WarningCircle size={32} weight="fill" className="text-[#fb2c36]" />
                            </div>
                            <h3 className="text-[20px] font-['Bricolage_Grotesque'] font-semibold text-[#272d2c] mb-3 leading-tight">
                                Member-Only Access
                            </h3>
                            <p className="text-[14px] font-['Figtree'] text-[#3f4544] opacity-70 mb-8 leading-relaxed">
                                You are not a member of this community so you can't review or rate it yet.
                            </p>
                            <button
                                onClick={() => setShowRateError(false)}
                                className="w-full h-[52px] bg-[#f1f5f4] hover:bg-[#e2e8f0] text-[#2d5a4c] font-['Figtree'] font-semibold rounded-[12px] transition-colors"
                            >
                                Go Back
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Event Details Drawer */}
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
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

                                    {/* Top Controls */}
                                    <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                                        <button
                                            onClick={() => setIsDrawerOpen(false)}
                                            className="size-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-black/40 transition-colors"
                                        >
                                            <X size={20} weight="bold" className="text-white" />
                                        </button>
                                        <button className="size-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-black/40 transition-colors">
                                            <Heart size={20} className="text-white" />
                                        </button>
                                    </div>

                                    <div className="absolute bottom-8 left-6 right-6 text-white">
                                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full mb-3 border border-white/10 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-[#00ff85] shadow-[0_0_8px_rgba(0,255,133,0.8)]" />
                                            <span className="text-[11px] font-bold tracking-wider uppercase font-['Figtree'] shadow-sm">{selectedEvent.category}</span>
                                        </div>
                                        <h2 className="text-[28px] font-['Bricolage_Grotesque'] font-bold leading-[1.1] text-white drop-shadow-lg tracking-tight">
                                            {selectedEvent.title}
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            {/* Scrollable Details */}
                            <div className="flex-1 overflow-y-auto p-6 pt-12 pb-32 no-scrollbar">
                                {/* Community Info */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="size-[48px] rounded-[12px] overflow-hidden border border-gray-100 shadow-sm relative shrink-0">
                                        <img src={community.logo} alt="" className="size-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-[16px] font-['Bricolage_Grotesque'] font-semibold text-[#1b362e] leading-tight">
                                            {community.name}
                                        </p>
                                        <p className="text-[12px] text-[#3f4544] opacity-60 font-medium mt-0.5">
                                            Hosted by <span className="text-[#2D5A4C] font-semibold">{selectedEvent.host_name}</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    <div className="bg-[#f8f7f3] p-4 rounded-[16px] flex flex-col gap-1 border border-[#ecebe6]">
                                        <div className="flex items-center gap-2 text-[#2D5A4C]">
                                            <Calendar size={18} weight="duotone" />
                                            <span className="text-[12px] font-semibold uppercase opacity-60 font-['Figtree']">Date</span>
                                        </div>
                                        <p className="text-[14px] font-bold text-[#1b362e] mt-1 font-['Figtree']">
                                            {format(new Date(selectedEvent.start_time), 'EEE, d MMM')}
                                        </p>
                                    </div>
                                    <div className="bg-[#f8f7f3] p-4 rounded-[16px] flex flex-col gap-1 border border-[#ecebe6]">
                                        <div className="flex items-center gap-2 text-[#2D5A4C]">
                                            <Clock size={18} weight="duotone" />
                                            <span className="text-[12px] font-semibold uppercase opacity-60 font-['Figtree']">Time</span>
                                        </div>
                                        <p className="text-[14px] font-bold text-[#1b362e] mt-1 font-['Figtree']">
                                            {format(new Date(selectedEvent.start_time), 'hh:mm a')}
                                        </p>
                                    </div>
                                    <div className="col-span-2 bg-[#f8f7f3] p-4 rounded-[16px] flex items-center gap-4 border border-[#ecebe6]">
                                        <div className="size-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-[#ecebe6] shrink-0">
                                            <VideoConference size={20} weight="duotone" className="text-[#2D5A4C]" />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-[15px] font-['Figtree'] font-bold text-[#1b362e]">Online Event</p>
                                            <p className="text-[13px] text-[#3f4544] opacity-60 font-['Figtree']">Join from anywhere in the world</p>
                                        </div>
                                    </div>
                                </div>

                                {/* About Section */}
                                <div className="space-y-3">
                                    <h3 className="text-[18px] font-['Bricolage_Grotesque'] font-bold text-[#1b362e]">About Event</h3>
                                    <p className="text-[15px] font-['Figtree'] text-[#3f4544] leading-relaxed opacity-80">
                                        Join us for an exciting {(selectedEvent.category || 'Workshop').toLowerCase()} on {selectedEvent.title}. This event is hosted by {selectedEvent.host_name} and focuses on knowledge sharing and community growth.
                                    </p>
                                </div>
                            </div>

                            {/* Fixed Bottom Action */}
                            <div className="absolute bottom-0 left-0 w-full p-5 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-[0_-8px_30px_rgba(0,0,0,0.04)] flex items-center justify-between gap-6 pb-8 z-20">
                                <div className="flex flex-col gap-1.5 flex-1 pl-1">
                                    <div className="flex items-center -space-x-2">
                                        {[0, 1, 2].map(i => (
                                            <div key={i} className={`size-[28px] rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-[#1b362e]/70 ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}>
                                                {AVATAR_INITIALS[i % AVATAR_INITIALS.length]}
                                            </div>
                                        ))}
                                        <div className="size-[28px] rounded-full bg-[#f1f5f4] border-2 border-white flex items-center justify-center text-[9px] font-bold text-[#3f4544]">
                                            +2
                                        </div>
                                    </div>
                                    <p className="text-[13px] font-['Figtree'] font-medium text-[#3f4544] opacity-60">
                                        {(selectedEvent.max_attendees || 30) - selectedEvent.attendee_ids.length} spots left
                                    </p>
                                </div>

                                <button
                                    onClick={() => {
                                        const isBooked = bookedEventTitles.includes(selectedEvent.title);
                                        if (!isBooked) onBookEvent?.(selectedEvent);
                                    }}
                                    disabled={bookedEventTitles.includes(selectedEvent.title)}
                                    className={`flex-[1.6] h-[56px] rounded-[20px] font-['Figtree'] font-bold text-[16px] flex items-center justify-center gap-2.5 px-6 whitespace-nowrap transition-all group ${bookedEventTitles.includes(selectedEvent.title)
                                        ? 'bg-[#575c5b] text-white opacity-60 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-[#2D5A4C] to-[#1F4439] text-white shadow-[0_8px_24px_-6px_rgba(45,90,76,0.3)] hover:shadow-[0_12px_32px_-8px_rgba(45,90,76,0.4)]'
                                        }`}
                                >
                                    {bookedEventTitles.includes(selectedEvent.title) ? (
                                        <span>Booked</span>
                                    ) : selectedEvent.ticket_price === 0 ? (
                                        <span>Get free ticket</span>
                                    ) : (
                                        <>
                                            <span>Pay </span>
                                            <span>${selectedEvent.ticket_price}</span>
                                        </>
                                    )}

                                    {!bookedEventTitles.includes(selectedEvent.title) && (
                                        <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors ml-1.5">
                                            <ArrowRight size={14} weight="bold" />
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>
                    )}
                </DrawerContent>
            </Drawer>
        </div>
    );
};
