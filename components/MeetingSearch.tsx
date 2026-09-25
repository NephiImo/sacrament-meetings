'use client';

import {
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export function MeetingSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    params.set('page', '1');

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    push(`${pathname}?${params.toString()}`);
  }, 700);

  return (
    <input
      key={searchParams.get('query') ?? ''}
      type="search"
      placeholder="Search by speaker, leader, or meeting type..."
      defaultValue={searchParams.get('query')?.toString()}
      onChange={(event) => handleSearch(event.target.value)}
      aria-label="Search meetings"
      className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 outline-none focus:border-blue-500"
    />
  );
}