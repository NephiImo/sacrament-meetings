import MeetingDetail from '@/components/MeetingDetail';

import { getMeetings } from '@/lib/meetings-db';

export default async function CurrentMeetingPage() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);

  const year = sunday.getFullYear();
  const month = String(sunday.getMonth() + 1).padStart(2, '0');
  const day = String(sunday.getDate()).padStart(2, '0');

  const sundayDate = `${year}-${month}-${day}`;

  const meetings = await getMeetings('', 1, sundayDate);
  const meeting = meetings[0];

  if (!meeting) {
    return (
      <p className="text-gray-600">
        No meeting found for the current Sunday.
      </p>
    );
  }

  return <MeetingDetail meeting={meeting} />;
}