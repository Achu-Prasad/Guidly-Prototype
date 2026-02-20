import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CaretDown,
  Calendar as CalendarIcon,
  CaretLeft,
  Check,
  Translate,
  CircleNotch as Loader2,
  Lock
} from "@phosphor-icons/react";
import {
  format,
  addDays,
  startOfToday,
  isSameDay,
} from "date-fns";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Popover from "@radix-ui/react-popover";
import { DayPicker } from "react-day-picker";
import { toast, Toaster } from "sonner";
import "react-day-picker/dist/style.css";

import { HomeScreen } from "./components/HomeScreen";
import { SearchResults } from "./components/SearchResults";
import { ConfirmationModal } from "./components/ConfirmationModal";
import { PaymentScreen } from "./components/PaymentScreen";
import { MentorProfile } from "./components/MentorProfile";
import { BookingSuccess } from "./components/BookingSuccess";
import { Bookings } from "./components/Bookings";
import { TeamUp } from "./components/TeamUp";
import { ChatList } from "./components/ChatList";
import { ChatDetail } from "./components/ChatDetail";
import { AccountScreen } from "./components/AccountScreen";
import { NotificationScreen } from "./components/NotificationScreen";
import { MENTORS } from "./data/mentors";
import { Mentor } from "./types/mentor";
import { TeamUpEvent } from "./types/team";
import { Chat, Message } from "./types/chat";
import { Notification } from "./types/notification";
import { MOCK_NOTIFICATIONS } from "./data/notifications";
// @ts-ignore - Vite handles PNG imports at runtime
import imgStolenLogo from "../assets/Stolen logo.png";
import { CommunityProfile } from "./components/CommunityProfile";
import { Community } from "./types/team";
import { AlreadyBookedModal } from "./components/AlreadyBookedModal";
import { RescheduleScreen } from "./components/RescheduleScreen";

// --- Mock Data ---
const LANGUAGES = ["English", "Spanish", "French", "German", "Chinese", "Hindi", "Japanese", "Portuguese"];

const SERVICES = [
  { id: "interview-prep", name: "Interview prep.", duration: 45, price: "Free", cost: 0 },
  { id: "career-guidance", name: "Career guidance", duration: 60, price: "20$", cost: 20 },
  { id: "mock-interview", name: "Mock Interview", duration: 45, price: "50 $", cost: 50 },
  { id: "portfolio-review", name: "Portfolio Review", duration: 30, price: "Free", cost: 0 },
  { id: "project-review", name: "Project Review", duration: 60, price: "30 $", cost: 30 },
];

const LONG_TERM_PACKAGES = [
  { id: "lt-6", name: "6 Sessions", sessions: 6, price: "80$", cost: 80 },
  { id: "lt-12", name: "12 Sessions", sessions: 12, price: "140$", cost: 140 },
  { id: "lt-24", name: "24 Sessions", sessions: 24, price: "240$", cost: 240 },
];

const TIME_SLOTS = [
  "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
];

// --- Sub-Components ---

