import Dashboard from '@/components/Dashboard';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function DashboardPage() {
  return (
    <main>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <section>
            <Dashboard />
          </section>
        </div>
      </div>
    </main>
  );
}
