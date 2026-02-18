import { Mentor } from '../types/mentor';
import imgChandrashekar from '../../assets/Mentor Profiles/Chandrashekar.webp';
import imgSarahChen from '../../assets/Mentor Profiles/Sarah chen.webp';
import imgDavidMiller from '../../assets/Mentor Profiles/David Miller.webp';
import imgPriyaSharma from '../../assets/Mentor Profiles/Priya Sharma.webp';
import imgMarcusThorne from '../../assets/Mentor Profiles/Marcus thorne.webp';

export const MENTORS: Mentor[] = [
  {
    id: '1',
    name: 'Chandrasekhar',
    role: 'Senior UI/UX Designer',
    company: 'Infosys',
    rating_avg: 5,
    review_count: '100+',
    image: imgChandrashekar,
    banner_image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
    about: "Welcome! I'm excited to be part of your journey. Whether you're looking for guidance, advice, or just someone to listen, I'm here to support you. Let's work together to achieve your goals and grow along the way.",
    experience_years: 5,
    languages: ['English', 'Spanish', 'Hindi', 'Tamil'],
    companies: ['Infosys', 'Wac', 'Lotter Pvt.Ltd'],
    skills: ['UI/UX', 'Figma', 'Product Design'],
    services: [
      { id: 's1', title: 'Interview prep.', duration: '45 Min', price: 'Free', cost: 0, icon: 'graduation' },
      { id: 's2', title: 'Career guidance', duration: '60 Min', price: '20$', cost: 20, icon: 'trend' },
      { id: 's3', title: 'Mock Interview', duration: '45 Min', price: '50$', cost: 50, icon: 'mic' },
    ],
    work_history: [
      { role: 'Sr. UI/UX Designer', company: 'Infosys', location: 'Bangalore', period: '2021 - Present' },
      { role: 'Jr. UI/UX Designer', company: 'Wac', location: 'Kochi', period: '2018 - 21' },
      { role: 'Graphic Designer', company: 'Lotter Pvt.Ltd', location: 'Remote', period: '2016 - 18' },
    ],
    reviews: [
      {
        id: 'r1-1',
        userName: 'Brooklyn Simmons',
        userInitials: 'BS',
        rating: 5,
        comment: 'Chandrasekhar is a game-changer! His approachable style and insightful advice gave me the confidence to achieve my goals. So grateful!',
        timestamp: '3 hr ago',
        likes: 3,
        reply: {
          mentorName: 'Chandrasekhar',
          mentorImage: imgChandrashekar,
          comment: 'Thank you for your kind words, Brooklyn! It was a pleasure working with you.',
          timestamp: '1 hr ago',
          likes: 5
        }
      },
      {
        id: 'r1-2',
        userName: 'Savannah Nguyen',
        userInitials: 'SN',
        rating: 5,
        comment: 'Chandrasekhar is an amazing mentor. He helped me restructure my portfolio and land my first senior role.',
        timestamp: '1 day ago',
        likes: 5
      },
      {
        id: 'r1-3',
        userName: 'Arlene McCoy',
        userInitials: 'AM',
        rating: 4,
        comment: 'Very practical advice on design systems. I learned a lot about token management.',
        timestamp: '2 days ago',
        likes: 2
      },
      {
        id: 'r1-4',
        userName: 'Theresa Webb',
        userInitials: 'TW',
        rating: 5,
        comment: 'Excellent mock interview. The feedback was detailed and actionable.',
        timestamp: '4 days ago',
        likes: 4,
        reply: {
          mentorName: 'Chandrasekhar',
          mentorImage: imgChandrashekar,
          comment: 'You did great! Just keep practicing those case study presentations.',
          timestamp: '3 days ago',
          likes: 2
        }
      },
      {
        id: 'r1-5',
        userName: 'Darrell Steward',
        userInitials: 'DS',
        rating: 5,
        comment: 'Guided me through a complex Figma project. Highly recommended!',
        timestamp: '1 week ago',
        likes: 6
      },
      {
        id: 'r1-6',
        userName: 'Jerome Bell',
        userInitials: 'JB',
        rating: 3,
        comment: 'Good session, but I felt we could have covered more ground in 45 minutes.',
        timestamp: '1 week ago',
        likes: 1
      },
      {
        id: 'r1-7',
        userName: 'Eleanor Pena',
        userInitials: 'EP',
        rating: 5,
        comment: 'Amazing energy! Truly inspired by his design philosophy.',
        timestamp: '2 weeks ago',
        likes: 8
      },
      {
        id: 'r1-8',
        userName: 'Marvin McKinney',
        userInitials: 'MM',
        rating: 5,
        comment: 'Helpful tips for landing freelance clients. Very knowledgeable.',
        timestamp: '2 weeks ago',
        likes: 3
      },
      {
        id: 'r1-9',
        userName: 'Annette Black',
        userInitials: 'AB',
        rating: 5,
        comment: 'Chandrasekhar is very patient and explains concepts clearly.',
        timestamp: '3 weeks ago',
        likes: 5
      },
      {
        id: 'r1-10',
        userName: 'Courtney Henry',
        userInitials: 'CH',
        rating: 4,
        comment: 'Solid advice on career progression in the design industry.',
        timestamp: '1 month ago',
        likes: 2
      }
    ],
    restricted_topics: [
      'Basic questions you can Google',
      'Asking for salary breakdowns',
      'Past interview stories'
    ]
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Product Manager',
    company: 'Google',
    rating_avg: 4.9,
    review_count: '120+',
    image: imgSarahChen,
    banner_image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    about: "I help aspiring PMs break into big tech and master the art of product discovery and execution. With over 8 years of experience, I've seen it all.",
    experience_years: 8,
    languages: ['English', 'Mandarin'],
    companies: ['Google', 'Meta', 'StartupX'],
    skills: ['Product Strategy', 'Agile', 'Market Research'],
    services: [
      { id: 's4', title: 'PM Resume Review', duration: '30 Min', price: 'Free', cost: 0, icon: 'file' },
      { id: 's5', title: 'Strategy Session', duration: '60 Min', price: '45$', cost: 45, icon: 'trend' },
    ],
    work_history: [
      { role: 'Product Manager', company: 'Google', location: 'Mountain View', period: '2020 - Present' },
      { role: 'Associate PM', company: 'Meta', location: 'Menlo Park', period: '2017 - 20' },
    ],
    reviews: [
      {
        id: 'r2-1',
        userName: 'Courtney Henry',
        userInitials: 'CH',
        rating: 5,
        comment: 'Sarah is the real deal. Her PM interview tips were spot on and helped me land an offer at a top tier company.',
        timestamp: '5 hr ago',
        likes: 2,
        reply: {
          mentorName: 'Sarah Chen',
          mentorImage: imgSarahChen,
          comment: 'So happy for you, Courtney! You earned it.',
          timestamp: '2 hr ago',
          likes: 3
        }
      },
      {
        id: 'r2-2',
        userName: 'Ralph Edwards',
        userInitials: 'RE',
        rating: 4,
        comment: 'Great insights into the Google PM culture. Very practical advice on navigating stakeholder management.',
        timestamp: '2 days ago',
        likes: 1
      },
      {
        id: 'r2-3',
        userName: 'Bessie Cooper',
        userInitials: 'BC',
        rating: 5,
        comment: 'Loved how she broke down product strategy. It all makes sense now.',
        timestamp: '5 days ago',
        likes: 4
      },
      {
        id: 'r2-4',
        userName: 'Jacob Jones',
        userInitials: 'JJ',
        rating: 5,
        comment: 'Excellent resume review. She knows exactly what FAANG recruiters look for.',
        timestamp: '1 week ago',
        likes: 7
      },
      {
        id: 'r2-5',
        userName: 'Robert Fox',
        userInitials: 'RF',
        rating: 3,
        comment: 'Insightful, but the session felt a bit rushed.',
        timestamp: '1 week ago',
        likes: 0
      },
      {
        id: 'r2-6',
        userName: 'Kristin Watson',
        userInitials: 'KW',
        rating: 5,
        comment: 'Sarah is super encouraging. I feel much more prepared for my interviews.',
        timestamp: '2 weeks ago',
        likes: 5
      },
      {
        id: 'r2-7',
        userName: 'Guy Hawkins',
        userInitials: 'GH',
        rating: 5,
        comment: 'Amazing session on metrics and KPIs. Very helpful!',
        timestamp: '3 weeks ago',
        likes: 2,
        reply: {
          mentorName: 'Sarah Chen',
          mentorImage: imgSarahChen,
          comment: 'Always happy to talk data! Keep up the great work.',
          timestamp: '2 weeks ago',
          likes: 4
        }
      },
      {
        id: 'r2-8',
        userName: 'Cody Fisher',
        userInitials: 'CF',
        rating: 4,
        comment: 'Good overview of the PM role at a large tech company.',
        timestamp: '1 month ago',
        likes: 1
      },
      {
        id: 'r2-9',
        userName: 'Floyd Miles',
        userInitials: 'FM',
        rating: 5,
        comment: 'Highly recommended for anyone looking to transition into PM.',
        timestamp: '1 month ago',
        likes: 3
      },
      {
        id: 'r2-10',
        userName: 'Kathryn Murphy',
        userInitials: 'KM',
        rating: 5,
        comment: 'Exceptional mentor with a wealth of knowledge.',
        timestamp: '2 months ago',
        likes: 6
      }
    ],
    restricted_topics: [
      'Internal confidential roadmaps',
      'Referrals on first meeting',
      'Proprietary interview questions'
    ]
  },
  {
    id: '3',
    name: 'David Miller',
    role: 'Senior Software Engineer',
    company: 'Netflix',
    rating_avg: 4.8,
    review_count: '85+',
    image: imgDavidMiller,
    banner_image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    about: "Specializing in distributed systems and cloud architecture. I love helping developers level up their technical skills and navigate senior roles.",
    experience_years: 10,
    languages: ['English', 'German'],
    companies: ['Netflix', 'Amazon', 'IBM'],
    skills: ['Node.js', 'System Design', 'AWS'],
    services: [
      { id: 's6', title: 'System Design Mock', duration: '60 Min', price: '60$', cost: 60, icon: 'mic' },
      { id: 's7', title: 'Code Review', duration: '45 Min', price: '30$', cost: 30, icon: 'folder' },
    ],
    work_history: [
      { role: 'Senior Software Engineer', company: 'Netflix', location: 'Los Gatos', period: '2019 - Present' },
      { role: 'SDE II', company: 'Amazon', location: 'Seattle', period: '2015 - 19' },
    ],
    reviews: [
      {
        id: 'r3-1',
        userName: 'Albert Flores',
        userInitials: 'AF',
        rating: 5,
        comment: 'David has a unique way of explaining complex distributed systems. I finally understand eventual consistency!',
        timestamp: '8 hr ago',
        likes: 7,
        reply: {
          mentorName: 'David Miller',
          mentorImage: imgDavidMiller,
          comment: 'Haha, it took me a while too! Glad I could help.',
          timestamp: '4 hr ago',
          likes: 2
        }
      },
      {
        id: 'r3-2',
        userName: 'Kathrine Murphy',
        userInitials: 'KM',
        rating: 5,
        comment: 'Excellent code review. Pointed out several edge cases and performance bottlenecks I had missed.',
        timestamp: '1 week ago',
        likes: 4
      },
      {
        id: 'r3-3',
        userName: 'Jane Cooper',
        userInitials: 'JC',
        rating: 5,
        comment: 'Very patient during the debugging session. Great mentor.',
        timestamp: '1 week ago',
        likes: 3
      },
      {
        id: 'r3-4',
        userName: 'Dianne Russell',
        userInitials: 'DR',
        rating: 4,
        comment: 'Good system design drill. Very intense!',
        timestamp: '2 weeks ago',
        likes: 5
      },
      {
        id: 'r3-5',
        userName: 'Ronald Richards',
        userInitials: 'RR',
        rating: 5,
        comment: 'Insightful tips on scaling Node.js applications.',
        timestamp: '2 weeks ago',
        likes: 8
      },
      {
        id: 'r3-6',
        userName: 'Devon Lane',
        userInitials: 'DL',
        rating: 3,
        comment: 'Technical, but I found his teaching style a bit dry.',
        timestamp: '3 weeks ago',
        likes: 1
      },
      {
        id: 'r3-7',
        userName: 'Cody Fisher',
        userInitials: 'CF',
        rating: 5,
        comment: 'David is a subject matter expert. Learned a lot about AWS Lambda.',
        timestamp: '4 weeks ago',
        likes: 4
      },
      {
        id: 'r3-8',
        userName: 'Theresa Webb',
        userInitials: 'TW',
        rating: 5,
        comment: 'Very encouraging and provided great career advice.',
        timestamp: '1 month ago',
        likes: 2
      },
      {
        id: 'r3-9',
        userName: 'Arlene McCoy',
        userInitials: 'AM',
        rating: 4,
        comment: 'Solid engineering principles. Very helpful.',
        timestamp: '1 month ago',
        likes: 3
      },
      {
        id: 'r3-10',
        userName: 'Savannah Nguyen',
        userInitials: 'SN',
        rating: 5,
        comment: 'Best system design mentor I have found so far.',
        timestamp: '2 months ago',
        likes: 9,
        reply: {
          mentorName: 'David Miller',
          mentorImage: imgDavidMiller,
          comment: 'You are too kind! See you at the next session.',
          timestamp: '1 month ago',
          likes: 4
        }
      }
    ],
    restricted_topics: [
      'Leaked feature code',
      'Netflix compensation data',
      'Non-engineering career advice'
    ]
  },
  {
    id: '4',
    name: 'Priya Sharma',
    role: 'Marketing Director',
    company: 'Airbnb',
    rating_avg: 4.7,
    review_count: '60+',
    image: imgPriyaSharma,
    banner_image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
    about: "Passionate about brand storytelling and growth marketing. I've led global campaigns that reached millions.",
    experience_years: 12,
    languages: ['English', 'Hindi', 'Punjabi'],
    companies: ['Airbnb', 'Coca-Cola', 'Unilever'],
    skills: ['Brand Identity', 'Digital Marketing', 'Leadership'],
    services: [
      { id: 's8', title: 'Career Pathing', duration: '45 Min', price: 'Free', cost: 0, icon: 'trend' },
      { id: 's9', title: 'Campaign Review', duration: '60 Min', price: '40$', cost: 40, icon: 'folder' },
    ],
    work_history: [
      { role: 'Director of Marketing', company: 'Airbnb', location: 'San Francisco', period: '2021 - Present' },
      { role: 'Marketing Manager', company: 'Coca-Cola', location: 'Atlanta', period: '2016 - 21' },
    ],
    reviews: [
      {
        id: 'r4-1',
        userName: 'Leslie Alexander',
        userInitials: 'LA',
        rating: 4,
        comment: 'Priya helped me define my personal brand. Her perspective on storytelling is very refreshing.',
        timestamp: '12 hr ago',
        likes: 2
      },
      {
        id: 'r4-2',
        userName: 'Jenny Wilson',
        userInitials: 'JW',
        rating: 5,
        comment: 'Amazing campaign review. Her focus on data-driven marketing while keeping the brand essence is incredible.',
        timestamp: '3 days ago',
        likes: 6,
        reply: {
          mentorName: 'Priya Sharma',
          mentorImage: imgPriyaSharma,
          comment: 'Data is the story! Great job on that campaign.',
          timestamp: '2 days ago',
          likes: 5
        }
      },
      {
        id: 'r4-3',
        userName: 'Marvin McKinney',
        userInitials: 'MM',
        rating: 5,
        comment: 'Great insights into the Airbnb culture. Very practical advice.',
        timestamp: '1 week ago',
        likes: 3
      },
      {
        id: 'r4-4',
        userName: 'Courtney Henry',
        userInitials: 'CH',
        rating: 4,
        comment: 'Lively session on brand identity. Very engaging!',
        timestamp: '1 week ago',
        likes: 1
      },
      {
        id: 'r4-5',
        userName: 'Bessie Cooper',
        userInitials: 'BC',
        rating: 5,
        comment: 'Exceptional mentor with a wealth of experience in the industry.',
        timestamp: '2 weeks ago',
        likes: 4
      },
      {
        id: 'r4-6',
        userName: 'Darrell Steward',
        userInitials: 'DS',
        rating: 3,
        comment: 'Found the session a bit too theoretical for my liking.',
        timestamp: '3 weeks ago',
        likes: 0
      },
      {
        id: 'r4-7',
        userName: 'Arlene McCoy',
        userInitials: 'AM',
        rating: 5,
        comment: 'Priya is a visionary when it comes to growth marketing.',
        timestamp: '4 weeks ago',
        likes: 7
      },
      {
        id: 'r4-8',
        userName: 'Cody Fisher',
        userInitials: 'CF',
        rating: 5,
        comment: 'Highly recommended for anyone looking to level up their marketing skills.',
        timestamp: '1 month ago',
        likes: 2
      },
      {
        id: 'r4-9',
        userName: 'Savannah Nguyen',
        userInitials: 'SN',
        rating: 4,
        comment: 'Helpful tips on navigating leadership roles in marketing.',
        timestamp: '2 months ago',
        likes: 5
      },
      {
        id: 'r4-10',
        userName: 'Annette Black',
        userInitials: 'AB',
        rating: 5,
        comment: 'Invaluable advice on career progression. Truly grateful!',
        timestamp: '3 months ago',
        likes: 8
      }
    ],
    restricted_topics: [
      'Airbnb pricing algorithms',
      'Legal marketing disclosures',
      'Competitive campaign budgets'
    ]
  },
  {
    id: '5',
    name: 'Marcus Thorne',
    role: 'Head of Design',
    company: 'Stripe',
    rating_avg: 4.9,
    review_count: '250+',
    image: imgMarcusThorne,
    banner_image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    about: "Design is not just how it looks, but how it works. I focus on building high-performing design teams and scalable design systems.",
    experience_years: 15,
    languages: ['English', 'French'],
    companies: ['Stripe', 'Apple', 'IDEO'],
    skills: ['Design Leadership', 'Product Vision', 'UX Research'],
    services: [
      { id: 's10', title: 'Leadership Coaching', duration: '60 Min', price: '100$', cost: 100, icon: 'mic' },
      { id: 's11', title: 'Portfolio Roast', duration: '30 Min', price: 'Free', cost: 0, icon: 'folder' },
    ],
    work_history: [
      { role: 'Head of Design', company: 'Stripe', location: 'Remote', period: '2018 - Present' },
      { role: 'Principal Designer', company: 'Apple', location: 'Cupertino', period: '2012 - 18' },
    ],
    reviews: [
      {
        id: 'r5-1',
        userName: 'Wade Warren',
        userInitials: 'WW',
        rating: 5,
        comment: 'Marcus provides high-level design leadership coaching that is worth every penny. Extremely professional.',
        timestamp: '2 hr ago',
        likes: 12,
        reply: {
          mentorName: 'Marcus Thorne',
          mentorImage: imgMarcusThorne,
          comment: 'Appreciate it, Wade. Keep leading with vision.',
          timestamp: '1 hr ago',
          likes: 10
        }
      },
      {
        id: 'r5-2',
        userName: 'Eleanor Pena',
        userInitials: 'EP',
        rating: 5,
        comment: 'The portfolio roast was brutal but exactly what I needed. Landed an interview at a unicorn 2 weeks later!',
        timestamp: '4 days ago',
        likes: 15
      },
      {
        id: 'r5-3',
        userName: 'Brooklyn Simmons',
        userInitials: 'BS',
        rating: 4,
        comment: 'Insightful session on scalable design systems. Very helpful.',
        timestamp: '1 week ago',
        likes: 8
      },
      {
        id: 'r5-4',
        userName: 'Robert Fox',
        userInitials: 'RF',
        rating: 5,
        comment: 'Marcus is a legend in the design community. Learned a lot!',
        timestamp: '1 week ago',
        likes: 6
      },
      {
        id: 'r5-5',
        userName: 'Dianne Russell',
        userInitials: 'DR',
        rating: 5,
        comment: 'Great coaching on building and scaling high-performing teams.',
        timestamp: '2 weeks ago',
        likes: 10
      },
      {
        id: 'r5-6',
        userName: 'Guy Hawkins',
        userInitials: 'GH',
        rating: 3,
        comment: 'Knowledgeable, but felt his approach was a bit too corporate for my startup.',
        timestamp: '3 weeks ago',
        likes: 2
      },
      {
        id: 'r5-7',
        userName: 'Kathryn Murphy',
        userInitials: 'KM',
        rating: 5,
        comment: 'Exceptional mentor with a clear focus on product vision.',
        timestamp: '4 weeks ago',
        likes: 14
      },
      {
        id: 'r5-8',
        userName: 'Savannah Nguyen',
        userInitials: 'SN',
        rating: 4,
        comment: 'Solid advice on design leadership and career progression.',
        timestamp: '1 month ago',
        likes: 5
      },
      {
        id: 'r5-9',
        userName: 'Annette Black',
        userInitials: 'AB',
        rating: 5,
        comment: 'Truly inspired by his design philosophy and expertise.',
        timestamp: '2 months ago',
        likes: 20
      },
      {
        id: 'r5-10',
        userName: 'Albert Flores',
        userInitials: 'AF',
        rating: 5,
        comment: 'Marcus is a mentor I will keep coming back to. Excellent!',
        timestamp: '3 months ago',
        likes: 12,
        reply: {
          mentorName: 'Marcus Thorne',
          mentorImage: imgMarcusThorne,
          comment: 'Always a pleasure, Albert. See you next time!',
          timestamp: '2 months ago',
          likes: 8
        }
      }
    ],
    restricted_topics: [
      'Stripe internal design files',
      'Upcoming product launches',
      'Salary negotiation with HR'
    ]
  }
];
