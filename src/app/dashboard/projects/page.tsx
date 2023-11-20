import Link from 'next/link';

export default function DashboardPage() {
  return (
    <main className="flex w-screen  h-screen">
      <nav className="border-r border-secondary-foreground h-screen z-[-1]">
        <div className="sticky top-0 py-2">Sidebar for Dahsboard</div>
        <Link href="test" />
      </nav>
      <div className="w-full">
        <section>DashBoadr Contents</section>
      </div>
    </main>
  );
}
