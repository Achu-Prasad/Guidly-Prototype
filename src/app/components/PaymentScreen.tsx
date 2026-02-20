import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CaretLeft,
  Plus,
  Wallet,
  DeviceMobile as Smartphone,
  Bank as Building2,
  CalendarCheck as CalendarClock,
  Lock,
  ArrowRight,
  CheckCircle,
  CaretRight as ChevronRight,
  CreditCard,
  Money,
  X,
  CircleNotch as Loader2
} from "@phosphor-icons/react";
import { toast } from "sonner";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";

import { AddCardModal } from "./AddCardModal";
import { WalletModal } from "./WalletModal";
import gpayLogo from "../../assets/payment icons/gpay.png";
import phonepeLogo from "../../assets/payment icons/phonepe-icon.webp";
import paytmLogo from "../../assets/payment icons/paytm_icon.png";
import amazonpayLogo from "../../assets/payment icons/amazone pay.png";

const UPILogos: Record<string, string> = {
  'Google Pay': gpayLogo,
  'PhonePe': phonepeLogo,
  'Paytm': paytmLogo,
  'Amazon Pay': amazonpayLogo
};

const BankLogos: Record<string, string> = {
  'HDFC Bank': 'https://companieslogo.com/img/orig/HDB-63914947.png?t=1633497371',
  'ICICI Bank': 'https://companieslogo.com/img/orig/IBN-90209669.png?t=1647425141',
  'SBI': 'https://companieslogo.com/img/orig/SBIN.NS-9da4348a.png?t=161254348a',
  'Axis Bank': 'https://companieslogo.com/img/orig/AXISBANK.NS-9c3eb875.png?t=1633497371',
  'Kotak Bank': 'https://companieslogo.com/img/orig/KOTAKBANK.NS-4e5a6796.png?t=1633497371'
};

interface Card {
  id: string;
  last4: string;
  holder: string;
  expiry: string;
  type: 'mastercard' | 'visa' | 'amex';
  color: string;
}

interface PaymentScreenProps {
  amount: number;
  onBack: () => void;
  onSuccess: (method: string, bookingId: string) => void;
  bookingDetails: {
    scheduled_time: Date;
    duration_min: number;
    service_snapshot: any;
    user_notes: string;
  };
}

