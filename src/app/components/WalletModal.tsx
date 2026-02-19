import React, { useState } from "react";
import { motion } from "motion/react";
import {
  X,
  DeviceMobile as Smartphone,
  Bank as Building2,
  Plus,
  ArrowRight,
  ShieldCheck
} from "@phosphor-icons/react";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddMoney: (amount: number) => void;
  currentBalance: number;
}

export const WalletModal = ({ isOpen, onClose, onAddMoney, currentBalance }: WalletModalProps) => {
  const [amount, setAmount] = useState("");
  const [step, setStep] = useState<'amount' | 'method'>('amount');

  const handleAdd = () => {
    const val = parseFloat(amount);
    if (!isNaN(val) && val > 0) {
      onAddMoney(val);
      setAmount("");
      setStep('amount');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-[110] flex items-end justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-[400px] bg-white rounded-t-[32px] shadow-2xl overflow-hidden p-6 pb-12"
      >
        <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6" />

        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="font-['Bricolage_Grotesque:Semi_Bold',sans-serif] text-[20px] text-[#272d2c]">Add Money</h3>
            <p className="text-[13px] text-[#3f4544] opacity-50">Current balance: ${currentBalance.toFixed(2)}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={20} className="text-[#3f4544]" />
          </button>
        </div>

        {step === 'amount' ? (
          <div className="space-y-6">
            <div className="relative">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[32px] font-bold text-[#2d5a4c]">$</span>
              <input
                autoFocus
                value={amount}
                onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ''))}
                placeholder="0.00"
                className="w-full h-[80px] bg-[#f8f9f8] rounded-[20px] pl-12 pr-6 text-[32px] font-bold text-[#272d2c] outline-none border-2 border-transparent focus:border-[#2d5a4c]/20 transition-all placeholder:opacity-20"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[50, 100, 200].map((val) => (
                <button
                  key={val}
                  onClick={() => setAmount(val.toString())}
                  className="h-[44px] rounded-full border border-gray-100 font-medium text-[14px] text-[#3f4544] hover:bg-[#2d5a4c] hover:text-white transition-colors"
                >
                  +${val}
                </button>
              ))}
            </div>

            <button
              onClick={() => amount && setStep('method')}
              disabled={!amount}
              className="w-full h-[56px] bg-[#2d5a4c] text-white rounded-[16px] font-['Figtree:Semi_Bold',sans-serif] font-semibold shadow-lg disabled:opacity-50 transition-all flex items-center justify-center gap-2"
            >
              Continue to Payment
              <ArrowRight size={18} />
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-[12px] font-bold text-[#3f4544] opacity-30 uppercase tracking-widest px-1">Select Method</p>

            <button onClick={handleAdd} className="w-full group">
              <div className="flex items-center gap-4 p-4 rounded-[16px] border border-gray-100 hover:border-[#2d5a4c]/30 hover:bg-[#f0f4f3] transition-all text-left">
                <div className="w-12 h-12 rounded-full bg-[#f0f4f3] flex items-center justify-center group-hover:bg-white transition-colors">
                  <Smartphone size={22} className="text-[#2d5a4c]" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#272d2c]">UPI Transfer</p>
                  <p className="text-[12px] text-[#3f4544] opacity-50">Google Pay, PhonePe, etc.</p>
                </div>
                <ArrowRight size={18} className="text-[#3f4544] opacity-20" />
              </div>
            </button>

            <button onClick={handleAdd} className="w-full group">
              <div className="flex items-center gap-4 p-4 rounded-[16px] border border-gray-100 hover:border-[#2d5a4c]/30 hover:bg-[#f0f4f3] transition-all text-left">
                <div className="w-12 h-12 rounded-full bg-[#f0f4f3] flex items-center justify-center group-hover:bg-white transition-colors">
                  <Building2 size={22} className="text-[#2d5a4c]" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#272d2c]">Bank Transfer</p>
                  <p className="text-[12px] text-[#3f4544] opacity-50">Net Banking, IMPS</p>
                </div>
                <ArrowRight size={18} className="text-[#3f4544] opacity-20" />
              </div>
            </button>

            <div className="pt-4 flex items-center justify-center gap-2 text-[#2d5a4c] opacity-60">
              <ShieldCheck size={16} />
              <span className="text-[12px] font-medium">100% Secure Transaction</span>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
