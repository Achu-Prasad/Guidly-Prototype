import React from 'react';
import {
    House as Home,
    UsersThree as Users,
    BookmarkSimple as Bookmark,
    ChatCircle as MessageCircle,
    User,
} from '@phosphor-icons/react';

export type ViewType = 'home' | 'teamup' | 'bookings' | 'chat' | 'account' | 'results' | 'chat-detail' | 'booking-detail' | 'mentor-profile';

interface BottomNavProps {
    activeView: ViewType;
    onNavigate: (view: ViewType) => void;
    hasUnreadChats?: boolean;
}

const NavButton = ({
    icon,
    label,
    active = false,
    hasNotification = false,
    onClick
}: {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    hasNotification?: boolean;
    onClick: () => void
}) => (
    <button
        onClick={onClick}
        className={`flex flex-col items-center pt-[7px] gap-[4px] transition-colors px-[8px] min-w-[55px] h-[56px] ${active ? 'text-[#2D5A4C]' : 'text-[#3f4544] opacity-80'
            }`}
    >
        <div className="relative transition-transform h-[24px] flex items-center justify-center">
            {React.cloneElement(icon as React.ReactElement<any>, {
                className: active ? 'text-[#2D5A4C]' : 'text-[#3f4544]',
                weight: active ? 'fill' : 'regular',
            })}
            {hasNotification && (
                <span className="absolute -top-[2px] -right-[2px] w-[8px] h-[8px] bg-[#00973d] rounded-full border-[1.5px] border-white" />
            )}
        </div>
        <span className={`text-[12px] font-['Figtree'] leading-[14px] ${active ? 'font-medium' : 'font-normal text-[#3f4544]'}`}>
            {label}
        </span>
    </button>
);

export const BottomNav = ({ activeView, onNavigate, hasUnreadChats = false }: BottomNavProps) => {
    return (
        <nav className="absolute bottom-0 left-0 w-full bg-white flex justify-around items-center px-[16px] py-[8px] shadow-[0px_-8px_20.6px_-6px_rgba(0,0,0,0.1)] z-50">
            <NavButton
                icon={<Home size={24} />}
                label="Home"
                active={activeView === 'home' || activeView === 'results'}
                onClick={() => onNavigate('home')}
            />
            <NavButton
                icon={<Users size={24} />}
                label="Team Up"
                active={activeView === 'teamup'}
                onClick={() => onNavigate('teamup')}
            />
            <NavButton
                icon={<Bookmark size={24} />}
                label="Bookings"
                active={activeView === 'bookings'}
                onClick={() => onNavigate('bookings')}
            />
            <NavButton
                icon={<MessageCircle size={24} />}
                label="Chat"
                active={activeView === 'chat'}
                hasNotification={hasUnreadChats}
                onClick={() => onNavigate('chat')}
            />
            <NavButton
                icon={<User size={24} />}
                label="Account"
                active={activeView === 'account'}
                onClick={() => onNavigate('account')}
            />
        </nav>
    );
};
