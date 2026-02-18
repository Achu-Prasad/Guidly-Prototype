import { Notification } from '../types/notification';

export const MOCK_NOTIFICATIONS: Notification[] = [
    {
        id: 'n1',
        recipient_id: 'user123',
        type: 'booking_confirmed',
        title: 'Booking Confirmed',
        message: 'Your Booking Confirmed. Date : 20-06-2025 at 7 PM',
        is_read: false,
        related_id: 'b1',
        created_at: new Date(Date.now() - 43 * 60000).toISOString(), // 43 mins ago
    },
    {
        id: 'n2',
        recipient_id: 'user123',
        type: 'review',
        title: 'Review Reply',
        message: 'Your review got a reply.',
        is_read: false,
        related_id: 'r1',
        created_at: new Date(Date.now() - 60 * 60000).toISOString(), // 1 hour ago
    },
    {
        id: 'n3',
        recipient_id: 'user123',
        type: 'system',
        title: 'Mentor Heart',
        message: 'You got a heart from your mentor.',
        is_read: true,
        related_id: 'm1',
        created_at: new Date(Date.now() - 90 * 60000).toISOString(), // 1.5 hours ago
    },
    {
        id: 'n4',
        recipient_id: 'user123',
        type: 'booking_confirmed',
        title: 'Booking Confirmed',
        message: 'Your session with John is confirmed.',
        is_read: true,
        related_id: 'b2',
        created_at: new Date(Date.now() - 120 * 60000).toISOString(), // 2 hours ago
    }
];