export const PaymentScreen = ({ amount, onBack, onSuccess, bookingDetails }: PaymentScreenProps) => {
  const [cards, setCards] = useState<Card[]>([
    { id: '1', last4: '3259', holder: 'ACHU', expiry: '09/28', type: 'mastercard', color: 'bg-gradient-to-br from-[#2D5A4C] to-[#12241E]' },
    { id: '2', last4: '4289', holder: 'ACHU', expiry: '09/28', type: 'visa', color: 'bg-gradient-to-br from-[#254988] to-[#091222]' },
  ]);

  const [walletBalance, setWalletBalance] = useState(0);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [activeOtherMethod, setActiveOtherMethod] = useState<'upi' | 'netbanking' | 'emi' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const canPayWithWallet = walletBalance >= amount;

  const handleAddCard = (newCard: any) => {
    const colors = [
      'bg-gradient-to-br from-[#2D5A4C] to-[#12241E]',
      'bg-gradient-to-br from-[#254988] to-[#091222]',
      'bg-gradient-to-br from-[#6D28D9] to-[#2E1065]',
    ];
    const cardWithId = {
      ...newCard,
      id: Math.random().toString(),
      color: colors[cards.length % colors.length]
    };
    setCards([...cards, cardWithId]);
    toast.success("New card added!");
  };

  const handleAddMoney = (val: number) => {
    setWalletBalance(prev => prev + val);
    toast.success(`$${val} added to your Guidly Wallet!`);
  };

  const handlePay = async () => {
    if (!selectedMethod) {
      toast.error("Please select a payment method");
      return;
    }

    if (selectedMethod === 'wallet' && !canPayWithWallet) {
      toast.error("Insufficient wallet balance. Please add money.");
      return;
    }

    setIsProcessing(true);

    try {
      // Add artificial delay for better UX as requested
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Create booking in backend
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-e5c0f4b0/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          ...bookingDetails,
          amount_paid: amount,
          scheduled_time: bookingDetails.scheduled_time.toISOString(),
          payment_method: selectedMethod
        })
      });

      const result = await response.json();

      if (result.success) {
        if (selectedMethod === 'wallet') {
          setWalletBalance(prev => prev - amount);
        }
        onSuccess(selectedMethod, result.booking.booking_id);
      } else {
        throw new Error(result.error || "Failed to create booking");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("An error occurred during payment. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white h-full flex flex-col relative overflow-hidden">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md px-6 pt-12 pb-6">
        <div className="relative flex items-center justify-between">
          <button onClick={onBack} className="p-2 -ml-2 hover:bg-black/5 rounded-[8px] transition-colors">
            <CaretLeft size={24} className="text-[#0F1615]" weight="bold" />
          </button>

          <h2 className="font-heading font-medium text-[18px] text-[#272d2c] absolute left-1/2 -translate-x-1/2">
            Checkout
          </h2>

          <div className="flex items-center gap-[12px]">
            <div className="bg-[#2d5a4c] rounded-[200px] size-[8px] shrink-0" />
            <div className="bg-[#2d5a4c] rounded-[200px] size-[8px] shrink-0" />
            <div className="bg-[#2d5a4c] rounded-[200px] h-[8px] w-[34px] shrink-0" />
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 space-y-8 overflow-y-auto no-scrollbar pb-10">
        {/* Your Cards Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-semibold text-[16px] text-[#272d2c]">Your Cards</h3>
            <button
              onClick={() => setIsAddCardOpen(true)}
              className="flex items-center gap-1.5 text-[#2d5a4c] font-body font-medium text-[13px] hover:opacity-70 transition-opacity"
            >
              <Plus size={16} />
              Add Card
            </button>
          </div>

          <div className="relative -mx-6">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -((cards.length * 312) - 344) }}
              className="flex gap-4 px-6 py-2 cursor-grab active:cursor-grabbing"
            >
              {cards.map((card) => (
                <motion.button
                  key={card.id}
                  onClick={() => setSelectedMethod(`card-${card.id}`)}
                  whileTap={{ scale: 0.98 }}
                  className={`relative shrink-0 w-[296px] h-[174px] rounded-[24px] p-5 flex flex-col justify-between text-white text-left transition-all duration-400 ${card.color} ${selectedMethod === `card-${card.id}` ? 'ring-4 ring-[#2d5a4c]/40 ring-offset-0 shadow-2xl z-10' : 'opacity-90 scale-[0.98]'}`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      {card.type === 'mastercard' ? (
                        <div className="flex -space-x-2">
                          <div className="w-7 h-7 rounded-full bg-[#EB001B] opacity-95" />
                          <div className="w-7 h-7 rounded-full bg-[#F79E1B] opacity-95" />
                        </div>
                      ) : (
                        <div className="italic font-bold text-[18px] tracking-tighter">VISA</div>
                      )}
                    </div>
                    {selectedMethod === `card-${card.id}` && (
                      <div className="bg-white/20 p-1.5 rounded-full backdrop-blur-md border border-white/10">
                        <CheckCircle size={14} />
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <p className="text-[18px] font-body font-medium tracking-[4px] opacity-90">
                      •••• •••• •••• {card.last4}
                    </p>

                    <div className="flex justify-between items-end">
                      <div className="space-y-0.5">
                        <p className="text-[9px] opacity-50 uppercase font-body font-medium tracking-widest">Card Holder</p>
                        <p className="text-[13px] font-body font-bold uppercase tracking-tight">{card.holder}</p>
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[9px] opacity-50 uppercase font-body font-medium tracking-widest text-right">Expires</p>
                        <p className="text-[13px] font-body font-bold text-right">{card.expiry}</p>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Other Ways to Pay */}
        <section className="space-y-4">
          <h3 className="font-heading font-semibold text-[16px] text-[#272d2c]">Other Ways to Pay</h3>

          <div className="grid grid-cols-2 gap-4">
            {/* Guidly Wallet */}
            <motion.button
              onClick={() => {
                setSelectedMethod('wallet');
                setIsWalletModalOpen(true);
              }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-[20px] text-left border-2 transition-all ${selectedMethod === 'wallet' ? 'bg-white border-[#2d5a4c] shadow-lg shadow-[#2d5a4c]/5' : 'bg-transparent border-gray-100 shadow-sm'}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-[#E6FAEE] flex items-center justify-center">
                  <Wallet size={20} className="text-[#00973D]" />
                </div>
                <div className="px-2 py-0.5 rounded-full border border-[#00c951] text-[#00973D] text-[10px] font-medium">Fast</div>
              </div>
              <p className="font-heading font-semibold text-[14px] text-[#272d2c] mb-1">Guidly Wallet</p>
              <p className={`text-[12px] font-body font-medium ${canPayWithWallet ? 'text-[#00973D]' : 'text-red-500'}`}>
                Balance: ${walletBalance.toFixed(2)}
              </p>
              {selectedMethod === 'wallet' && !canPayWithWallet && (
                <p className="text-[10px] text-red-400 mt-1">Insufficient funds</p>
              )}
            </motion.button>

            {/* UPI Apps */}
            <motion.button
              onClick={() => setActiveOtherMethod('upi')}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-[20px] text-left border-2 transition-all ${selectedMethod?.startsWith('upi') ? 'bg-white border-[#2d5a4c] shadow-lg shadow-[#2d5a4c]/5' : 'bg-transparent border-gray-100 shadow-sm'}`}
            >
              <div className="w-10 h-10 rounded-full bg-[#DBEAFE] flex items-center justify-center mb-4">
                <Smartphone size={20} className="text-[#2465EC]" />
              </div>
              <p className="font-heading font-semibold text-[14px] text-[#272d2c] mb-1">UPI Apps</p>
              <p className="text-[12px] font-body text-[#3f4544] opacity-50 truncate">Google Pay, PhonePe</p>
            </motion.button>

            {/* Net Banking */}
            <motion.button
              onClick={() => setActiveOtherMethod('netbanking')}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-[20px] text-left border-2 transition-all ${selectedMethod?.startsWith('netbanking') ? 'bg-white border-[#2d5a4c] shadow-lg shadow-[#2d5a4c]/5' : 'bg-transparent border-gray-100 shadow-sm'}`}
            >
              <div className="w-10 h-10 rounded-full bg-[#FFEDD5] flex items-center justify-center mb-4">
                <Building2 size={20} className="text-[#EA580C]" />
              </div>
              <p className="font-heading font-semibold text-[14px] text-[#272d2c] mb-1">Net Banking</p>
              <p className="text-[12px] font-body text-[#3f4544] opacity-50">Select your bank</p>
            </motion.button>

            {/* EMI */}
            <motion.button
              onClick={() => setActiveOtherMethod('emi')}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-[20px] text-left border-2 transition-all ${selectedMethod?.startsWith('emi') ? 'bg-white border-[#2d5a4c] shadow-lg shadow-[#2d5a4c]/5' : 'bg-transparent border-gray-100 shadow-sm'}`}
            >
              <div className="w-10 h-10 rounded-full bg-[#F3E8FF] flex items-center justify-center mb-4">
                <CalendarClock size={20} className="text-[#9333EA]" />
              </div>
              <p className="font-heading font-semibold text-[14px] text-[#272d2c] mb-1">EMI</p>
              <p className="text-[12px] font-body text-[#3f4544] opacity-50">Pay monthly basis</p>
            </motion.button>
          </div>
        </section>
      </div>

      {/* Sticky Bottom Actions */}
      <div className="mt-auto px-6 pt-3 pb-6 space-y-4">
        <motion.button
          whileTap={{ scale: isProcessing ? 1 : 0.98 }}
          disabled={isProcessing}
          onClick={handlePay}
          className="w-full h-[60px] bg-[#2d5a4c] rounded-[16px] text-white flex items-center justify-between px-6 shadow-xl shadow-[#2d5a4c]/20 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isProcessing ? (
            <div className="flex items-center gap-3">
              <Loader2 className="animate-spin" size={20} />
              <span className="font-body font-medium text-[16px]">Processing...</span>
            </div>
          ) : (
            <>
              <span className="font-body font-medium text-[16px]">Pay Now</span>
              <span className="font-heading font-semibold text-[20px]">${amount}</span>
            </>
          )}
        </motion.button>

        <div className="flex items-center justify-center gap-2 text-[#2d5a4c]/60">
          <Lock size={14} />
          <span className="text-[12px]">Payments are secure and encrypted</span>
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {isAddCardOpen && (
          <AddCardModal
            isOpen={isAddCardOpen}
            onClose={() => setIsAddCardOpen(false)}
            onAdd={handleAddCard}
          />
        )}

        {isWalletModalOpen && (
          <WalletModal
            isOpen={isWalletModalOpen}
            onClose={() => setIsWalletModalOpen(false)}
            onAddMoney={handleAddMoney}
            currentBalance={walletBalance}
          />
        )}

        {/* Other Method Modals (Sub-Sheets) */}
        {activeOtherMethod && (
          <div className="absolute inset-0 z-[100] flex items-end justify-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveOtherMethod(null)} className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
              className="relative w-full max-w-[400px] bg-white rounded-t-[32px] p-6 pb-12 shadow-2xl"
            >
              <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6" />

              <div className="flex items-center justify-between mb-8">
                <h3 className="font-heading font-semibold text-[16px] text-[#272d2c]">
                  {activeOtherMethod === 'upi' ? 'Select UPI App' : activeOtherMethod === 'netbanking' ? 'Select Bank' : 'EMI Options'}
                </h3>
                <button onClick={() => setActiveOtherMethod(null)} className="p-2 hover:bg-gray-100 rounded-full"><X size={20} /></button>
              </div>

              <div className="space-y-3">
                {activeOtherMethod === 'upi' && (
                  <>
                    {['Google Pay', 'PhonePe', 'Paytm', 'Amazon Pay'].map(app => (
                      <button
                        key={app}
                        onClick={() => { setSelectedMethod(`upi-${app.toLowerCase()}`); setActiveOtherMethod(null); }}
                        className="w-full flex items-center justify-between p-4 rounded-[16px] border border-gray-100 hover:bg-[#f0f4f3] transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center overflow-hidden p-2">
                            <img src={UPILogos[app]} alt={app} className="w-full h-full object-contain" />
                          </div>
                          <span className="font-semibold text-[#272d2c]">{app}</span>
                        </div>
                        <ChevronRight size={18} className="text-gray-300" />
                      </button>
                    ))}
                    <div className="pt-4 space-y-2">
                      <p className="text-[12px] font-bold text-gray-400 uppercase">Or Pay via UPI ID</p>
                      <div className="flex gap-2">
                        <input placeholder="user@upi" className="flex-1 h-[48px] bg-gray-50 rounded-[12px] px-4 outline-none border-2 border-transparent focus:border-[#2d5a4c]/20" />
                        <button onClick={() => { setSelectedMethod('upi-id'); setActiveOtherMethod(null); }} className="px-6 h-[48px] bg-[#2d5a4c] text-white rounded-[12px] font-bold">Apply</button>
                      </div>
                    </div>
                  </>
                )}

                {activeOtherMethod === 'netbanking' && (
                  <>
                    {['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Kotak Bank'].map(bank => (
                      <button
                        key={bank}
                        onClick={() => { setSelectedMethod(`nb-${bank.toLowerCase()}`); setActiveOtherMethod(null); }}
                        className="w-full flex items-center justify-between p-4 rounded-[16px] border border-gray-100 hover:bg-[#f0f4f3] transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center overflow-hidden p-2">
                            <img src={BankLogos[bank]} alt={bank} className="w-full h-full object-contain" />
                          </div>
                          <span className="font-semibold text-[#272d2c]">{bank}</span>
                        </div>
                        <ChevronRight size={18} className="text-gray-300" />
                      </button>
                    ))}
                    <button className="w-full py-3 text-[#2d5a4c] font-semibold text-[14px]">View All Banks</button>
                  </>
                )}

                {activeOtherMethod === 'emi' && (
                  <>
                    {[
                      { months: 3, rate: 'No Cost', inst: (amount / 3).toFixed(2) },
                      { months: 6, rate: '12% p.a.', inst: ((amount * 1.06) / 6).toFixed(2) },
                      { months: 12, rate: '14% p.a.', inst: ((amount * 1.14) / 12).toFixed(2) },
                    ].map(opt => (
                      <button
                        key={opt.months}
                        onClick={() => { setSelectedMethod(`emi-${opt.months}`); setActiveOtherMethod(null); }}
                        className="w-full flex items-center justify-between p-4 rounded-[16px] border border-gray-100 hover:bg-[#f0f4f3] transition-colors text-left"
                      >
                        <div>
                          <p className="font-semibold text-[#272d2c]">{opt.months} Months EMI</p>
                          <p className="text-[12px] text-gray-500">${opt.inst}/month • {opt.rate}</p>
                        </div>
                        <ChevronRight size={18} className="text-gray-300" />
                      </button>
                    ))}
                    <div className="p-3 bg-blue-50 rounded-[12px] flex gap-3 items-start mt-4">
                      <Money size={18} className="text-blue-500 mt-1 shrink-0" />
                      <p className="text-[11px] text-blue-700 leading-relaxed">EMI is applicable on Credit Cards from major banks. Interest rates are subject to change by your bank.</p>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
        {isProcessing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[200] flex flex-col items-center justify-center bg-white/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.21, 0.45, 0.32, 0.9] }}
              className="relative flex flex-col items-center"
            >
              <div className="relative w-16 h-16 flex items-center justify-center mb-6 mt-4">
                <motion.div
                  animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.3, 0.15] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-8 bg-[#2d5a4c] rounded-full blur-xl"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-[3px] border-[#2d5a4c]/20 border-t-[#2d5a4c] rounded-full z-10"
                />
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-[110] w-8 h-8 bg-white border border-gray-100 shadow-sm rounded-full flex items-center justify-center"
                >
                  <Lock size={14} className="text-[#2d5a4c]" weight="bold" />
                </motion.div>
              </div>

              <div className="text-center px-6 mt-2 relative z-10">
                <h3 className="font-['Bricolage_Grotesque'] font-medium text-[22px] text-[#272d2c] tracking-tight mb-2">
                  {bookingDetails?.service_snapshot?.type === 'Event' ? 'Securing your event ticket' : 'Confirming your session'}
                </h3>
                <p className="font-['Figtree'] text-[15px] text-[#3f4544] opacity-70">
                  Processing your payment securely...
                </p>
              </div>
            </motion.div>

            <div className="mt-12 flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  className="w-2 h-2 bg-[#2d5a4c] rounded-full"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
