import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 md:grid-cols-2">
      <div>
        <p className="mb-2 font-medium text-blue-600">
          Sacrament Meeting Planner
        </p>

        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Plan and review sacrament meetings
        </h1>

        <p className="mb-6 text-lg text-gray-600">
          View meeting agendas, speakers, hymns, prayers,
          announcements, and other meeting details in one place.
        </p>

        <Link
          href="/meetings"
          className="inline-block rounded-md bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
        >
          View Meetings
        </Link>
      </div>

      <div className="flex justify-center">
        <Image
          src="/globe.svg"
          alt="Globe illustration representing the ward community"
          width={300}
          height={300}
          priority
        />
      </div>
    </section>
  );
}