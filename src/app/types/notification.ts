export interface Notification {
    id: string;
    recipient_id: string;
    type: 'booking_confirmed' | 'session_reminder' | 'review' | 'system';
    title: string;
    message: string;
    is_read: boolean;
    related_id?: string;
    created_at: string; // ISO string for mock data
}
