'use client';
import SelectProject from './SelectProjects';
import SelectOrganisation from './SelectOrganisation';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import { Separator } from './ui/separator';
import { ModeToggle } from './ThemeModeToggle';

const Navbar = () => {
  const currPath = usePathname();
  if (currPath === '/') return;
  const currPathLgth = currPath.split('/');
  const myProjectId = currPathLgth[currPathLgth.length - 1];
  console.log(myProjectId);

  return (
    <nav className="bg-background flex justify-between items-center p-4 w-full h-12 sticky top-0 border-b border-secondary-foreground">
      <section className="flex justify-between items-center ">
        <SelectOrganisation />
        <p className="text-primary-foreground px-2 ">/</p>
        <SelectProject projectName={myProjectId} />
      </section>
      <section className="flex justify-between items-center ">
        <span className="px-2 border-secondary-foreground">
          <ModeToggle />
        </span>
        <Button
          variant="outline"
          size="sm"
          className="bg-primary mx-2 border border-secondary"
        >
          <div className="pr-2 text-primary-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
          </div>
          Help
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-primary mx-2 border border-secondary"
        >
          <div className="pr-2 text-primary-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
              />
            </svg>
          </div>
          Feedback
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-primary mx-2 border border-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </Button>
      </section>
    </nav>
  );
};

export default Navbar;
