import { headers } from 'next/headers';
import { notFound } from 'next/navigation';

import MeetingDetail from '@/components/MeetingDetail';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MeetingPage({
  params,
}: MeetingPageProps) {
  const { id } = await params;

  const requestHeaders = await headers();
  const host = requestHeaders.get('host');
  const protocol =
    requestHeaders.get('x-forwarded-proto') ?? 'http';

  const response = await fetch(
    `${protocol}://${host}/api/meetings/${id}`,
    { cache: 'no-store' }
  );

  if (response.status === 404 || response.status === 400) {
    notFound();
  }

  if (!response.ok) {
    throw new Error('Failed to load meeting');
  }

  const meeting: SacramentMeeting = await response.json();

  return <MeetingDetail meeting={meeting} />;
}