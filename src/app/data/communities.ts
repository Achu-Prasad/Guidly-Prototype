import { Community } from '../types/team';
import imgFrame658 from "../../assets/1e75e354c43c87a0770203820c91734645a0e7dc.png";
import imgRectangle373 from "../../assets/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgFrame659 from "../../assets/49c19d0a660fb1c210a97efcc0990bb6f273b443.png";
import imgFrame660 from "../../assets/44d9e67e5e1db7ee4a1cdf3d42e8788b82fd3c55.png";
import imgStolenLogo from "../../assets/Stolen logo.png";
import imgFOFLogo from "../../assets/fof logo.png";
import imgWeCodeLogo from "../../assets/wecode.png";

export const COMMUNITIES: Community[] = [
  {
    id: 'c1',
    name: 'Stolen & Friends',
    image: imgFrame658,
    logo: imgStolenLogo,
    memberCount: 650,
    isOnlineOnly: true,
    tags: ['Study', 'Referrals', 'Mentoring'],
    description: 'Join our vibrant community focused on collaborative learning and professional growth. We host weekly sessions on design and development.',
    languages: ['English', 'Malayalam']
  },
  {
    id: 'c2',
    name: 'WeCode',
    image: imgFrame659,
    logo: imgWeCodeLogo,
    memberCount: 1200,
    isOnlineOnly: false,
    tags: ['Development', 'Career', 'Mentoring'],
    description: 'A place for developers to connect, share knowledge, and find pair programming partners.',
    languages: ['English', 'Hindi']
  },
  {
    id: 'c3',
    name: 'Designers Hub',
    image: imgFrame660,
    logo: imgFOFLogo,
    memberCount: 850,
    isOnlineOnly: true,
    tags: ['UI/UX', 'Portfolio', 'Design Systems'],
    description: 'Dedicated to designers looking for feedback and inspiration. Regular portfolio reviews and design jams.',
    languages: ['English']
  }
];
