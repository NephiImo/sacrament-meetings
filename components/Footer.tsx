export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="mx-auto max-w-5xl px-4 py-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Sacrament Meeting Planner
        </p>
      </div>
    </footer>
  );
}