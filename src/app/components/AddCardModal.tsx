import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  CreditCard,
  User,
  Calendar,
  Lock,
  Plus
} from "@phosphor-icons/react";

interface AddCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (card: { last4: string; holder: string; expiry: string; type: 'mastercard' | 'visa' | 'amex' }) => void;
}

export const AddCardModal = ({ isOpen, onClose, onAdd }: AddCardModalProps) => {
  const [number, setNumber] = useState("");
  const [holder, setHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!number || !holder || !expiry) return;

    // Determine type based on first digit (just mock logic)
    const type = number.startsWith('4') ? 'visa' : number.startsWith('3') ? 'amex' : 'mastercard';

    onAdd({
      last4: number.slice(-4) || "0000",
      holder: holder || "New Card",
      expiry: expiry || "12/30",
      type
    });

    setNumber("");
    setHolder("");
    setExpiry("");
    setCvv("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-[110] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-[340px] bg-white rounded-[24px] shadow-2xl overflow-hidden p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-['Bricolage_Grotesque:Semi_Bold',sans-serif] text-[18px] text-[#272d2c]">Add New Card</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={20} className="text-[#3f4544]" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[12px] font-medium text-[#3f4544] opacity-60">Card Number</label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3f4544] opacity-30" size={16} />
              <input
                value={number}
                onChange={(e) => setNumber(e.target.value.replace(/\D/g, '').slice(0, 16))}
                placeholder="0000 0000 0000 0000"
                className="w-full h-[48px] bg-[#f8f9f8] border border-gray-100 rounded-[12px] pl-10 pr-4 outline-none focus:border-[#2d5a4c] transition-colors font-['Figtree:Regular',sans-serif]"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[12px] font-medium text-[#3f4544] opacity-60">Card Holder Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3f4544] opacity-30" size={16} />
              <input
                value={holder}
                onChange={(e) => setHolder(e.target.value)}
                placeholder="John Doe"
                className="w-full h-[48px] bg-[#f8f9f8] border border-gray-100 rounded-[12px] pl-10 pr-4 outline-none focus:border-[#2d5a4c] transition-colors font-['Figtree:Regular',sans-serif]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[12px] font-medium text-[#3f4544] opacity-60">Expiry Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3f4544] opacity-30" size={16} />
                <input
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  placeholder="MM/YY"
                  className="w-full h-[48px] bg-[#f8f9f8] border border-gray-100 rounded-[12px] pl-10 pr-4 outline-none focus:border-[#2d5a4c] transition-colors font-['Figtree:Regular',sans-serif]"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[12px] font-medium text-[#3f4544] opacity-60">CVV</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3f4544] opacity-30" size={16} />
                <input
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                  type="password"
                  placeholder="123"
                  className="w-full h-[48px] bg-[#f8f9f8] border border-gray-100 rounded-[12px] pl-10 pr-4 outline-none focus:border-[#2d5a4c] transition-colors font-['Figtree:Regular',sans-serif]"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-[52px] bg-[#2d5a4c] text-white rounded-[16px] font-['Figtree:Semi_Bold',sans-serif] font-semibold mt-4 shadow-lg active:shadow-sm transition-all"
          >
            Add Card
          </button>
        </form>
      </motion.div>
    </div>
  );
};
