export interface Service {
  id: string;
  title: string;
  duration: string;
  price: string;
  cost: number;
  icon: 'graduation' | 'trend' | 'mic' | 'folder' | 'file';
}

export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
}

export interface Review {
  id: string;
  userName: string;
  userInitials: string;
  rating: number;
  comment: string;
  timestamp: string;
  likes: number;
  reply?: {
    mentorName: string;
    mentorImage: string;
    comment: string;
    timestamp: string;
    likes: number;
  };
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  rating_avg: number;
  review_count: string;
  image: string;
  banner_image: string;
  about: string;
  experience_years: number;
  languages: string[];
  companies: string[];
  skills: string[];
  services: Service[];
  work_history: WorkExperience[];
  reviews: Review[];
  restricted_topics: string[];
}
