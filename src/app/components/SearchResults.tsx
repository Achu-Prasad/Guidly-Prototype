import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CaretLeft,
  MagnifyingGlass as Search,
  FadersHorizontal as FilterIcon,
  Star,
  X,
  Check,
  House as Home,
  UsersThree as Users,
  BookmarkSimple as Bookmark,
  ChatCircle as MessageCircle,
  User,
  Bell,
  CurrencyDollar,
} from '@phosphor-icons/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MENTORS } from '../data/mentors';
import { Mentor } from '../types/mentor';
import { BottomNav } from './ui/BottomNav';

/* ---- Sub Components ---- */

const FilterSection = ({
  title,
  children,
  open,
  onToggle,
}: {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onToggle: () => void;
}) => (
  <div>
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full py-1 group"
    >
      <span className="text-[14px] font-['Bricolage_Grotesque'] font-medium text-[#272d2c]">
        {title}
      </span>
      <motion.div
        animate={{ rotate: open ? 180 : 0 }}
        transition={{ duration: 0.2 }}
        className="text-[#3f4544] opacity-40"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </button>
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="overflow-hidden"
        >
          <div className="pt-3 pb-1">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const ChipButton = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <motion.button
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`px-[12px] py-[7px] rounded-[8px] text-[13px] font-['Figtree'] font-medium transition-all duration-200 border ${active
      ? 'bg-[#E8F0ED] border-[#2D5A4C]/20 text-[#2D5A4C]'
      : 'bg-[#f8f7f3] border-transparent text-[#3f4544] opacity-70'
      }`}
  >
    {label}
  </motion.button>
);


// Extract unique values from mentors data
const ALL_LANGUAGES = Array.from(new Set(MENTORS.flatMap(m => m.languages))).sort();
const ALL_SKILLS = Array.from(new Set(MENTORS.flatMap(m => m.skills))).sort();
const ALL_SERVICE_TYPES = Array.from(new Set(MENTORS.flatMap(m => m.services.map(s => s.title)))).sort();
const ALL_DURATIONS = Array.from(new Set(MENTORS.flatMap(m => m.services.map(s => s.duration)))).sort();
const RATING_OPTIONS = [
  { label: '4.5+', value: 4.5 },
  { label: '4+', value: 4.0 },
  { label: '3.5+', value: 3.5 },
  { label: 'Any', value: 0 },
];
const EXPERIENCE_OPTIONS = [
  { label: '10+ yrs', value: 10 },
  { label: '5+ yrs', value: 5 },
  { label: '1+ yrs', value: 1 },
  { label: 'Any', value: 0 },
];
const PRICING_OPTIONS = ['Free', 'Paid', 'Any'];

interface Filters {
  languages: string[];
  serviceTypes: string[];
  durations: string[];
  minRating: number;
  minExperience: number;
  pricing: string;
  skills: string[];
}

const defaultFilters: Filters = {
  languages: [],
  serviceTypes: [],
  durations: [],
  minRating: 0,
  minExperience: 0,
  pricing: 'Any',
  skills: [],
};

interface SearchResultsProps {
  query: string;
  onBack: () => void;
  onSelectMentor: (mentor: Mentor) => void;
  onNavigate: (view: string) => void;
  hasUnreadChats?: boolean;
}

