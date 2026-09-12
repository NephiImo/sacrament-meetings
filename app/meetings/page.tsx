import { headers } from 'next/headers';

import MeetingCard from '@/components/MeetingCard';
import type { SacramentMeeting } from '@/lib/types';

export default async function MeetingsPage() {
  const requestHeaders = await headers();
  const host = requestHeaders.get('host');
  const protocol =
    requestHeaders.get('x-forwarded-proto') ?? 'http';

  const response = await fetch(
    `${protocol}://${host}/api/meetings`,
    { cache: 'no-store' }
  );

  if (!response.ok) {
    throw new Error('Failed to load meetings');
  }

  const meetings: SacramentMeeting[] = await response.json();

  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">
        Sacrament Meetings
      </h1>

      <div className="grid gap-4 md:grid-cols-2">
        {meetings.map((meeting) => (
          <MeetingCard
            key={meeting.id}
            meeting={meeting}
          />
        ))}
      </div>
    </section>
  );
}