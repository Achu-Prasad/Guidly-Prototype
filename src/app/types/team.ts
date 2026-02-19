export interface CommunityPerk {
  id: string;
  title: string;
  subtitle: string;
  iconType: 'referral' | 'interview' | 'portfolio' | 'career' | 'mock';
  isFree: boolean;
}

export interface CommunityReview {
  id: string;
  name: string;
  initials: string;
  rating: number;
  text: string;
  timeAgo: string;
  likes: number;
}

export interface CommunityLeader {
  id: string;
  name: string;
  role: string;
  image?: string;
  isOnline: boolean;
}

export interface CommunityGuidelineItem {
  id: string;
  title: string;
  description: string;
}

export interface CommunityFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface CommunityGuidelines {
  intro: string;
  summaryTitle: string;
  summaryDescription: string;
  items: CommunityGuidelineItem[];
  faqs: CommunityFAQ[];
}

export interface Community {
  id: string;
  name: string;
  image: string;
  logo: string;
  memberCount: number;
  isOnlineOnly: boolean;
  tags: string[];
  description: string;
  languages: string[];
  foundedYear: number;
  perks: CommunityPerk[];
  rating?: number;
  reviews?: CommunityReview[];
  leaders?: CommunityLeader[];
  gallery?: string[];
  events?: TeamUpEvent[];
  guidelines?: CommunityGuidelines;
}

export interface TeamUpEvent {
  id: string;
  community_id: string;
  title: string;
  host_name: string;
  start_time: string; // ISO string
  end_time: string;   // ISO string
  ticket_price: number;
  attendee_ids: string[];
  meeting_url: string;
  image?: string;
  category?: string;
  max_attendees?: number;
}