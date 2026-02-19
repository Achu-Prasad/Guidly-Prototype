import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CalendarCheck, X, ArrowRight } from "@phosphor-icons/react";

interface AlreadyBookedModalProps {
    isOpen: boolean;
    onClose: () => void;
    onGoToBookings: () => void;
}

export const AlreadyBookedModal = ({ isOpen, onClose, onGoToBookings }: AlreadyBookedModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="absolute inset-0 z-[110] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#0f1615]/40 backdrop-blur-[4px]"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-[320px] bg-white rounded-[24px] shadow-[0px_20px_50px_rgba(0,0,0,0.15)] overflow-hidden p-6 flex flex-col items-center text-center border border-gray-100"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-[#3f4544] opacity-40 hover:opacity-100 transition-opacity"
                        >
                            <X size={20} />
                        </button>

                        <div className="w-16 h-16 bg-[#f1f5f4] rounded-full flex items-center justify-center mb-6 mt-2">
                            <CalendarCheck size={32} weight="duotone" className="text-[#2d5a4c]" />
                        </div>

                        <h3 className="font-['Bricolage_Grotesque:Semi_Bold',sans-serif] text-[20px] text-[#272d2c] mb-2 leading-tight">
                            Already Booked!
                        </h3>

                        <p className="font-['Figtree:Regular',sans-serif] text-[14px] text-[#3f4544] opacity-70 mb-8 leading-relaxed">
                            You have already secured your spot for this session. Check your bookings for details.
                        </p>

                        <button
                            onClick={onGoToBookings}
                            className="w-full bg-[#2d5a4c] text-white h-[52px] rounded-[12px] flex items-center justify-center gap-2 font-['Figtree:Semi_Bold',sans-serif] text-[15px] hover:bg-[#23473c] transition-colors shadow-lg shadow-[#2d5a4c]/10 group"
                        >
                            <span>Go to Bookings</span>
                            <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
