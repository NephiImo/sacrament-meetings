import NavLinks from '@/components/NavLinks';

export default function MeetingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-8 border-b pb-4">
        <NavLinks />
      </div>

      {children}
    </div>
  );
}