const LanguageSelector = ({ selected, onSelect }: { selected: string, onSelect: (val: string) => void }) => (
  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-heading font-medium leading-[20px] opacity-90 relative shrink-0 text-[#272d2c] text-[14px] w-[256px] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        Choose the language you're most comfortable with.
      </p>
    </div>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="h-[50px] relative rounded-[4px] shrink-0 w-full border border-[rgba(63,69,68,0.25)] flex items-center justify-between px-[16px] py-[8px] bg-white cursor-pointer hover:bg-gray-50 transition-colors">
          <span className="font-sans font-normal leading-[20px] text-[#3f4544] text-[14px]">{selected}</span>
          <CaretDown size={16} className="text-[#3f4544] opacity-50" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="min-w-[200px] bg-white rounded-md p-1 shadow-lg border border-gray-100 z-50" sideOffset={5}>
          {LANGUAGES.map((lang) => (
            <DropdownMenu.Item
              key={lang}
              onSelect={() => onSelect(lang)}
              className="group text-[14px] leading-none text-[#3f4544] rounded-[3px] flex items-center h-[32px] px-2 relative select-none outline-none hover:bg-[#2d5a4c] hover:text-white cursor-pointer"
            >
              {lang}
              {selected === lang && <Check className="ml-auto h-4 w-4" />}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  </div>
);

const SessionTypeToggle = ({ type, setType }: { type: 'single' | 'long', setType: (t: 'single' | 'long') => void }) => (
  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
    <p className="font-heading font-medium leading-[20px] opacity-90 relative shrink-0 text-[#272d2c] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
      Session type
    </p>
    <div className="bg-[#f3f3f3] h-[54px] relative rounded-[12px] shrink-0 w-full p-[4px] flex">
      <div className="relative flex w-full h-full">
        <motion.div
          className="absolute top-0 bottom-0 bg-white rounded-[8px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border border-[rgba(63,69,68,0.15)]"
          initial={false}
          animate={{ x: type === 'single' ? 0 : '100%' }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ width: '50%' }}
        />

        <button
          onClick={() => setType('single')}
          className={`z-10 flex-[1] h-full flex items-center justify-center font-sans font-medium text-[14px] transition-colors duration-200 ${type === 'single' ? 'text-[#1b362e]' : 'text-[#3f4544] opacity-80'}`}
        >
          Single Session
        </button>
        <button
          onClick={() => setType('long')}
          className={`z-10 flex-[1] h-full flex items-center justify-center font-sans font-medium text-[14px] transition-colors duration-200 ${type === 'long' ? 'text-[#1b362e]' : 'text-[#3f4544] opacity-80'}`}
        >
          Long-Term
        </button>
      </div>
    </div>

    {/* Description points */}
    <div className="flex flex-col gap-[6px] w-full">
      <p className="font-sans text-[13px] leading-[18px]">
        <span className="font-semibold text-[#272d2c]">Long-term Sessions:</span>{' '}
        <span className="text-[#3f4544] opacity-70">For buying a mentorship package</span>
      </p>
    </div>

    {/* Info card — only when Long-Term is selected */}
    <AnimatePresence>
      {type === 'long' && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25 }}
          className="w-full overflow-hidden"
        >
          <div className="bg-[#f1f5f4] border border-[#2d5a4c]/10 rounded-[12px] p-[14px] flex gap-[10px] items-start">
            <div className="w-[20px] h-[20px] rounded-full bg-[#2d5a4c]/15 flex items-center justify-center shrink-0 mt-0.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1C3.24 1 1 3.24 1 6C1 8.76 3.24 11 6 11C8.76 11 11 8.76 11 6C11 3.24 8.76 1 6 1ZM6.5 8.5H5.5V5.5H6.5V8.5ZM6.5 4.5H5.5V3.5H6.5V4.5Z" fill="#2d5a4c" /></svg>
            </div>
            <p className="font-sans text-[12px] leading-[18px] text-[#3f4544]">
              In long-term sessions, your mentor will create a personalised roadmap with clear milestones. You'll discuss and agree on goals together before starting, ensuring every session adds real value to your growth.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const ServiceSelection = ({ services, selectedServices, toggleService, sessionType, longTermPackages }: { services: any[], selectedServices: string[], toggleService: (id: string) => void, sessionType?: 'single' | 'long', longTermPackages?: any[] }) => {
  const totalMinutes = useMemo(() => {
    return selectedServices.reduce((acc, id) => {
      const service = services.find(s => s.id === id);
      return acc + (service?.duration || 0);
    }, 0);
  }, [selectedServices, services]);

  const maxMinutes = 120;
  const isExceeded = totalMinutes > maxMinutes;
  const progressPercentage = Math.min((totalMinutes / maxMinutes) * 100, 100);

  // Long-term mode
  if (sessionType === 'long' && longTermPackages) {
    return (
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <p className="font-heading font-medium leading-[20px] opacity-90 relative shrink-0 text-[#272d2c] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
          Choose your package
        </p>

        <div className="grid grid-cols-1 gap-[8px] w-full">
          {longTermPackages.map((pkg: any) => {
            const isSelected = selectedServices.includes(pkg.id);
            return (
              <button
                key={pkg.id}
                onClick={() => toggleService(pkg.id)}
                className={`relative rounded-[8px] shrink-0 w-full border-[1.5px] transition-all duration-200 ${isSelected ? 'bg-[#f8f7f3] border-[#2d5a4c]' : 'bg-[#f3f3f3] border-transparent'}`}
              >
                <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <p className="font-sans font-medium leading-[20px] text-[#272d2c] text-[14px]">
                      {pkg.name}
                    </p>
                  </div>
                  <p className={`font-sans font-normal leading-[16px] text-[14px] ${isSelected ? 'font-semibold text-[#272d2c]' : 'opacity-50 text-[#3f4544]'}`}>
                    {pkg.price}
                  </p>
                </div>
              </button>
            );
          })}
        </div>


      </div>
    );
  }

  // Single session mode (original)
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-heading font-medium leading-[20px] opacity-90 relative shrink-0 text-[#272d2c] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        Select Service you need.
      </p>

      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <div className="bg-white relative rounded-[12px] shrink-0 w-full border border-[rgba(63,69,68,0.1)] p-[16px]">
          <div className="content-stretch flex flex-col gap-[10px] items-start relative w-full">
            <div className="content-stretch flex items-center justify-between leading-[20px] relative shrink-0 text-[#272d2c] text-[14px] text-justify w-full">
              <p className="font-sans font-medium">Session Capacity</p>
              <p className={`font-sans font-semibold ${isExceeded ? 'text-red-500' : ''}`}>
                {(totalMinutes / 60).toFixed(1)} / 2 Hours used
              </p>
            </div>

            <div className="h-[10px] relative shrink-0 w-full bg-[#f3f3f3] rounded-[200px] overflow-hidden">
              <motion.div
                className={`h-full rounded-[200px] ${isExceeded ? 'bg-[#ff9999]' : 'bg-[#2d5a4c]'}`}
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              />
            </div>
            {isExceeded && (
              <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 font-sans text-[12px] font-semibold">
                you exceeded the limit
              </motion.p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[8px] w-full">
          {services.map((service) => {
            const isSelected = selectedServices.includes(service.id);
            return (
              <button
                key={service.id}
                onClick={() => toggleService(service.id)}
                className={`relative rounded-[8px] shrink-0 w-full border-[1.5px] transition-all duration-200 ${isSelected ? 'bg-[#f8f7f3] border-[#2d5a4c]' : 'bg-[#f3f3f3] border-transparent'}`}
              >
                <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <p className="font-sans font-medium leading-[20px] text-[#272d2c] text-[14px]">
                      {service.name}
                    </p>
                    <div className={`${isSelected ? 'bg-[#2d5a4c] text-white' : 'bg-white text-[#1b362e]'} flex items-center justify-center px-[8px] py-[4px] relative rounded-[64px] shrink-0 transition-colors`}>
                      <p className="font-sans font-medium leading-[14px] text-[10px]">{service.duration} Min</p>
                    </div>
                  </div>
                  <p className={`font-sans font-normal leading-[16px] text-[14px] ${isSelected ? 'font-semibold text-[#272d2c]' : 'opacity-50 text-[#3f4544]'}`}>
                    {service.price}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const DateTimeSection = ({ selectedDate, onDateChange, selectedTime, onTimeChange, sessionType, bookings, mentorId }: {
  selectedDate: Date,
  onDateChange: (d: Date) => void,
  selectedTime: string | null,
  onTimeChange: (t: string) => void,
  sessionType?: 'single' | 'long',
  bookings: BookingEntry[],
  mentorId?: string | number
}) => {
  const dates = useMemo(() => Array.from({ length: 14 }, (_, i) => addDays(startOfToday(), i)), []);

  const availableTimes = useMemo(() => {
    const day = selectedDate.getDate();
    let baseSlots: string[] = [];
    if (day % 3 === 0) baseSlots = TIME_SLOTS.slice(0, 3);
    else if (day % 2 === 0) baseSlots = TIME_SLOTS.slice(2, 5);
    else baseSlots = TIME_SLOTS;

    // Filter out slots already booked for THIS mentor on THIS date
    return baseSlots.filter(time => {
      const isBooked = bookings.some(b =>
        b.type === 'session' &&
        b.mentorId === mentorId &&
        b.date === format(selectedDate, 'dd/MM/yyyy') &&
        b.time.startsWith(time)
      );
      return !isBooked;
    });
  }, [selectedDate, bookings, mentorId]);

  // Reset selectedTime if it's no longer available
  useEffect(() => {
    if (selectedTime && !availableTimes.includes(selectedTime)) {
      onTimeChange('');
    }
  }, [availableTimes, selectedTime, onTimeChange]);

  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="flex items-center justify-between w-full">
          <p className="font-heading font-medium leading-[20px] opacity-90 text-[#272d2c] text-[14px]">
            {sessionType === 'long' ? 'Date & Time to start' : 'Date & Time'}
          </p>
          <Popover.Root>
            <Popover.Trigger asChild>
              <button className="font-sans font-medium text-[#2d5a4c] text-[12px] flex items-center gap-1">Change Date</button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="bg-white p-4 rounded-[24px] shadow-[0px_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 z-50" sideOffset={5} align="end">
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={(d) => d && onDateChange(d)}
                  disabled={{ before: new Date() }}
                  classNames={{
                    months: "flex flex-col space-y-4",
                    month: "space-y-4",
                    caption: "flex justify-center pt-1 relative items-center",
                    caption_label: "text-[16px] font-heading font-medium text-[#272d2c]",
                    nav: "space-x-1 flex items-center",
                    nav_button: "h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg border border-gray-100",
                    nav_button_previous: "absolute left-1",
                    nav_button_next: "absolute right-1",
                    table: "w-full border-collapse space-y-1",
                    head_row: "flex",
                    head_cell: "text-[#3f4544] opacity-40 rounded-md w-9 font-normal text-[11px] font-sans uppercase tracking-wider",
                    row: "flex w-full mt-2",
                    cell: "text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
                    day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-[#2d5a4c]/10 rounded-full transition-all duration-200 font-sans text-[#272d2c] flex items-center justify-center",
                    day_selected: "bg-[#2d5a4c]! text-white! hover:bg-[#2d5a4c]! hover:text-white! focus:bg-[#2d5a4c]! focus:text-white! rounded-full shadow-lg shadow-[#2d5a4c]/20",
                    day_today: "bg-[#f3f3f3] text-[#2d5a4c] font-bold",
                    day_disabled: "text-[#3f4544] opacity-20 cursor-not-allowed",
                    day_outside: "text-[#3f4544] opacity-10",
                    day_hidden: "invisible",
                  }}
                />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>

        <div className="flex gap-[12px] overflow-x-auto pb-4 no-scrollbar w-full">
          {dates.map((date) => {
            const isSelected = isSameDay(date, selectedDate);
            return (
              <button
                key={date.toISOString()}
                onClick={() => onDateChange(date)}
                className={`flex flex-col items-center justify-center min-w-[56px] h-[64px] rounded-[8px] transition-all duration-300 shrink-0 my-2 ${isSelected ? 'bg-[#2d5a4c] text-white shadow-[0px_8px_20px_rgba(0,0,0,0.15)] scale-110 z-10' : 'bg-white text-[#3f4544] border border-gray-100'}`}
              >
                <p className={`text-[12px] font-medium leading-[16px] ${isSelected ? 'opacity-70' : 'opacity-70'}`}>{format(date, 'EEE').toUpperCase()}</p>
                <p className="text-[16px] font-medium leading-[24px]">{format(date, 'd')}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[8px] w-full">
        {availableTimes.map((time) => {
          const isSelected = selectedTime === time;
          return (
            <button key={time} onClick={() => onTimeChange(time)} className={`flex items-center justify-center p-[8px] rounded-[4px] transition-colors w-full ${isSelected ? 'bg-[#2d5a4c] text-white' : 'bg-[#f3f3f3] text-[#3f4544]'}`}>
              <p className="font-sans font-normal leading-[20px] text-[14px]">{time}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// --- Chat Initial Data ---
const INITIAL_CHATS: Chat[] = [];
const INITIAL_MESSAGES: Record<string | number, Message[]> = {};

// --- Booking Types ---
interface BookingEntry {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  duration: string;
  type: 'session' | 'event';
  status?: 'join' | 'upcoming';
  mentorId?: string | number;
  isNew?: boolean;
}

const INITIAL_BOOKINGS: BookingEntry[] = [];

// --- Main App ---

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'search-results' | 'profile' | 'community-profile' | 'booking' | 'payment' | 'booking-success' | 'teamup' | 'bookings' | 'chat' | 'chat-detail' | 'account' | 'notifications' | 'reschedule-screen'>('home');
  const [isRescheduling, setIsRescheduling] = useState(false);
  const [currentRescheduleBooking, setCurrentRescheduleBooking] = useState<any>(null);
  const [selectedChatUser, setSelectedChatUser] = useState<{ id: string | number, name: string, image: string, isGroup?: boolean } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [mentorProfileInitialTab, setMentorProfileInitialTab] = useState('Overview');
  const [previousView, setPreviousView] = useState<string>('home');
  const [chatReturnView, setChatReturnView] = useState<'chat' | 'profile'>('chat');

  const handleReschedule = (booking: any) => {
    setCurrentRescheduleBooking(booking);
    setIsRescheduling(true);
    // Simulate natural loading delay
    setTimeout(() => {
      setIsRescheduling(false);
      setCurrentView('reschedule-screen');
    }, 1500);
  };

  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null);

  const handleSelectCommunity = (community: Community) => {
    setSelectedCommunity(community);
    setCurrentView('community-profile');
  };

  const handleJoinCommunity = (community: Community) => {
    toast.success(`You've joined ${community.name}!`);
    const chatExists = chats.find(c => c.id === community.id);
    if (!chatExists) {
      const newChat: Chat = {
        id: community.id,
        name: community.name,
        image: community.logo,
        message: "You joined this community",
        time: "Now",
        unread: 0,
        status: 'read',
        type: 'community',
        isGroup: true
      };
      setChats(prev => [newChat, ...prev]);
    }
  };

  const [recentMentors, setRecentMentors] = useState<Mentor[]>([]);
  const [favouriteMentors, setFavouriteMentors] = useState<Mentor[]>([]);

  // Chat state
  const [chats, setChats] = useState<Chat[]>(INITIAL_CHATS);
  const [messagesPerChat, setMessagesPerChat] = useState<Record<string | number, Message[]>>(INITIAL_MESSAGES);

  // Community Join Status: 'none' | 'requesting' | 'joined'
  const [communityStatuses, setCommunityStatuses] = useState<Record<string, 'none' | 'requesting' | 'joined'>>({});

  const simulateLiveCommunityChat = (community: Community) => {
    const senderAvatars: Record<string, string> = {
      "Sarah Chen": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      "Marcus": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      "Elena R.": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      "Devin": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    };

    const trendMessages = [
      { sender: "Sarah Chen", text: "Hey everyone! Just saw the new Figma AI features 🚀. What do we think?", delay: 3000 },
      { sender: "Marcus", text: "They look promising! Especially the auto-layout improvements.", delay: 8000 },
      { sender: "Elena R.", text: "Anyone else struggling with variable spacing in Tailwind? 😅", delay: 15000 },
      { sender: "Devin", text: "Check out this new design system documentation style: [link]", delay: 25000 },
      { sender: "Sarah Chen", text: "Minimalism is making a huge comeback this year, have you noticed?", delay: 40000 }
    ];

    trendMessages.forEach((msg, index) => {
      setTimeout(() => {
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const newMessage: Message = {
          id: Date.now() + index,
          text: msg.text,
          sender: 'other',
          senderName: msg.sender,
          senderImage: senderAvatars[msg.sender],
          time
        };

        setMessagesPerChat(prev => ({
          ...prev,
          [community.id]: [...(prev[community.id] || []), newMessage]
        }));

        setChats(prev => prev.map(chat => {
          if (chat.id === community.id) {
            return {
              ...chat,
              message: msg.text,
              time,
              unread: (chat.unread || 0) + 1,
              status: 'received'
            };
          }
          return chat;
        }));
      }, msg.delay);
    });
  };

  const handleJoinCommunityRequest = (community: Community) => {
    if (communityStatuses[community.id] === 'requesting' || communityStatuses[community.id] === 'joined') return;

    // 1. Set status to requesting
    setCommunityStatuses(prev => ({ ...prev, [community.id]: 'requesting' }));

    // 2. Simulate acceptance after 1 minute (for demo sake, let's keep it 1 min as requested)
    setTimeout(() => {
      setCommunityStatuses(prev => ({ ...prev, [community.id]: 'joined' }));

      // Add notification
      const newNotification: Notification = {
        id: `joined-${community.id}-${Date.now()}`,
        recipient_id: 'me',
        title: "Join Request Accepted!",
        message: `You are now a member of ${community.name}. Welcome aboard!`,
        is_read: false,
        type: "system",
        created_at: new Date().toISOString()
      };
      setNotifications(prev => [newNotification, ...prev]);

      // Add community chat
      handleJoinCommunity(community);

      // Start live chat simulation
      setTimeout(() => simulateLiveCommunityChat(community), 5000);
    }, 60000);
  };

  // Bookings state
  const [bookings, setBookings] = useState<BookingEntry[]>(INITIAL_BOOKINGS);

  // Compute unread chat indicator
  const hasUnreadChats = useMemo(() => chats.some(c => c.unread > 0), [chats]);

  // Notifications state
  const [notifications, setNotifications] = useState<Notification[]>(MOCK_NOTIFICATIONS);

  const unreadNotificationsCount = useMemo(() =>
    notifications.filter(n => !n.is_read).length,
    [notifications]
  );

  const handleMarkNotificationRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, is_read: true } : n));
  };

  const handleMarkAllNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, is_read: true })));
  };

  const handleDeleteAllNotifications = () => {
    setNotifications([]);
  };

  const handleSendMessage = (userId: string | number, text: string) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender: 'me',
      time
    };

    setMessagesPerChat(prev => ({
      ...prev,
      [userId]: [...(prev[userId] || []), newMessage]
    }));

    setChats(prev => prev.map(chat => {
      if (chat.id === userId) {
        return {
          ...chat,
          message: text,
          time,
          status: 'sent' as const,
          unread: 0
        };
      }
      return chat;
    }));
  };

  const handleOpenChat = (user: { id: string | number, name: string, image: string, isGroup?: boolean }) => {
    // Check if chat exists, if not create a placeholder
    const chatExists = chats.find(c => c.id === user.id);
    if (!chatExists) {
      const newChat: Chat = {
        id: user.id,
        name: user.name,
        image: user.image,
        message: "Start a conversation...",
        time: "Now",
        unread: 0,
        status: 'read',
        type: user.isGroup ? 'community' : 'mentor',
        isGroup: user.isGroup
      };
      setChats(prev => [newChat, ...prev]);
    } else {
      // Mark as read
      setChats(prev => prev.map(c => c.id === user.id ? { ...c, unread: 0, status: 'read' as const } : c));
    }

    setSelectedChatUser(user);
    setCurrentView('chat-detail');
  };

  const toggleFavourite = (mentor: Mentor) => {
    setFavouriteMentors(prev => {
      const exists = prev.find(m => m.id === mentor.id);
      if (exists) {
        toast.success(`Removed ${mentor.name} from favourites`);
        return prev.filter(m => m.id !== mentor.id);
      } else {
        toast.success(`Added ${mentor.name} to favourites!`);
        return [...prev, mentor];
      }
    });
  };

  // Booking flow states
  const [language, setLanguage] = useState("English");
  const [sessionType, setSessionType] = useState<'single' | 'long'>('single');
  const [selectedServices, setSelectedServices] = useState<string[]>(["career-guidance"]);
  const [selectedDate, setSelectedDate] = useState<Date>(addDays(startOfToday(), 2));
  const [selectedTime, setSelectedTime] = useState<string | null>("11:00 AM");
  const [description, setDescription] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [lastBookingId, setLastBookingId] = useState("");
  const [bookingType, setBookingType] = useState<'mentorship' | 'event'>('mentorship');
  const [selectedEventBooking, setSelectedEventBooking] = useState<TeamUpEvent | null>(null);
  const [bookingsInitialTab, setBookingsInitialTab] = useState('All');
  const [isBookingProcessing, setIsBookingProcessing] = useState(false);
  const [showAlreadyBooked, setShowAlreadyBooked] = useState(false);

  const handleSetSessionType = (type: 'single' | 'long') => {
    setSessionType(type);
    setSelectedServices([]); // Clear selections when switching type
  };

  const handleNavigateToBookings = (tab: string = 'All') => {
    setShowAlreadyBooked(false);
    setBookingsInitialTab(tab);
    setCurrentView('bookings');
  };

  const toggleService = (id: string) => {
    if (sessionType === 'long') {
      // Single-select for long-term packages
      setSelectedServices(prev => prev.includes(id) ? [] : [id]);
    } else {
      setSelectedServices(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
    }
  };

  const currentServices = useMemo(() => {
    if (selectedMentor) {
      return selectedMentor.services.map(s => ({
        id: s.id,
        name: s.title,
        duration: parseInt(s.duration),
        price: s.price,
        cost: s.cost
      }));
    }
    return SERVICES;
  }, [selectedMentor]);

  const totalMinutes = useMemo(() => selectedServices.reduce((acc, id) => acc + (currentServices.find(s => s.id === id)?.duration || 0), 0), [selectedServices, currentServices]);
  const totalPrice = useMemo(() => {
    if (sessionType === 'long') {
      return selectedServices.reduce((acc, id) => acc + (LONG_TERM_PACKAGES.find(p => p.id === id)?.cost || 0), 0);
    }
    return selectedServices.reduce((acc, id) => acc + (currentServices.find(s => s.id === id)?.cost || 0), 0);
  }, [selectedServices, currentServices, sessionType]);
  const selectedServiceObjects = useMemo(() => selectedServices.map(id => currentServices.find(s => s.id === id)!).filter(Boolean), [selectedServices, currentServices]);


  const handleBookEvent = async (event: TeamUpEvent) => {
    setSelectedEventBooking(event);
    setBookingType('event');

    if (event.ticket_price === 0) {
      setIsBookingProcessing(true);
      // Give some visual feedback for free events too
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsBookingProcessing(false);
      handlePaymentSuccess('free', 'evt-' + Math.random().toString(36).substr(2, 9).toUpperCase(), 'event', event);
    } else {
      // For paid events, we'll go to a confirmation state or straight to payment
      // User said: "every confirmation screen should show the exact data related to where it confirmed from"
      // So let's show the ConfirmationModal for events too.
      setShowConfirmation(true);
    }
  };

  const handleGoToPayment = () => {
    setBookingType('mentorship');
    setShowConfirmation(false);
    setCurrentView('payment');
  };

  const handlePaymentSuccess = (method: string, bookingId: string, typeOverride?: 'mentorship' | 'event', eventOverride?: TeamUpEvent) => {
    setLastBookingId(bookingId);

    const activeBookingType = typeOverride || bookingType;
    const activeEvent = eventOverride || selectedEventBooking;

    // Build a new booking entry from current booking flow data
    const dateStr = activeBookingType === 'event' && activeEvent
      ? format(new Date(activeEvent.start_time), 'dd/MM/yyyy')
      : `${String(selectedDate.getDate()).padStart(2, '0')}/${String(selectedDate.getMonth() + 1).padStart(2, '0')}/${selectedDate.getFullYear()}`;

    let newBooking: BookingEntry;

    if (activeBookingType === 'event' && activeEvent) {
      newBooking = {
        id: bookingId,
        title: activeEvent.title,
        subtitle: `Hosted by ${activeEvent.host_name}`,
        date: dateStr,
        time: format(new Date(activeEvent.start_time), 'hh:mm a'),
        duration: '1 hour',
        type: 'event',
        status: 'upcoming'
      };
    } else if (sessionType === 'long') {
      const selectedPkg = LONG_TERM_PACKAGES.find(p => selectedServices.includes(p.id));
      newBooking = {
        id: bookingId,
        title: selectedMentor ? `Long-Term with ${selectedMentor.name}` : 'Long-Term Mentoring',
        subtitle: selectedPkg ? selectedPkg.name : 'Long-term package',
        date: dateStr,
        time: selectedTime ? `${selectedTime} (IST)` : 'TBD',
        duration: selectedPkg ? `${selectedPkg.sessions} Sessions` : '',
        type: 'session',
        status: 'upcoming'
      };
    } else {
      const serviceNames = selectedServiceObjects.map(s => s.name).join(', ');
      const durationText = bookingType === 'event' ? '1 hour' : (() => {
        if (totalMinutes < 60) return `${totalMinutes}m`;
        const h = Math.floor(totalMinutes / 60);
        const m = totalMinutes % 60;
        if (m === 0) return `${h} hour${h > 1 ? 's' : ''}`;
        return `${h} hour${h > 1 ? 's' : ''} : ${m} minutes`;
      })();

      newBooking = {
        id: bookingId,
        title: selectedMentor ? `Session with ${selectedMentor.name}` : 'Mentoring Session',
        subtitle: serviceNames || 'General session',
        date: dateStr,
        time: selectedTime! + ' (IST)',
        duration: durationText,
        type: bookingType === 'mentorship' ? 'session' : 'event',
        status: 'upcoming',
        mentorId: bookingType === 'mentorship' ? selectedMentor?.id : undefined
      };
    }

    setBookings(prev => [{ ...newBooking, isNew: true }, ...prev]);

    // Remove the "NEW" badge from this booking after 2 minutes
    setTimeout(() => {
      setBookings(current => current.map(b => b.id === bookingId ? { ...b, isNew: false } : b));
    }, 120000);

    const newNotification: Notification = {
      id: crypto.randomUUID(),
      recipient_id: 'user1',
      type: 'booking_confirmed',
      title: 'Booking Confirmed',
      message: `Your booking "${newBooking.title}" on ${newBooking.date} at ${newBooking.time} is confirmed.`,
      is_read: false,
      related_id: newBooking.id,
      created_at: new Date().toISOString()
    };
    setNotifications(prev => [newNotification, ...prev]);
    setCurrentView('booking-success');
    toast.success(`Booking successful!`);
  };

  const handleNavigate = (view: any) => {
    if (view === 'bookings') {
      setBookingsInitialTab('All');
    }
    setPreviousView(currentView);
    setCurrentView(view);
  };

  if (currentView === 'home') {
    return (
      <div className="bg-[#fafafa] h-screen flex items-center justify-center p-4 overflow-hidden">
        <div className="w-[360px] h-full max-h-[800px] bg-[#f8f7f3] relative overflow-hidden flex flex-col shadow-2xl rounded-[32px] border border-gray-100">
          <HomeScreen
            onSearch={(query) => {
              setSearchQuery(query);
              setCurrentView('search-results');
            }}
            onSelectMentor={(mentor) => {
              const m = mentor as Mentor;
              setSelectedMentor(m);
              setRecentMentors(prev => {
                const filtered = prev.filter(rm => rm.id !== m.id);
                return [m, ...filtered].slice(0, 10);
              });
              setSelectedServices(m.services.length > 0 ? [m.services[0].id] : []);
              setMentorProfileInitialTab('Overview');
              setPreviousView('home');
              setCurrentView('profile');
            }}
            onNavigate={handleNavigate}
            recentMentors={recentMentors}
            favouriteMentors={favouriteMentors}
            hasUnreadChats={hasUnreadChats}
            unreadNotificationsCount={unreadNotificationsCount}
          />
        </div>
        <Toaster position="top-center" />
      </div>
    );
  }

  if (currentView === 'teamup') {
    return (
      <div className="bg-[#fafafa] h-screen flex items-center justify-center p-4 overflow-hidden">
        <div className="w-[360px] h-full max-h-[800px] bg-[#f8f7f3] relative overflow-hidden flex flex-col shadow-2xl rounded-[32px] border border-gray-100">
          <TeamUp
            onNavigate={handleNavigate}
            hasUnreadChats={hasUnreadChats}
            onBookEvent={handleBookEvent}
            onSelectCommunity={handleSelectCommunity}
            bookedEventTitles={bookings.filter(b => b.type === 'event').map(b => b.title)}
            unreadNotificationsCount={unreadNotificationsCount}
            communityStatuses={communityStatuses}
            onJoinRequest={handleJoinCommunityRequest}
            chats={chats}
          />

          <AnimatePresence>
            {showConfirmation && (
              <ConfirmationModal
                isOpen={showConfirmation}
                onClose={() => setShowConfirmation(false)}
                onConfirm={handleGoToPayment}
                data={{
                  title: selectedEventBooking?.title,
                  mentorName: selectedEventBooking?.host_name,
                  language: 'English',
                  services: [],
                  sessionType: 'event',
                  date: selectedEventBooking ? new Date(selectedEventBooking.start_time) : new Date(),
                  time: selectedEventBooking ? format(new Date(selectedEventBooking.start_time), 'hh:mm a') : null,
                  totalDuration: 60,
                  totalPrice: selectedEventBooking?.ticket_price || 0
                }}
              />
            )}
            {isBookingProcessing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-[100] flex flex-col items-center justify-center bg-white/90 backdrop-blur-md"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border-4 border-[#2d5a4c]/10 border-t-[#2d5a4c] rounded-full"
                  />
                  <div className="absolute inset-0 z-[110] flex items-center justify-center p-4">
                    <div className="w-8 h-8 bg-[#2d5a4c] rounded-full animate-pulse flex items-center justify-center">
                      <Check size={14} className="text-white" weight="bold" />
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center px-6">
                  <h3 className="font-heading font-semibold text-[20px] text-[#272d2c] mb-2 uppercase tracking-widest">
                    Booking Event
                  </h3>
                  <p className="font-sans font-medium text-[14px] text-[#3f4544] opacity-60">
                    Reserving your spot...
                  </p>
                </div>
              </motion.div>
            )}
            {showAlreadyBooked && (
              <AlreadyBookedModal
                isOpen={showAlreadyBooked}
                onClose={() => setShowAlreadyBooked(false)}
                onGoToBookings={() => handleNavigateToBookings('Events')}
              />
            )}
          </AnimatePresence>
        </div>
        <Toaster position="top-center" />
      </div>
    );
  }

  if (currentView === 'bookings') {
    return (
      <div className="bg-[#fafafa] h-screen flex items-center justify-center p-4 overflow-hidden">
        <div className="w-[360px] h-full max-h-[800px] bg-[#f8f7f3] relative overflow-hidden flex flex-col shadow-2xl rounded-[32px] border border-gray-100">
          <Bookings
            onNavigate={handleNavigate}
            bookings={bookings}
            hasUnreadChats={hasUnreadChats}
            initialTab={bookingsInitialTab}
            unreadNotificationsCount={unreadNotificationsCount}
            onReschedule={handleReschedule}
          />
        </div>
        <Toaster position="top-center" />
      </div>
    );
  }

  if (currentView === 'account') {
    return (
      <div className="bg-[#fafafa] h-screen flex items-center justify-center p-4 overflow-hidden">
        <div className="w-[360px] h-full max-h-[800px] bg-[#f8f7f3] relative overflow-hidden flex flex-col shadow-2xl rounded-[32px] border border-gray-100">
          <AccountScreen
            onNavigate={handleNavigate}
            hasUnreadChats={hasUnreadChats}
            unreadNotificationsCount={unreadNotificationsCount}
          />
        </div>
        <Toaster position="top-center" />
      </div>
    );
  }

  if (currentView === 'chat') {
    return (
      <div className="bg-[#fafafa] h-screen flex items-center justify-center p-4 overflow-hidden">
        <div className="w-[360px] h-full max-h-[800px] bg-[#f8f7f3] relative overflow-hidden flex flex-col shadow-2xl rounded-[32px] border border-gray-100">
          <ChatList
            onNavigate={handleNavigate}
            onSelectChat={(user) => {
              setChatReturnView('chat');
              handleOpenChat(user);
            }}
            chats={chats}
            hasUnreadChats={hasUnreadChats}
            unreadNotificationsCount={unreadNotificationsCount}
          />
        </div>
        <Toaster position="top-center" />
      </div>
    );
  }

  if (currentView === 'chat-detail' && selectedChatUser) {
    return (
      <div className="bg-[#fafafa] h-screen flex items-center justify-center p-4 overflow-hidden">
        <div className="w-[360px] h-full max-h-[800px] bg-[#f8f7f3] relative overflow-hidden flex flex-col shadow-2xl rounded-[32px] border border-gray-100">
          <ChatDetail
            user={selectedChatUser}
            onBack={() => setCurrentView(chatReturnView)}
            onMessageSent={handleSendMessage}
            initialMessages={messagesPerChat[selectedChatUser.id] || []}
          />
        </div>
        <Toaster position="top-center" />
      </div>
    );
  }

  if (currentView === 'community-profile' && selectedCommunity) {
    return (
      <div className="bg-[#fafafa] h-screen flex items-center justify-center p-4 overflow-hidden">
        <div className="w-[360px] h-full max-h-[800px] bg-[#f8f7f3] relative overflow-hidden flex flex-col shadow-2xl rounded-[32px] border border-gray-100">
          <CommunityProfile
            community={selectedCommunity}
            onBack={() => setCurrentView('teamup')}
            onJoin={handleJoinCommunity}
            onJoinRequest={() => handleJoinCommunityRequest(selectedCommunity)}
            status={communityStatuses[selectedCommunity.id] || 'none'}
            onBookEvent={handleBookEvent}
            bookedEventTitles={bookings.filter(b => b.type === 'event').map(b => b.title)}
            onChatLeader={(leader) => {
              setChatReturnView('community-profile' as any);
              handleOpenChat({
                id: leader.id,
                name: leader.name,
                image: leader.image || ''
              });
            }}
          />
          <AnimatePresence>
            {showConfirmation && (
              <ConfirmationModal
                isOpen={showConfirmation}
                onClose={() => setShowConfirmation(false)}
                onConfirm={handleGoToPayment}
                data={{
                  title: selectedEventBooking?.title,
                  mentorName: selectedEventBooking?.host_name,
                  language: 'English',
                  services: [],
                  sessionType: 'event',
                  date: selectedEventBooking ? new Date(selectedEventBooking.start_time) : new Date(),
                  time: selectedEventBooking ? format(new Date(selectedEventBooking.start_time), 'hh:mm a') : null,
                  totalDuration: 60,
                  totalPrice: selectedEventBooking?.ticket_price || 0
                }}
              />
            )}
            {isBookingProcessing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-[100] flex flex-col items-center justify-center bg-white/90 backdrop-blur-md"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border-4 border-[#2d5a4c]/10 border-t-[#2d5a4c] rounded-full"
                  />
                  <div className="absolute inset-0 z-[110] flex items-center justify-center p-4">
                    <div className="w-8 h-8 bg-[#2d5a4c] rounded-full animate-pulse flex items-center justify-center">
                      <Check size={14} className="text-white" weight="bold" />
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center px-6">
                  <h3 className="font-heading font-semibold text-[20px] text-[#272d2c] mb-2 uppercase tracking-widest">
                    Booking Event
                  </h3>
                  <p className="font-sans font-medium text-[14px] text-[#3f4544] opacity-60">
                    Reserving your spot...
                  </p>
                </div>
              </motion.div>
            )}
            {showAlreadyBooked && (
              <AlreadyBookedModal
                isOpen={showAlreadyBooked}
                onClose={() => setShowAlreadyBooked(false)}
                onGoToBookings={() => handleNavigateToBookings('Events')}
              />
            )}
          </AnimatePresence>
        </div>
        <Toaster position="top-center" />
      </div>
    );
  }

  if (currentView === 'profile' && selectedMentor) {
    return (
      <div className="bg-[#fafafa] h-screen flex items-center justify-center p-4 overflow-hidden">
        <div className="w-[360px] h-full max-h-[800px] bg-[#f8f7f3] relative overflow-hidden flex flex-col shadow-2xl rounded-[32px] border border-gray-100">
          <MentorProfile
            mentor={selectedMentor}
            onBack={() => setCurrentView(previousView as any)}
            onBook={() => setCurrentView('booking')}
            onChat={(mentor) => {
              setChatReturnView('profile');
              handleOpenChat({
                id: mentor.id,
                name: mentor.name,
                image: mentor.image
              });
            }}
            initialTab={mentorProfileInitialTab}
            onToggleFavourite={toggleFavourite}
            isFavourite={!!favouriteMentors.find(m => m.id === selectedMentor?.id)}
          />
        </div>
        <Toaster position="top-center" />
      </div>
    );
  }

  if (currentView === 'search-results') {
    return (
      <div className="bg-[#fafafa] h-screen flex items-center justify-center p-4 overflow-hidden">
        <div className="w-[360px] h-full max-h-[800px] bg-[#f8f7f3] relative overflow-hidden flex flex-col shadow-2xl rounded-[32px] border border-gray-100">
          <SearchResults
            query={searchQuery}
            onBack={() => setCurrentView('home')}
            onSelectMentor={(mentor) => {
              const m = mentor as Mentor;
              setSelectedMentor(m);
              setRecentMentors(prev => {
                const filtered = prev.filter(rm => rm.id !== m.id);
                return [m, ...filtered].slice(0, 10);
              });
              setSelectedServices(m.services.length > 0 ? [m.services[0].id] : []);
              setMentorProfileInitialTab('Overview');
              setPreviousView('search-results');
              setCurrentView('profile');
            }}
            onNavigate={handleNavigate}
            hasUnreadChats={hasUnreadChats}
            unreadNotificationsCount={unreadNotificationsCount}
          />
        </div>
        <Toaster position="top-center" />
      </div>
    );
  }


  if (currentView === 'notifications') {
    return (
      <div className="bg-[#fafafa] h-screen flex items-center justify-center p-4 overflow-hidden">
        <div className="w-[360px] h-full max-h-[800px] bg-[#f8f7f3] relative overflow-hidden flex flex-col shadow-2xl rounded-[32px] border border-gray-100">
          <NotificationScreen
            notifications={notifications}
            onMarkAsRead={handleMarkNotificationRead}
            onMarkAllRead={handleMarkAllNotificationsRead}
            onDeleteAll={handleDeleteAllNotifications}
            onClose={() => setCurrentView('home')}
            onNavigateToBooking={(id) => {
              setCurrentView('bookings');
              // Maybe scroll to booking?
            }}
          />
        </div>
        <Toaster position="top-center" />
      </div>
    );
  }

  if (currentView === 'booking') {
    return (
      <div className="bg-[#fafafa] h-screen flex items-center justify-center p-4 overflow-hidden">
        <div className="w-[360px] h-full max-h-[800px] bg-white relative overflow-hidden flex flex-col shadow-2xl rounded-[32px] border border-gray-100">

          {/* Header/Nav */}
          <div className="sticky top-0 bg-white/80 backdrop-blur-md z-30 px-6 pt-[36px] pb-4 flex items-center justify-between">
            <button
              onClick={() => setCurrentView('home')}
              className="p-2 -ml-2 hover:bg-gray-100 rounded-[8px] transition-colors"
            >
              <CaretLeft className="text-[#0F1615]" size={24} weight="bold" />
            </button>
            <div className="flex gap-[12px] items-center">
              <div className="bg-[#2d5a4c] rounded-[200px] h-[8px] w-[34px] shrink-0" />
              <div className="bg-[#e7e8e8] rounded-[200px] size-[8px] shrink-0" />
              <div className="bg-[#e7e8e8] rounded-[200px] size-[8px] shrink-0" />
            </div>
          </div>

          {/* Mentor Profile Summary (Optional addition for context) */}
          {selectedMentor && (
            null
          )}

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-6 pb-[100px] pt-4 space-y-12 no-scrollbar">
            <LanguageSelector selected={language} onSelect={setLanguage} />
            <SessionTypeToggle type={sessionType} setType={handleSetSessionType} />
            <ServiceSelection services={currentServices} selectedServices={selectedServices} toggleService={toggleService} sessionType={sessionType} longTermPackages={LONG_TERM_PACKAGES} />
            <DateTimeSection
              selectedDate={selectedDate}
              onDateChange={setSelectedDate}
              selectedTime={selectedTime}
              onTimeChange={setSelectedTime}
              sessionType={sessionType}
              bookings={bookings}
              mentorId={selectedMentor?.id}
            />

            <div className="space-y-4">
              <p className="font-heading font-medium leading-[20px] opacity-90 text-[#272d2c] text-[14px]">Short description</p>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="As a mentee seeking guidance..."
                className="w-full h-[120px] p-4 bg-[#f8f9f8] rounded-[12px] text-[14px] outline-none border border-transparent focus:border-[#2d5a4c]/20 resize-none transition-all"
              />
            </div>
          </div>

          {/* Footer Button */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent pt-8">
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const isAlreadyBooked = bookings.some(b =>
                  b.type === 'session' &&
                  b.mentorId === selectedMentor?.id &&
                  b.date === format(selectedDate, 'dd/MM/yyyy') &&
                  b.time.startsWith(selectedTime!)
                );
                if (isAlreadyBooked) {
                  setShowAlreadyBooked(true);
                  return;
                }
                setShowConfirmation(true);
              }}
              className="w-full h-[56px] bg-[#2d5a4c] flex items-center justify-center rounded-[16px] text-white font-semibold text-[16px] shadow-lg font-body relative z-[99]"
            >
              Continue for Confirmation
            </motion.button>
          </div>

          <AnimatePresence>
            {showConfirmation && (
              <ConfirmationModal
                isOpen={showConfirmation}
                onClose={() => setShowConfirmation(false)}
                onConfirm={handleGoToPayment}
                data={{
                  mentorName: selectedMentor?.name,
                  mentorImage: selectedMentor?.image,
                  language,
                  services: selectedServiceObjects,
                  sessionType,
                  date: selectedDate,
                  time: selectedTime,
                  totalDuration: totalMinutes,
                  totalPrice: totalPrice
                }}
              />
            )}
            {showAlreadyBooked && (
              <AlreadyBookedModal
                isOpen={showAlreadyBooked}
                onClose={() => setShowAlreadyBooked(false)}
                onGoToBookings={() => handleNavigateToBookings('Sessions')}
              />
            )}
          </AnimatePresence>
        </div>
        <Toaster position="top-center" />

        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>
    );
  }

  if (currentView === 'payment') {
    const amountToPay = bookingType === 'event' && selectedEventBooking
      ? selectedEventBooking.ticket_price
      : totalPrice;

    return (
      <div className="bg-[#fafafa] h-screen flex items-center justify-center p-4 overflow-hidden">
        <div className="w-[360px] h-full max-h-[800px] bg-[#f8f7f3] relative overflow-hidden flex flex-col shadow-2xl rounded-[32px] border border-gray-100">
          <PaymentScreen
            amount={amountToPay}
            onBack={() => {
              if (bookingType === 'event') {
                setCurrentView('teamup');
              } else {
                setCurrentView('booking');
              }
            }}
            onSuccess={handlePaymentSuccess}
            bookingDetails={bookingType === 'event' && selectedEventBooking ? {
              scheduled_time: new Date(selectedEventBooking.start_time),
              duration_min: 60,
              service_snapshot: { name: selectedEventBooking.title, type: 'Event' },
              user_notes: ''
            } : {
              scheduled_time: selectedDate, // Note: selectedDate is Date object
              duration_min: totalMinutes,
              service_snapshot: selectedServiceObjects,
              user_notes: description
            }}
          />
        </div>
        <Toaster position="top-center" />
      </div>
    );
  }

  if (currentView === 'booking-success') {
    const lastBooking = bookings.find(b => b.id === lastBookingId) || bookings[0];

    const successData = {
      mentorName: lastBooking?.subtitle?.replace('Hosted by ', '') || 'Host',
      language: language,
      services: bookingType === 'event' && selectedEventBooking
        ? [selectedEventBooking.title]
        : (selectedServiceObjects.length > 0 ? selectedServiceObjects.map(s => s.name) : ['General Mentoring']),
      sessionType: bookingType === 'event' && selectedEventBooking ? (selectedEventBooking.category || 'Event') : (sessionType === 'long' ? 'Long-term' : 'Single Session'),
      dateTime: bookingType === 'event' && selectedEventBooking ? new Date(selectedEventBooking.start_time) : selectedDate,
      duration: bookingType === 'event' && selectedEventBooking ? selectedEventBooking.host_name : (lastBooking?.duration || '1 Hr'),
      transactionId: lastBookingId || Math.random().toString(36).substr(2, 9).toUpperCase(),
      isEvent: bookingType === 'event',
      bookedAt: new Date()
    };

    return (
      <div className="bg-[#fafafa] h-screen flex items-center justify-center p-4 overflow-hidden">
        <div className="w-[360px] h-full max-h-[800px] bg-[#f8f7f3] relative overflow-hidden flex flex-col shadow-2xl rounded-[32px] border border-gray-100">
          <BookingSuccess
            onClose={() => {
              setBookingsInitialTab(bookingType === 'event' ? 'Events' : 'Sessions');
              setCurrentView('bookings');
            }}
            onGoToGuidelines={() => {
              setBookingsInitialTab(bookingType === 'event' ? 'Events' : 'Sessions');
              setCurrentView('bookings');
            }}
            bookingData={successData}
          />
        </div>
        <Toaster position="top-center" />
      </div>
    );
  }

  if (currentView === 'reschedule-screen') {
    return (
      <div className="bg-[#fafafa] h-screen flex items-center justify-center p-4 overflow-hidden">
        <div className="w-[360px] h-full max-h-[800px] bg-[#f8f7f3] relative overflow-hidden flex flex-col shadow-2xl rounded-[32px] border border-gray-100">
          <RescheduleScreen
            booking={currentRescheduleBooking}
            bookings={bookings}
            onBack={() => setCurrentView('bookings')}
            onNavigate={handleNavigate}
            hasUnreadChats={hasUnreadChats}
            unreadNotificationsCount={unreadNotificationsCount}
            onConfirm={(date, time) => {
              // Properly update bookings array to modify the date/time natively
              setBookings(prev => {
                const updated = prev.map(b => b.id === currentRescheduleBooking?.id ? { ...b, date, time, isNew: true } : b);

                // Keep the bookings array sorted by date (parsed from dd/MM/yyyy)
                return updated.sort((a, b) => {
                  const parseDate = (str: string) => {
                    const parts = str.split('/');
                    if (parts.length === 3) return new Date(+parts[2], +parts[1] - 1, +parts[0]).getTime();
                    return 0; // fallback if string is unstructured
                  };
                  return parseDate(a.date) - parseDate(b.date);
                });
              });

              // Remove the "NEW" badge strictly for this booking after 2 minutes
              setTimeout(() => {
                setBookings(current => current.map(b => b.id === currentRescheduleBooking?.id ? { ...b, isNew: false } : b));
              }, 120000);

              // Construct a realistic notification to inform user on timeline
              const sessionTitle = currentRescheduleBooking?.title || 'your session';
              const newNotification: Notification = {
                id: `reschedule-${currentRescheduleBooking?.id}-${Date.now()}`,
                recipient_id: 'me',
                title: "Session Rescheduled Successfully",
                message: `Your appointment for ${sessionTitle} has been legally moved to ${date} at ${time}. Check Bookings for details.`,
                is_read: false,
                type: "system",
                created_at: new Date().toISOString()
              };
              setNotifications(prev => [newNotification, ...prev]);

              toast.success(`Booking properly rescheduled to ${date}`);
              setCurrentView('bookings');
            }}
          />
        </div>
        <AnimatePresence>
          {isRescheduling && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-[999] flex flex-col items-center justify-center bg-black/20 backdrop-blur-[4px]"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <Toaster position="top-center" />
      </div>
    );
  }

  return (
    <div className="bg-[#fafafa] h-screen flex items-center justify-center p-4 overflow-hidden relative">
      <div className="w-[360px] h-full max-h-[800px] bg-[#f8f7f3] relative overflow-hidden flex flex-col shadow-2xl rounded-[32px] border border-gray-100">
        <HomeScreen
          onSearch={(query) => {
            setSearchQuery(query);
            setCurrentView('search-results');
          }}
          onSelectMentor={(mentor) => {
            const m = mentor as Mentor;
            setSelectedMentor(m);
            setRecentMentors(prev => {
              const filtered = prev.filter(rm => rm.id !== m.id);
              return [m, ...filtered].slice(0, 10);
            });
            setSelectedServices(m.services.length > 0 ? [m.services[0].id] : []);
            setMentorProfileInitialTab('Overview');
            setPreviousView('home');
            setCurrentView('profile');
          }}
          onNavigate={handleNavigate}
          recentMentors={recentMentors}
          favouriteMentors={favouriteMentors}
          hasUnreadChats={hasUnreadChats}
          unreadNotificationsCount={unreadNotificationsCount}
        />
      </div>

      <AnimatePresence>
        {isRescheduling && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[999] flex flex-col items-center justify-center bg-black/20 backdrop-blur-[4px]"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Toaster position="top-center" />
    </div>
  );
}