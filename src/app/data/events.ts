import { TeamUpEvent } from '../types/team';
import banner1 from '../../assets/banner 1.png';

export const MOCK_EVENTS: TeamUpEvent[] = [
  {
    id: 'e1',
    community_id: 'c1',
    title: 'Basics of Design Systems',
    host_name: 'Sai Krishna',
    start_time: '2026-02-20T10:00:00Z',
    end_time: '2026-02-20T11:30:00Z',
    ticket_price: 0,
    attendee_ids: ['u1', 'u2', 'u3', 'u7', 'u8'],
    meeting_url: 'https://meet.jit.si/basics-design-systems',
    image: banner1,
    category: 'Workshop',
    max_attendees: 30
  },
  {
    id: 'e2',
    community_id: 'c2',
    title: 'React Performance Workshop',
    host_name: 'Anjali Sharma',
    start_time: '2026-02-22T15:00:00Z',
    end_time: '2026-02-22T17:00:00Z',
    ticket_price: 15,
    attendee_ids: ['u4', 'u5', 'u9', 'u10', 'u11'],
    meeting_url: 'https://meet.jit.si/react-perf-workshop',
    image: 'https://images.unsplash.com/photo-1638029202288-451a89e0d55f?auto=format&fit=crop&q=80&w=800',
    category: 'Masterclass',
    max_attendees: 25
  },
  {
    id: 'e3',
    community_id: 'c3',
    title: 'Product Strategy Sync',
    host_name: 'Michael Chen',
    start_time: '2026-02-24T18:00:00Z',
    end_time: '2026-02-24T19:30:00Z',
    ticket_price: 0,
    attendee_ids: ['u12', 'u13', 'u14'],
    meeting_url: 'https://meet.jit.si/product-strategy',
    image: 'https://images.unsplash.com/photo-1765438869297-6fa4b627906a?auto=format&fit=crop&q=80&w=800',
    category: 'Meetup',
    max_attendees: 50
  },
  {
    id: 'e4',
    community_id: 'c1',
    title: 'Creative Portfolio Reviews',
    host_name: 'Priya Nair',
    start_time: '2026-02-26T14:00:00Z',
    end_time: '2026-02-26T15:30:00Z',
    ticket_price: 0,
    attendee_ids: ['u1', 'u3', 'u6', 'u8', 'u15', 'u16', 'u17'],
    meeting_url: 'https://meet.jit.si/portfolio-reviews',
    image: 'https://images.unsplash.com/photo-1624259458752-a2c5922abea0?auto=format&fit=crop&q=80&w=800',
    category: 'Review',
    max_attendees: 20
  },
  {
    id: 'e5',
    community_id: 'c2',
    title: 'Tech Talks: Scaling Frontend',
    host_name: 'Rahul Menon',
    start_time: '2026-03-01T11:00:00Z',
    end_time: '2026-03-01T12:30:00Z',
    ticket_price: 10,
    attendee_ids: ['u2', 'u5', 'u9'],
    meeting_url: 'https://meet.jit.si/tech-talks-frontend',
    image: 'https://images.unsplash.com/photo-1762968286778-60e65336d5ca?auto=format&fit=crop&q=80&w=800',
    category: 'Talk',
    max_attendees: 40
  }
];
