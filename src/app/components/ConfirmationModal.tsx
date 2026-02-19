import React from "react";
import { motion } from "motion/react";
import {
  CaretLeft as ChevronLeft,
  Calendar,
  Clock,
  Globe,
  Stack as Layers,
  CheckCircle,
  Wallet
} from "@phosphor-icons/react";
import { format } from "date-fns";

interface Service {
  id: string;
  name: string;
  duration: number;
  price: string;
  cost: number;
}

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  data: {
    title?: string;
    mentorName?: string;
    mentorImage?: string;
    language: string;
    services: Service[];
    sessionType: 'single' | 'long' | 'event';
    date: Date;
    time: string | null;
    totalDuration: number;
    totalPrice: number;
  };
}

export const ConfirmationModal = ({ isOpen, onClose, onConfirm, data }: ConfirmationModalProps) => {
  if (!isOpen) return null;

  const isEvent = data.sessionType === 'event';

  return (
    <div className="absolute inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop with a more sophisticated blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#0f1615]/60 backdrop-blur-[8px]"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 30 }}
        className="relative w-full max-w-[340px] bg-white rounded-[24px] shadow-[0px_20px_50px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col border border-gray-100"
      >
        {/* Header Section */}
        <div className="pt-8 px-6 pb-4 text-center">
          {data.mentorImage ? (
            <div className="relative inline-block mb-4">
              <img src={data.mentorImage} alt={data.mentorName} className="w-16 h-16 rounded-full object-cover border-2 border-[#2d5a4c]/10" />
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                <CheckCircle className="text-[#2d5a4c]" size={16} />
              </div>
            </div>
          ) : (
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f0f4f3] mb-4">
              <CheckCircle className="text-[#2d5a4c]" size={24} />
            </div>
          )}
          <h2 className="font-['Bricolage_Grotesque:Semi_Bold',sans-serif] text-[20px] text-[#272d2c] leading-tight mb-1">
            {isEvent ? (data.title || 'Event Booking') : (data.mentorName ? `Booking with ${data.mentorName}` : 'Review your booking')}
          </h2>
          <p className="font-['Figtree:Regular',sans-serif] text-[14px] text-[#3f4544] opacity-60">
            Check your details before payment
          </p>
        </div>

        {/* Details Card */}
        <div className="px-6 space-y-5 flex-1 overflow-y-auto max-h-[60vh] py-2 no-scrollbar">

          {/* Date & Time Highlight */}
          <div className="bg-[#f8f9f8] rounded-[16px] p-4 flex items-center justify-between border border-[#eef2f1]">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <Calendar size={18} className="text-[#2d5a4c]" />
              </div>
              <div>
                <p className="font-['Figtree:Semi_Bold',sans-serif] text-[14px] text-[#272d2c]">
                  {format(data.date, 'EEEE, d MMM')}
                </p>
                <div className="flex items-center gap-1 text-[#3f4544] opacity-60 text-[12px]">
                  <Clock size={12} />
                  <span>{data.time || 'Not selected'}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="font-['Figtree:Semi_Bold',sans-serif] text-[14px] text-[#2d5a4c]">
                {isEvent ? '1 Spot' : (() => {
                  const mins = data.totalDuration;
                  if (mins < 60) return `${mins}m`;
                  const h = Math.floor(mins / 60);
                  const m = mins % 60;
                  if (m === 0) return `${h} hour${h > 1 ? 's' : ''}`;
                  return `${h} hour${h > 1 ? 's' : ''} : ${m} minutes`;
                })()}
              </p>
              <p className="text-[10px] text-[#3f4544] opacity-50 uppercase tracking-wider font-medium">{isEvent ? 'Booking' : 'Duration'}</p>
            </div>
          </div>

          {!isEvent && (
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white border border-gray-100 p-3 rounded-[12px] shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Globe size={14} className="text-[#3f4544] opacity-40" />
                  <p className="text-[11px] font-medium text-[#3f4544] opacity-40 uppercase tracking-tight">Language</p>
                </div>
                <p className="font-['Figtree:Medium',sans-serif] text-[13px] text-[#272d2c]">{data.language}</p>
              </div>
              <div className="bg-white border border-gray-100 p-3 rounded-[12px] shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Layers size={14} className="text-[#3f4544] opacity-40" />
                  <p className="text-[11px] font-medium text-[#3f4544] opacity-40 uppercase tracking-tight">Session</p>
                </div>
                <p className="font-['Figtree:Medium',sans-serif] text-[13px] text-[#272d2c]">
                  {data.sessionType === 'single' ? 'One-time' : 'Long-term'}
                </p>
              </div>
            </div>
          )}

          {/* Services/Event Info */}
          <div className="space-y-3 pt-2">
            <p className="text-[11px] font-bold text-[#3f4544] opacity-30 uppercase tracking-[0.1em] px-1">
              {isEvent ? 'Event Details' : 'Selected Services'}
            </p>
            <div className="space-y-2">
              {isEvent ? (
                <div className="flex justify-between items-center group">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2d5a4c]/20" />
                    <p className="font-['Figtree:Regular',sans-serif] text-[14px] text-[#3f4544]">Host: {data.mentorName}</p>
                  </div>
                </div>
              ) : (
                data.services.map((s) => (
                  <div key={s.id} className="flex justify-between items-center group">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2d5a4c]/20 group-hover:bg-[#2d5a4c] transition-colors" />
                      <p className="font-['Figtree:Regular',sans-serif] text-[14px] text-[#3f4544]">{s.name}</p>
                    </div>
                    <p className={`font-['Figtree:Medium',sans-serif] text-[14px] ${s.cost > 0 ? 'text-[#272d2c]' : 'text-[#2d5a4c] font-semibold'}`}>
                      {s.price === 'Free' ? 'Free' : `$${s.cost}`}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Footer with Payment Summary */}
        <div className="mt-auto p-6 pt-2 bg-gradient-to-t from-gray-50/50 to-white">
          <div className="flex items-center justify-between mb-6 px-1 pt-4 border-t border-dashed border-gray-200">
            <div className="flex items-center gap-2 text-[#3f4544]">
              <Wallet size={16} className="opacity-40" />
              <span className="text-[14px] font-medium opacity-60">Total Amount</span>
            </div>
            <p className="font-['Bricolage_Grotesque:Bold',sans-serif] text-[24px] text-[#2d5a4c]">
              ${data.totalPrice}
            </p>
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onConfirm}
            className="w-full h-[56px] bg-[#2d5a4c] rounded-[16px] flex items-center justify-center text-white font-['Figtree:Semi_Bold',sans-serif] font-semibold text-[16px] shadow-[0px_10px_20px_rgba(45,90,76,0.25)] hover:shadow-[0px_15px_30px_rgba(45,90,76,0.3)] transition-all"
          >
            Confirm & Pay
          </motion.button>

          <button
            onClick={onClose}
            className="w-full mt-4 py-2 font-['Figtree:Medium',sans-serif] text-[14px] text-[#3f4544] opacity-50 hover:opacity-100 transition-opacity"
          >
            Go back to editing
          </button>
        </div>
      </motion.div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
