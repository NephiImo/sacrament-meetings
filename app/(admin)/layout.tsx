export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <header className="mb-8 border-b pb-4">
        <p className="text-sm font-medium uppercase text-blue-600">
          Leader Administration
        </p>
      </header>

      {children}
    </section>
  );
}