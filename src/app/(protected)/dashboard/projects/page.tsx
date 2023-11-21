import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOutIcon } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const myDataFromDb = {
    title: 'test-project',
    serverLoc: 'aws | ap-south-1',
  };
  return (
    <main className="flex w-screen  h-screen">
      <nav className="border-r border-secondary-foreground h-screen z-[-1] w-1/4">
        <div className=" py-[0.60rem] border-b border-secondary-foreground px-4 text-lg font-medium">
          Dashboard
        </div>
        <div className="border-b border-secondary-foreground p-4 ">
          <h5 className="text-primary-foreground text-sm mb-4">Projects</h5>
          <Link href="/dashboard/projects" className=" text-base">
            <p className="ho">All projects</p>
          </Link>
        </div>
        <div className="border-b border-secondary-foreground p-4 ">
          <h5 className="text-primary-foreground text-sm mb-4">
            Organistaions
          </h5>
          <Link href="/" className="text-base">
            My organisations
          </Link>
        </div>
        <div className="border-b border-secondary-foreground p-4 ">
          <h5 className="text-primary-foreground text-sm mb-4">Account</h5>
          <Link href="/dashboard/projects" className="block pb-2 text-base">
            Prefernces
          </Link>
          <Link href="/" className="block py-2text-base">
            Settings
          </Link>
          <Link href="/dashboard/projects" className="block pt-2 text-base">
            Security
          </Link>
        </div>
        <div className="flex justify-start items-center border-b border-secondary-foreground p-4">
          <LogOutIcon size={24} />
          <Link href="/" className="block px-2 text-base">
            Logout
          </Link>
        </div>
      </nav>
      <div className="w-full">
        <div className="p-4 ">
          <Button size="sm" className="bg-accentPr text-foreground">
            New Project
          </Button>
        </div>
        <section className="grid grid-cols-3 p-4">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>
                <span className="flex justify-between items-center w-fit">
                  <a
                    className="text-sm text-foreground hover:text-accentPr"
                    href={`/dashboard/projects/${myDataFromDb.title}`}
                  >
                    {myDataFromDb.title}
                  </a>
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-8">
              <div className=" text-xs text-primary-foreground ">
                {myDataFromDb.serverLoc}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
