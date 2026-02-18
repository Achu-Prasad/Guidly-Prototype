import React from "react";
import { motion } from "motion/react";
import { X, Check } from "@phosphor-icons/react";
import { format } from "date-fns";

interface BookingSuccessProps {
  onClose: () => void;
  onGoToGuidelines: () => void;
  bookingData: {
    mentorName: string;
    language: string;
    services: string[];
    sessionType: string;
    dateTime: Date;
    duration: string;
    transactionId: string;
  };
}

export const BookingSuccess = ({ onClose, onGoToGuidelines, bookingData }: BookingSuccessProps) => {
  return (
    <div className="bg-[#f8f7f3] h-full flex flex-col relative overflow-hidden">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-12 right-6 p-2 hover:bg-black/5 rounded-full transition-colors z-50"
      >
        <X size={24} className="text-[#0F1615]" />
      </button>

      {/* Success Icon Section */}
      <div className="flex-1 flex flex-col items-center pt-12 px-6 overflow-y-auto no-scrollbar pb-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative mb-8"
        >
          <div className="w-[124px] h-[124px] bg-[#00C951] rounded-full flex items-center justify-center shadow-[0px_10px_30px_rgba(0,201,81,0.3)]">
            <motion.div
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Check size={64} className="text-white" weight="bold" />
            </motion.div>
          </div>
          {/* Badge decorative element */}
          <div className="absolute -inset-2 border-4 border-[#00C951]/20 rounded-full animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-['Bricolage_Grotesque'] font-medium text-[20px] text-[#272d2c] mb-2"
        >
          Session Booking Successful !
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center space-y-1 mb-10"
        >
          <p className="font-['Figtree'] text-[14px] text-[#3f4544] opacity-60">
            {format(new Date(), "dd MMM yyyy, h:mm a")}
          </p>
          <p className="font-['Figtree'] text-[12px] text-[#3f4544] opacity-40 uppercase tracking-wider">
            TXN-{bookingData.transactionId}
          </p>
        </motion.div>

        {/* Ticket/Card Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full bg-white rounded-[24px] shadow-[0px_8px_32px_rgba(0,0,0,0.04)] overflow-hidden border border-white"
        >
          <div className="p-6 text-center border-b border-dashed border-gray-200 relative">
            <h2 className="font-['Figtree'] font-medium text-[16px] text-[#3f4544] opacity-80">Session Details</h2>
            {/* Cutout decorations */}
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#f8f7f3] rounded-full" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#f8f7f3] rounded-full" />
          </div>

          <div className="px-6 pt-6 pb-10 space-y-4">
            <DetailRow label="Language" value={bookingData.language} />
            <div className="flex justify-between items-start">
              <span className="font-['Figtree'] text-[14px] text-[#3f4544] opacity-40">Services Selected</span>
              <div className="text-right flex flex-col items-end gap-1">
                {bookingData.services.map((s, i) => (
                  <span key={i} className="font-['Figtree'] text-[14px] text-[#3f4544] opacity-90 leading-tight">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <DetailRow label="Session Type" value={bookingData.sessionType} />
            <DetailRow label="Date & Time" value={format(bookingData.dateTime, "dd MMM yyyy | h:mm a")} />
            <DetailRow label="Session duration" value={bookingData.duration} />

            <div className="pt-6 border-t border-gray-100 mt-6">
              <p className="font-['Figtree'] font-medium text-[15px] text-[#272d2c] text-center leading-relaxed">
                Check Guidelines before joining the session
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Action */}
      <div className="p-6 pb-12">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={onGoToGuidelines}
          className="w-full h-[56px] bg-[#2d5a4c] rounded-[12px] text-white font-['Figtree'] font-medium text-[16px] shadow-lg shadow-[#2d5a4c]/20"
        >
          Go to Guidelines
        </motion.button>
      </div>
    </div>
  );
};

const DetailRow = ({ label, value }: { label: string, value: string }) => (
  <div className="flex justify-between items-center">
    <span className="font-['Figtree'] text-[14px] text-[#3f4544] opacity-40">{label}</span>
    <span className="font-['Figtree'] text-[14px] text-[#3f4544] opacity-90">{value}</span>
  </div>
);
