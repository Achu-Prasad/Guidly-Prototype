import React, { useState, useRef, useEffect } from 'react';
import {
    CaretLeft,
    DotsThreeVertical,
    PaperPlaneTilt,
    Smiley,
    Plus,
    UsersThree,
    ChatCircle as MessageCircle
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from 'motion/react';
import { toast } from "sonner";
import { ImageWithFallback } from './figma/ImageWithFallback';

import { Message } from '../types/chat';

interface ChatDetailProps {
    user: {
        id: string | number;
        name: string;
        image: string;
        isGroup?: boolean;
    };
    onBack: () => void;
    onMessageSent: (userId: string | number, message: string) => void;
    initialMessages: Message[];
}

export const ChatDetail = ({ user, onBack, onMessageSent, initialMessages }: ChatDetailProps) => {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [newMessage, setNewMessage] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMessages(initialMessages);
    }, [initialMessages]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = () => {
        if (!newMessage.trim()) return;
        onMessageSent(user.id, newMessage);
        setNewMessage('');
    };

    return (
        <div className="flex flex-col h-full bg-[#f8f7f3] relative">
            {/* Header */}
            <header className="bg-white px-4 pt-12 pb-4 flex items-center justify-between shadow-sm z-10">
                <div className="flex items-center gap-3">
                    <button
                        onClick={onBack}
                        className="w-10 h-10 flex items-center justify-center rounded-[8px] hover:bg-gray-100 transition-colors"
                    >
                        <CaretLeft size={24} weight="bold" />
                    </button>
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100 relative">
                            <ImageWithFallback src={user.image} alt={user.name} className="w-full h-full object-cover" />
                            {user.isGroup && (
                                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                                    <UsersThree size={14} className="text-white" />
                                </div>
                            )}
                        </div>
                        <div>
                            <h2 className="text-[16px] font-['Figtree'] font-semibold text-[#272d2c] leading-tight flex items-center gap-1.5">
                                {user.name}
                                {user.isGroup && <span className="bg-[#edebe1] text-[#2d5a4c] text-[10px] px-1.5 py-0.5 rounded-full font-medium">Group</span>}
                            </h2>
                            <span className="text-[12px] text-[#3f4544] opacity-60 font-medium font-['Figtree']">
                                {user.isGroup ? "12 Members active" : "Online"}
                            </span>
                        </div>
                    </div>
                </div>
                <button className="w-10 h-10 flex items-center justify-center rounded-[8px] hover:bg-gray-100 transition-colors">
                    <DotsThreeVertical size={24} weight="bold" />
                </button>
            </header>

            {/* Messages */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto px-4 py-6 space-y-6 no-scrollbar bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed"
            >
                {messages.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-6">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
                                <ImageWithFallback src={user.image} alt={user.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-lg z-20">
                                <MessageCircle size={20} weight="fill" className="text-[#2d5a4c]" />
                            </div>
                            <div className="absolute inset-0 bg-[#2d5a4c]/10 rounded-full blur-2xl animate-pulse" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-[18px] font-bold text-[#272d2c] font-['Figtree'] leading-tight">
                                Start a conversation with {user.name}
                            </h3>
                            <p className="text-[14px] text-[#3f4544] opacity-50 font-medium font-['Figtree'] leading-relaxed max-w-[220px] mx-auto">
                                Say hi! {user.name} is online and ready to help you with your goals.
                            </p>
                        </div>
                        <div className="pt-4 flex flex-wrap justify-center gap-2">
                            {['Hi there!', 'I need help 🤝', 'Can we talk?'].map((suggestion) => (
                                <button
                                    key={suggestion}
                                    onClick={() => {
                                        setNewMessage(suggestion);
                                    }}
                                    className="px-4 py-2 bg-white border border-[#2d5a4c]/10 rounded-full text-[13px] text-[#2d5a4c] font-semibold shadow-sm hover:bg-[#f1f5f4] transition-colors active:scale-95"
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="flex justify-center mb-6">
                            <span className="bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full text-[12px] text-gray-500 font-medium font-['Figtree'] border border-gray-100">
                                Today
                            </span>
                        </div>

                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`flex gap-3 max-w-[85%] ${msg.sender === 'me' ? 'flex-row-reverse' : ''}`}>
                                    {msg.sender === 'other' && (
                                        <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 mt-auto border border-white shadow-sm">
                                            <ImageWithFallback
                                                src={msg.senderImage || user.image}
                                                alt={msg.senderName || user.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="flex flex-col gap-1.5">
                                        {user.isGroup && msg.sender === 'other' && (
                                            <span className="text-[11px] font-semibold text-[#2d5a4c] ml-1 opacity-90 font-['Figtree']">
                                                {msg.senderName}
                                            </span>
                                        )}
                                        <div
                                            className={`px-4 py-2.5 rounded-[20px] text-[14px] font-['Figtree'] leading-relaxed shadow-sm ${msg.sender === 'me'
                                                ? 'bg-[#2d5a4c] text-white rounded-br-none'
                                                : 'bg-white text-[#3f4544] rounded-bl-none border border-gray-100'
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                        <div className={`flex items-center gap-1.5 px-1 ${msg.sender === 'me' ? 'justify-end' : ''}`}>
                                            <span className="text-[9px] text-gray-400 font-medium font-['Figtree']">
                                                {msg.time}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </>
                )}
            </div>

            {/* Input Area */}
            <div className="bg-white p-4 pb-10 shadow-[0px_-4px_20px_rgba(0,0,0,0.03)] rounded-t-[24px]">
                <div className="flex items-center bg-[#f3f3f3] rounded-full pl-4 pr-1.5 py-1.5 border border-gray-100">
                    <button className="w-8 h-8 flex items-center justify-center text-[#9ca3af] hover:text-[#2d5a4c] transition-colors">
                        <Plus size={22} weight="bold" />
                    </button>
                    <input
                        type="text"
                        placeholder="Message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        className="flex-1 bg-transparent border-none outline-none text-[16px] font-['Figtree'] text-[#3f4544] h-10 px-2 placeholder-[#9ca3af]"
                    />
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => {
                                const emojis = ['😊', '🤝', '🚀', '⭐', '🔥', '💡'];
                                const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                                setNewMessage(prev => prev + randomEmoji);
                                toast.success("Emoji added!");
                            }}
                            className="w-10 h-10 flex items-center justify-center text-[#9ca3af] hover:text-[#2d5a4c] transition-colors"
                        >
                            <Smiley size={24} />
                        </button>
                        <button
                            onClick={handleSendMessage}
                            disabled={!newMessage.trim()}
                            className={`w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all shadow-sm ${newMessage.trim()
                                ? 'bg-[#214a3e] text-white active:scale-95'
                                : 'bg-gray-200 text-gray-400'
                                }`}
                        >
                            <PaperPlaneTilt size={20} weight="fill" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