export const SearchResults = ({ query, onBack, onSelectMentor, onNavigate, hasUnreadChats }: SearchResultsProps) => {
  const [searchQuery, setSearchQuery] = useState(query);
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [tempFilters, setTempFilters] = useState<Filters>(defaultFilters);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilterSection, setActiveFilterSection] = useState<string | null>(null);
  const [serviceTypeSearch, setServiceTypeSearch] = useState('');

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.languages.length > 0) count++;
    if (filters.serviceTypes.length > 0) count++;
    if (filters.durations.length > 0) count++;
    if (filters.minRating > 0) count++;
    if (filters.minExperience > 0) count++;
    if (filters.pricing !== 'Any') count++;
    if (filters.skills.length > 0) count++;
    return count;
  }, [filters]);

  const filteredMentors = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return MENTORS.filter(mentor => {
      // Text search
      if (q) {
        const searchable = [
          mentor.name,
          mentor.role,
          mentor.company,
          ...mentor.skills,
          ...mentor.services.map(s => s.title),
          ...mentor.languages,
        ].join(' ').toLowerCase();
        if (!searchable.includes(q)) return false;
      }

      // Language filter
      if (filters.languages.length > 0) {
        if (!filters.languages.some(lang => mentor.languages.includes(lang))) return false;
      }

      // Service type filter
      if (filters.serviceTypes.length > 0) {
        if (!filters.serviceTypes.some(st => mentor.services.some(s => s.title === st))) return false;
      }

      // Duration filter
      if (filters.durations.length > 0) {
        if (!filters.durations.some(dur => mentor.services.some(s => s.duration === dur))) return false;
      }

      // Rating filter
      if (filters.minRating > 0) {
        if (mentor.rating_avg < filters.minRating) return false;
      }

      // Experience filter
      if (filters.minExperience > 0) {
        if (mentor.experience_years < filters.minExperience) return false;
      }

      // Pricing filter
      if (filters.pricing === 'Free') {
        if (!mentor.services.some(s => s.cost === 0)) return false;
      } else if (filters.pricing === 'Paid') {
        if (!mentor.services.some(s => s.cost > 0)) return false;
      }

      // Skills filter
      if (filters.skills.length > 0) {
        if (!filters.skills.some(skill => mentor.skills.includes(skill))) return false;
      }

      return true;
    });
  }, [searchQuery, filters]);

  const handleOpenFilter = () => {
    setTempFilters({ ...filters });
    setActiveFilterSection(null);
    setFilterOpen(true);
  };

  const handleApplyFilters = () => {
    setFilters({ ...tempFilters });
    setFilterOpen(false);
  };

  const handleResetFilters = () => {
    setTempFilters({ ...defaultFilters });
  };

  const toggleArrayFilter = useCallback((
    key: 'languages' | 'serviceTypes' | 'durations' | 'skills',
    value: string
  ) => {
    setTempFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v: string) => v !== value)
        : [...prev[key], value],
    }));
  }, []);

  const hasFreeService = (mentor: Mentor) => mentor.services.some(s => s.cost === 0);

  return (
    <div className="flex flex-col h-full bg-[#f8f7f3] relative overflow-hidden">
      {/* Header */}
      <div className="bg-white rounded-bl-[12px] rounded-br-[12px] pb-4 shrink-0">
        <header className="px-4 pt-10 pb-3 flex justify-between items-center">
          <button
            onClick={onBack}
            className="w-[42px] h-[44px] rounded-[8px] bg-white/40 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <CaretLeft size={24} className="text-[#0F1615]" />
          </button>
          <div className="flex items-center gap-3">
            <span className="text-[20px] font-['Figtree'] font-semibold text-[#2D5A4C]">Guidly</span>
          </div>
          <button
            onClick={() => onNavigate('notifications')}
            className="relative w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors"
          >
            <Bell size={24} weight="regular" className="text-[#0F1615]" />
            <span className="absolute top-[11px] right-[11px] w-[15px] h-[15px] bg-[#fb2c36] rounded-full flex items-center justify-center text-[10px] text-white font-semibold">
              4
            </span>
          </button>
        </header>

        {/* Search + Filter */}
        <div className="px-4 flex gap-2">
          <div className="flex-1 bg-[#f3f3f3] h-[48px] rounded-[4px] flex items-center px-[12px] gap-[12px]">
            <input
              type="text"
              placeholder="Search mentors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-[16px] font-['Figtree'] outline-none border-none placeholder-[#3f4544]/40 text-[#3f4544]"
            />
          </div>
          <button
            onClick={handleOpenFilter}
            className="relative w-[51px] h-[48px] bg-[#f3f3f3] rounded-[4px] flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <FilterIcon size={24} weight="regular" className="text-[#0F1615] opacity-80" />
            {activeFilterCount > 0 && (
              <span className="absolute -top-1 -right-1 w-[18px] h-[18px] bg-[#2D5A4C] rounded-full flex items-center justify-center text-[9px] text-white font-bold">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        {/* Results count */}
        <div className="px-4 mt-3">
          <p className="text-[13px] font-['Figtree'] text-[#3f4544] opacity-50">
            {searchQuery.trim()
              ? `Showing results for "${searchQuery}"`
              : `All mentors`
            }
            {activeFilterCount > 0 && ` · ${activeFilterCount} filter${activeFilterCount > 1 ? 's' : ''} applied`}
          </p>
        </div>
      </div>

      {/* Results List */}
      <div className="flex-1 overflow-y-auto px-4 pb-[100px] pt-3 no-scrollbar">
        {filteredMentors.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="w-16 h-16 bg-[#f3f3f3] rounded-full flex items-center justify-center mb-4">
              <Search size={28} className="text-[#3f4544] opacity-30" />
            </div>
            <h3 className="text-[16px] font-['Bricolage_Grotesque'] font-medium text-[#272d2c] mb-1">
              No mentors found
            </h3>
            <p className="text-[13px] font-['Figtree'] text-[#3f4544] opacity-50 max-w-[220px]">
              Try adjusting your search or filters to find the right mentor.
            </p>
            {activeFilterCount > 0 && (
              <button
                onClick={() => setFilters(defaultFilters)}
                className="mt-4 text-[13px] font-['Figtree'] font-medium text-[#2D5A4C] underline underline-offset-2"
              >
                Clear all filters
              </button>
            )}
          </motion.div>
        ) : (
          <div className="flex flex-col gap-[10px]">
            {filteredMentors.map((mentor, index) => (
              <motion.button
                key={mentor.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelectMentor(mentor)}
                className="bg-white rounded-[14px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.04)] w-full text-left"
              >
                <div className="flex gap-[12px] items-center p-[12px]">
                  {/* Avatar */}
                  <div className="relative rounded-[12px] shrink-0 size-[72px]">
                    <ImageWithFallback
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover rounded-[12px]"
                    />
                    {hasFreeService(mentor) && (
                      <div className="absolute bottom-[5px] left-[5px] bg-[#f3f3f3] rounded-[6px] p-[4px] flex items-center justify-center">
                        <CurrencyDollar size={12} className="text-[#575C5B]" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col gap-[8px] min-w-0">
                    {/* Name + Role */}
                    <div className="flex flex-col gap-[2px]">
                      <p className="text-[14px] font-['Figtree'] font-medium text-[#272d2c] leading-[20px] truncate">
                        {mentor.name}
                      </p>
                      <p className="text-[12px] font-['Figtree'] text-[#3f4544] opacity-60 leading-[16px] truncate">
                        {mentor.role} @ {mentor.company}
                      </p>
                    </div>

                    {/* Rating Badge */}
                    <div className="flex items-center gap-[4px]">
                      <div className="backdrop-blur-[5.15px] bg-[#f3f3f3] flex gap-[4px] items-center px-[8px] py-[4px] rounded-[6px]">
                        <div className="flex gap-[2px] items-center">
                          <span className="text-[12px] font-['Figtree'] text-[#272d2c] leading-[16px]">
                            {mentor.rating_avg}
                          </span>
                          <Star size={12} weight="fill" className="text-[#2D5A4C]" />
                        </div>
                        <span className="text-[11px] font-['Figtree'] text-[#3f4544] leading-[16px]">
                          ({mentor.review_count} Reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeView="results" onNavigate={onNavigate} hasUnreadChats={hasUnreadChats} />

      {/* Filter Bottom Sheet */}
      <AnimatePresence>
        {filterOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFilterOpen(false)}
              className="absolute inset-0 bg-black/40 z-[60]"
            />

            {/* Content */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 right-0 z-[70] outline-none"
            >
              <div className="bg-white rounded-t-[20px] max-h-[85vh] flex flex-col shadow-[0px_-8px_40px_rgba(0,0,0,0.12)]">
                {/* Handle */}
                <div className="flex justify-center pt-3 pb-1 shrink-0">
                  <div className="w-[36px] h-[4px] bg-[#e0dfdb] rounded-full" />
                </div>

                {/* Header */}
                <div className="flex items-center justify-between px-5 py-3 shrink-0">
                  <h3 className="text-[18px] font-['Bricolage_Grotesque'] font-semibold text-[#1b362e]">
                    Filters
                  </h3>
                  <button
                    onClick={handleResetFilters}
                    className="text-[13px] font-['Figtree'] font-medium text-[#2D5A4C] opacity-70 hover:opacity-100 transition-opacity"
                  >
                    Reset all
                  </button>
                </div>

                <div className="h-[1px] bg-[#f0efe9] mx-5 shrink-0" />

                {/* Filter Sections */}
                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5 no-scrollbar pb-[100px]">

                  {/* Rating */}
                  <FilterSection title="Minimum Rating" open={activeFilterSection === 'rating'} onToggle={() => setActiveFilterSection(activeFilterSection === 'rating' ? null : 'rating')}>
                    <div className="flex flex-wrap gap-2">
                      {RATING_OPTIONS.map(opt => (
                        <ChipButton
                          key={opt.label}
                          label={opt.label === 'Any' ? 'Any' : `${opt.label} ★`}
                          active={tempFilters.minRating === opt.value}
                          onClick={() => setTempFilters(prev => ({ ...prev, minRating: opt.value }))}
                        />
                      ))}
                    </div>
                  </FilterSection>

                  {/* Language */}
                  <FilterSection title="Language" open={activeFilterSection === 'language'} onToggle={() => setActiveFilterSection(activeFilterSection === 'language' ? null : 'language')}>
                    <div className="flex flex-wrap gap-2">
                      {ALL_LANGUAGES.map(lang => (
                        <ChipButton
                          key={lang}
                          label={lang}
                          active={tempFilters.languages.includes(lang)}
                          onClick={() => toggleArrayFilter('languages', lang)}
                        />
                      ))}
                    </div>
                  </FilterSection>

                  {/* Service Type */}
                  <FilterSection title="Service Type" open={activeFilterSection === 'service'} onToggle={() => setActiveFilterSection(activeFilterSection === 'service' ? null : 'service')}>
                    <div className="flex flex-col gap-3">
                      <div className="relative group/search">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3f4544] opacity-30 group-focus-within/search:opacity-60 transition-opacity">
                          <Search size={14} />
                        </div>
                        <input
                          type="text"
                          placeholder="Search services..."
                          value={serviceTypeSearch}
                          onChange={(e) => setServiceTypeSearch(e.target.value)}
                          className="w-full h-[36px] bg-[#f8f7f3] rounded-[8px] pl-9 pr-3 text-[13px] font-['Figtree'] outline-none border border-transparent focus:border-[#2D5A4C]/20 focus:bg-white transition-all placeholder-[#3f4544]/30 text-[#3f4544]"
                        />
                        {serviceTypeSearch && (
                          <button
                            onClick={() => setServiceTypeSearch('')}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-[#3f4544] opacity-40 hover:opacity-70"
                          >
                            <X size={14} />
                          </button>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 max-h-[200px] overflow-y-auto no-scrollbar py-1">
                        {ALL_SERVICE_TYPES
                          .filter(st => st.toLowerCase().includes(serviceTypeSearch.toLowerCase()))
                          .map(st => (
                            <ChipButton
                              key={st}
                              label={st}
                              active={tempFilters.serviceTypes.includes(st)}
                              onClick={() => toggleArrayFilter('serviceTypes', st)}
                            />
                          ))}
                        {ALL_SERVICE_TYPES.filter(st => st.toLowerCase().includes(serviceTypeSearch.toLowerCase())).length === 0 && (
                          <p className="text-[12px] text-[#3f4544] opacity-40 py-2 pl-1">No matches found</p>
                        )}
                      </div>
                    </div>
                  </FilterSection>

                  {/* Session Duration */}
                  <FilterSection title="Session Duration" open={activeFilterSection === 'duration'} onToggle={() => setActiveFilterSection(activeFilterSection === 'duration' ? null : 'duration')}>
                    <div className="flex flex-wrap gap-2">
                      {ALL_DURATIONS.map(dur => (
                        <ChipButton
                          key={dur}
                          label={dur}
                          active={tempFilters.durations.includes(dur)}
                          onClick={() => toggleArrayFilter('durations', dur)}
                        />
                      ))}
                    </div>
                  </FilterSection>

                  {/* Experience */}
                  <FilterSection title="Experience" open={activeFilterSection === 'experience'} onToggle={() => setActiveFilterSection(activeFilterSection === 'experience' ? null : 'experience')}>
                    <div className="flex flex-wrap gap-2">
                      {EXPERIENCE_OPTIONS.map(opt => (
                        <ChipButton
                          key={opt.label}
                          label={opt.label}
                          active={tempFilters.minExperience === opt.value}
                          onClick={() => setTempFilters(prev => ({ ...prev, minExperience: opt.value }))}
                        />
                      ))}
                    </div>
                  </FilterSection>

                  {/* Pricing */}
                  <FilterSection title="Pricing" open={activeFilterSection === 'pricing'} onToggle={() => setActiveFilterSection(activeFilterSection === 'pricing' ? null : 'pricing')}>
                    <div className="flex flex-wrap gap-2">
                      {PRICING_OPTIONS.map(opt => (
                        <ChipButton
                          key={opt}
                          label={opt}
                          active={tempFilters.pricing === opt}
                          onClick={() => setTempFilters(prev => ({ ...prev, pricing: opt }))}
                        />
                      ))}
                    </div>
                  </FilterSection>

                  {/* Skills */}
                  <FilterSection title="Skills & Expertise" open={activeFilterSection === 'skills'} onToggle={() => setActiveFilterSection(activeFilterSection === 'skills' ? null : 'skills')}>
                    <div className="flex flex-wrap gap-2">
                      {ALL_SKILLS.map(skill => (
                        <ChipButton
                          key={skill}
                          label={skill}
                          active={tempFilters.skills.includes(skill)}
                          onClick={() => toggleArrayFilter('skills', skill)}
                        />
                      ))}
                    </div>
                  </FilterSection>
                </div>

                {/* Apply Button */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-white via-white to-transparent pt-8 shadow-[0px_-10px_20px_rgba(255,255,255,0.8)]">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={handleApplyFilters}
                    className="w-full h-[52px] bg-[#2D5A4C] text-white rounded-[12px] font-['Figtree'] font-semibold text-[15px] flex items-center justify-center gap-2 shadow-[0px_4px_12px_rgba(45,90,76,0.2)]"
                  >
                    <Check size={18} weight="bold" />
                    Show Results
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};