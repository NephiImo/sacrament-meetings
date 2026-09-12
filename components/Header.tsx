export default function Header() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            Lagos Ward
          </h1>
          <p className="text-sm text-gray-600">
            Sacrament Meeting Planner
          </p>
        </div>

        <p className="text-sm text-gray-600">
          {today}
        </p>
      </div>
    </header>
  );
}