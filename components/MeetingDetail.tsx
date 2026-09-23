import PrintButton from '@/components/PrintButton';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({
  meeting,
}: MeetingDetailProps) {
  return (
    <article className="space-y-6 rounded-lg border bg-white p-6 shadow-sm">
      <header>
        <p className="text-sm font-medium uppercase text-blue-600">
          {meeting.meetingType}
        </p>

        <h1 className="text-3xl font-bold text-gray-900">
          Sacrament Meeting
        </h1>

        <p className="text-gray-600">{meeting.date}</p>
        
        <div className="mt-4">
          <PrintButton />
        </div>
      </header>

      <section>
        <h2 className="text-xl font-bold text-gray-900">
          Leadership
        </h2>
        <p className="text-gray-700">
          Presiding: {meeting.presiding}
        </p>
        <p className="text-gray-700">
          Conducting: {meeting.conducting}
        </p>
      </section>

      {meeting.announcements && meeting.announcements.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-gray-900">
            Announcements
          </h2>

          <ul className="list-disc pl-5 text-gray-700">
            {meeting.announcements.map((announcement) => (
              <li key={announcement}>{announcement}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="space-y-2 text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">
          Opening
        </h2>

        <p>
          Opening Hymn: #{meeting.openingHymn.number}{' '}
          {meeting.openingHymn.title}
        </p>

        <p>Opening Prayer: {meeting.openingPrayer}</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900">
          Ward Business
        </h2>

        {meeting.wardBusiness.length > 0 ? (
          <ul className="list-disc pl-5 text-gray-700">
            {meeting.wardBusiness.map((item) => (
              <li key={item.description}>{item.description}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">None</p>
        )}

        <p className="mt-2 text-gray-700">
          Stake Business: {meeting.stakeBusiness ? 'Yes' : 'No'}
        </p>
      </section>

      <section className="space-y-2 text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">
          Sacrament
        </h2>

        <p>
          Sacrament Hymn: #{meeting.sacramentHymn.number}{' '}
          {meeting.sacramentHymn.title}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900">
          Program
        </h2>

        <ul className="space-y-3 text-gray-700">
          {meeting.speakers.map((item, index) => (
            <li key={`${item.name}-${index}`}>
              <strong>
                {item.type === 'musical-number'
                  ? 'Musical Number'
                  : 'Speaker'}
                :
              </strong>{' '}
              {item.name}
              {item.topic && ` — ${item.topic}`}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-2 text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">
          Closing
        </h2>

        <p>
          Closing Hymn: #{meeting.closingHymn.number}{' '}
          {meeting.closingHymn.title}
        </p>

        <p>Closing Prayer: {meeting.closingPrayer}</p>
      </section>
    </article>
  );
}