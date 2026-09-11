import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-09-06',
    meetingType: 'testimony',
    presiding: 'Bishop Adeyemi',
    conducting: 'Brother Okafor',
    announcements: ['Ward temple preparation class after church'],
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister James',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 169,
      title: 'As Now We Take the Sacrament',
    },
    speakers: [
      {
        name: 'Ward Members',
        topic: 'Testimonies',
        type: 'speaker',
      },
    ],
    closingHymn: { number: 89, title: 'The Lord Is My Light' },
    closingPrayer: 'Brother Samuel',
  },
  {
    id: 2,
    date: '2026-08-30',
    meetingType: 'regular',
    presiding: 'Bishop Adeyemi',
    conducting: 'Brother Okafor',
    announcements: ['Youth activity on Saturday'],
    openingHymn: { number: 85, title: 'How Firm a Foundation' },
    openingPrayer: 'Sister Grace',
    wardBusiness: [
      { description: 'Sustaining of a new Sunday School teacher' },
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 172,
      title: 'In Humility, Our Savior',
    },
    speakers: [
      {
        name: 'Brother Daniel',
        topic: 'Faith in Jesus Christ',
        type: 'speaker',
      },
      {
        name: 'Ward Choir',
        topic: '',
        type: 'musical-number',
      },
    ],
    closingHymn: { number: 134, title: 'I Believe in Christ' },
    closingPrayer: 'Sister Ruth',
  },
  {
    id: 3,
    date: '2026-08-23',
    meetingType: 'regular',
    presiding: 'Bishop Adeyemi',
    conducting: 'Brother Peter',
    announcements: ['Ward service project next Saturday'],
    openingHymn: { number: 6, title: 'Redeemer of Israel' },
    openingPrayer: 'Brother John',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: {
      number: 196,
      title: 'Jesus, Once of Humble Birth',
    },
    speakers: [
      {
        name: 'Sister Esther',
        topic: 'Ministering',
        type: 'speaker',
      },
      {
        name: 'Brother Michael',
        topic: 'Discipleship',
        type: 'speaker',
      },
    ],
    closingHymn: { number: 301, title: 'I Am a Child of God' },
    closingPrayer: 'Sister Mary',
  },
  {
    id: 4,
    date: '2026-08-16',
    meetingType: 'stake',
    presiding: 'President Williams',
    conducting: 'Bishop Adeyemi',
    announcements: ['Stake conference next month'],
    openingHymn: { number: 5, title: 'High on the Mountain Top' },
    openingPrayer: 'Brother Joseph',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 169, title: 'As Now We Take the Sacrament' },
    speakers: [
      {
        name: 'President Williams',
        topic: 'Following Jesus Christ',
        type: 'speaker',
      },
    ],
    closingHymn: { number: 220, title: 'Lord, I Would Follow Thee' },
    closingPrayer: 'Sister Sarah',
  },
  {
    id: 5,
    date: '2026-08-09',
    meetingType: 'regular',
    presiding: 'Bishop Adeyemi',
    conducting: 'Brother Peter',
    announcements: ['Family history workshop this week'],
    openingHymn: { number: 58, title: 'Come, Ye Children of the Lord' },
    openingPrayer: 'Sister Hannah',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 181,
      title: 'Jesus of Nazareth, Savior and King',
    },
    speakers: [
      {
        name: 'Brother David',
        topic: 'Temple Worship',
        type: 'speaker',
      },
    ],
    closingHymn: { number: 292, title: 'O My Father' },
    closingPrayer: 'Brother Paul',
  },
];

export function getMeetings(
  date?: string | null
): SacramentMeeting[] {
  if (date) {
    return meetings.filter((meeting) => meeting.date === date);
  }

  return meetings;
}

export function getMeetingById(
  id: number
): SacramentMeeting | null {
  return meetings.find((meeting) => meeting.id === id) ?? null;
}