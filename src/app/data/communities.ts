import { Community } from '../types/team';
// @ts-ignore
import imgFrame658 from "../../assets/1e75e354c43c87a0770203820c91734645a0e7dc.png";
// @ts-ignore
import imgFrame659 from "../../assets/49c19d0a660fb1c210a97efcc0990bb6f273b443.png";
// @ts-ignore
import imgFrame660 from "../../assets/44d9e67e5e1db7ee4a1cdf3d42e8788b82fd3c55.png";
// @ts-ignore
import imgStolenLogo from "../../assets/Stolen logo.png";
// @ts-ignore
import imgFOFLogo from "../../assets/fof logo.png";
// @ts-ignore
import imgWeCodeLogo from "../../assets/wecode.png";
// @ts-ignore
import imgLeaderStolen from "../../assets/Stolen community leaders/Stolen.png";
// @ts-ignore
import imgLeaderVaishakh from "../../assets/Stolen community leaders/Vyshakh.png";
// @ts-ignore
import imgLeaderSandra from "../../assets/Stolen community leaders/Sandra Shinto.png";

export const COMMUNITIES: Community[] = [
  {
    id: 'c1',
    name: 'Stolen & Friends',
    image: imgFrame658,
    logo: imgStolenLogo,
    memberCount: 650,
    isOnlineOnly: true,
    tags: ['Study', 'Referrals', 'Mentoring'],
    description: 'Welcome to Design Synergy, a vibrant UI/UX study group community where designers, developers, and enthusiasts collaborate, share knowledge, and grow together.',
    languages: ['English', 'Malayalam'],
    foundedYear: 2024,
    rating: 4.8,
    perks: [
      {
        id: 'p1',
        title: 'Referrals',
        subtitle: 'From Admin',
        iconType: 'referral',
        isFree: true
      },
      {
        id: 'p2',
        title: 'Interview prep.',
        subtitle: 'By community members',
        iconType: 'interview',
        isFree: true
      },
      {
        id: 'p3',
        title: 'Career guidance',
        subtitle: 'By community members',
        iconType: 'career',
        isFree: true
      },
      {
        id: 'p4',
        title: 'Mock Interview',
        subtitle: 'By dedicated team',
        iconType: 'mock',
        isFree: true
      }
    ],
    reviews: [
      {
        id: 'r1',
        name: 'Amarish',
        initials: 'AM',
        rating: 5,
        text: "I joined Stolen & Friends to improve my design, and it honestly boosted my confidence. The feedback and interview prep really helped me grow. Amazing community folks !!",
        timeAgo: '3 hr ago',
        likes: 3
      },
      {
        id: 'r2',
        name: 'Sravana P Nair',
        initials: 'S',
        rating: 5,
        text: "I joined to improve my design, but it honestly helped my career too. The community pushes you to think better and prepare properly for interviews.",
        timeAgo: '7 hr ago',
        likes: 5
      },
      {
        id: 'r3',
        name: 'Bipin S',
        initials: 'BS',
        rating: 5,
        text: "What I like most is how real everything feels — honest critiques, portfolio reviews, mock interviews. It actually helped me grow, not just learn.",
        timeAgo: '3 hr ago',
        likes: 3
      }
    ],
    leaders: [
      {
        id: 'l1',
        name: 'Stolen',
        role: 'Admin',
        isOnline: false,
        image: imgLeaderStolen
      },
      {
        id: 'l2',
        name: 'Vaishakh',
        role: 'Creative Manager',
        isOnline: true,
        image: imgLeaderVaishakh
      },
      {
        id: 'l3',
        name: 'Sandra Shinto',
        role: 'Community Manager',
        isOnline: true,
        image: imgLeaderSandra
      }
    ],
    gallery: [],
    guidelines: {
      intro: "Guidelines helps to understand what matters in the community and how to communicate and respect other peers. This ensures a respectful and trustworthy environment for the members.",
      summaryTitle: "Restricted Topics",
      summaryDescription: "To make our community productive and respectful, please understand the following",
      items: [
        {
          id: '01',
          title: 'Have Fun & Keep Learning',
          description: 'UI/UX is ever-evolving. Stay curious and enjoy the journey!'
        },
        {
          id: '02',
          title: 'Respect Everyone',
          description: 'Treat all members with kindness and professionalism. Constructive criticism is encouraged, but no personal attacks.'
        },
        {
          id: '03',
          title: 'Stay on Topic',
          description: 'Keep discussions relevant to UI/UX, design tools, and related subjects.'
        },
        {
          id: '04',
          title: 'No Self-Promotion',
          description: 'Avoid excessive self-promotion or spamming links unless it genuinely contributes to the discussion.'
        },
        {
          id: '05',
          title: 'Credit Sources',
          description: 'When sharing articles, resources, or inspiration, always credit the original creator.'
        },
        {
          id: '06',
          title: 'Respect Privacy',
          description: 'Do not share private conversations, designs, or client work without permission.'
        }
      ],
      faqs: [
        { id: 'q1', question: 'Why should I check guidelines before joining community?', answer: 'Checking guidelines ensures you align with the community values and helps maintain a high-quality environment for all members.' },
        { id: 'q2', question: 'What if I need to discuss a topic listed in guidelines ?', answer: 'You can reach out to any of the community leaders or admins to discuss exceptions or seek clarity on specific topics.' },
        { id: 'q3', question: 'What should i do if i removed from community without my concerns?', answer: 'If you feel you were removed unfairly, you can contact our support or an admin via the help section for a review of your membership.' }
      ]
    }
  },
  {
    id: 'c2',
    name: 'WeCode',
    image: imgFrame659,
    logo: imgWeCodeLogo,
    memberCount: 1200,
    isOnlineOnly: false,
    tags: ['Development', 'Career', 'Mentoring'],
    description: 'A place for developers to connect, share knowledge, and find pair programming partners. We focus on open-source contributions and technical skill building.',
    languages: ['English', 'Hindi'],
    foundedYear: 2022,
    rating: 4.5,
    perks: [
      {
        id: 'p5',
        title: 'Code Review',
        subtitle: 'Senior devs',
        iconType: 'career',
        isFree: false
      },
      {
        id: 'p6',
        title: 'Interview prep.',
        subtitle: 'Technical mocks',
        iconType: 'interview',
        isFree: true
      }
    ],
    reviews: [
      {
        id: 'r4',
        name: 'Rahul K',
        initials: 'RK',
        rating: 5,
        text: "Great community for developers. The code reviews alone are worth it!",
        timeAgo: '1 day ago',
        likes: 8
      }
    ],
    leaders: [
      {
        id: 'l4',
        name: 'CodeMaster',
        role: 'Admin',
        isOnline: true
      }
    ],
    gallery: [],
    guidelines: {
      intro: "Our dev community thrives on collaboration and mutual respect. Please follow these core principles to ensure a great experience for everyone.",
      summaryTitle: "Participation Rules",
      summaryDescription: "To keep our discussions focused and helpful, please adhere to the following:",
      items: [
        {
          id: '01',
          title: 'Code Quality Matters',
          description: 'Always strive for clean, documented, and efficient code when sharing snippets.'
        },
        {
          id: '02',
          title: 'Collaborative Spirit',
          description: 'Be open to feedback and willing to help others with their technical challenges.'
        },
        {
          id: '03',
          title: 'No Language Wars',
          description: 'Respect all programming languages and frameworks. Focus on solving problems rather than debating tool choices.'
        }
      ],
      faqs: [
        { id: 'q1', question: 'How can I contribute to community projects?', answer: 'We have a dedicated projects channel where we list open source and internal projects looking for contributors. Just introduce yourself there!' },
        { id: 'q2', question: 'What is the policy on sharing commercial products?', answer: 'We allow sharing commercial products only if they are genuinely useful to developers and are posted in the designated show-and-tell channel.' }
      ]
    }
  },
  {
    id: 'c3',
    name: 'Designers Hub',
    image: imgFrame660,
    logo: imgFOFLogo,
    memberCount: 850,
    isOnlineOnly: true,
    tags: ['UI/UX', 'Portfolio', 'Design Systems'],
    description: 'Dedicated to designers looking for feedback and inspiration. Regular portfolio reviews and design jams to help you land your dream role.',
    languages: ['English'],
    foundedYear: 2023,
    rating: 4.7,
    perks: [
      {
        id: 'p7',
        title: 'Portfolio Review',
        subtitle: 'Expert feedback',
        iconType: 'portfolio',
        isFree: true
      },
      {
        id: 'p8',
        title: 'Job Referrals',
        subtitle: 'Top startups',
        iconType: 'referral',
        isFree: true
      }
    ],
    reviews: [],
    leaders: [],
    gallery: [],
    guidelines: {
      intro: "Designers Hub is a safe space for creative expression and growth. Our guidelines help maintain this atmosphere.",
      summaryTitle: "Community Standards",
      summaryDescription: "Please keep these points in mind when interacting within the hub:",
      items: [
        {
          id: '01',
          title: 'Constructive Feedback',
          description: 'Always provide specific, actionable, and kind feedback on design work.'
        },
        {
          id: '02',
          title: 'Intellectual Property',
          description: 'Never claim others work as your own. Always give credit to sources and inspirations.'
        },
        {
          id: '03',
          title: 'Diversity in Design',
          description: 'Celebrate different perspectives and design styles from all over the world.'
        }
      ],
      faqs: [
        { id: 'q1', question: 'How do I request a formal portfolio review?', answer: 'You can submit your portfolio link in the #portfolio-review channel. We have weekly sessions where experts provide detailed feedback.' },
        { id: 'q2', question: 'Are there any restrictions on design tools used?', answer: 'No, we celebrate all tools! Whether you use Figma, Adobe XD, Sketch, or even pen and paper, you are welcome here.' }
      ]
    }
  }
];

