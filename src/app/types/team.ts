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