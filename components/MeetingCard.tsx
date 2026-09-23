import Link from 'next/link';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({
  meeting,
}: MeetingCardProps) {
  return (
    <article className="rounded-lg border bg-white p-5 shadow-sm">
      <p className="text-sm font-medium uppercase text-blue-600">
        {meeting.meetingType}
      </p>

      <h2 className="mt-1 text-xl font-bold text-gray-900">
        {meeting.date}
      </h2>

      <p className="mt-2 text-gray-600">
        Conducting: {meeting.conducting}
      </p>

      <Link
        href={`/meetings/${meeting.id}`}
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        View Meeting
      </Link>
    </article>
  );
}