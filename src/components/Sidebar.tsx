'use client';
import Image from 'next/image';
import {
  AuthenticationIcon,
  DatabaseIcon,
  EdgeIcon,
  HomeIcon,
  SQLEditorIcon,
  StorageIcon,
  TablesIcon,
} from '@/components/Icons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import TableEditorExpanded from './TableEditorExpanded';
import DatabaseExpanded from './DatabaseExpanded';

const Sidebar = () => {
  const currPath = usePathname();
  const [tableEditorVisible, setTableEditorVisible] = useState(false);
  const [databaseVisible, setDatabaseVisible] = useState(false);
  const router = useRouter();
  if (currPath === '/dashboard/projects') {
    return;
  }

  const toggleTableEditor = () => {
    setTableEditorVisible(!tableEditorVisible);
    setDatabaseVisible(false);
  };

  const toggleDatabase = () => {
    setDatabaseVisible(!databaseVisible);
    setTableEditorVisible(false);
  };
  const myProjectId = 'test-project';

  return (
    <nav
      className={` flex justify-between
        min-h-screen   ${
          tableEditorVisible ||
          databaseVisible ||
          'border-r border-secondary-foreground'
        }`}
    >
      <div className="border-r h-full border-secondary-foreground px-2 w-fit">
        <div className="sticky top-0 py-2">
          <div className="p-1">
            <Link href="/">
              <Image
                src="/supabase-logo.svg"
                alt="supabase logo"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <section className="py-3">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    size="icon"
                    className={
                      currPath === `/dashboard/projects/${myProjectId}`
                        ? 'bg-secondary'
                        : 'bg-background'
                    }
                    onClick={() => {
                      setTableEditorVisible(false);
                      setDatabaseVisible(false);
                      router.push(`/dashboard/projects/${myProjectId}`);
                    }}
                  >
                    <HomeIcon />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Home</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Separator
              orientation="horizontal"
              className="my-2 bg-secondary-foreground"
            />

            <div className="my-2">
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      size="icon"
                      className={
                        currPath === `/dashboard/projects/${myProjectId}/editor`
                          ? 'bg-secondary'
                          : 'bg-background'
                      }
                      onClick={(e) => {
                        toggleTableEditor();
                        router.push(
                          `/dashboard/projects/${myProjectId}/editor`,
                        );
                      }}
                    >
                      <TablesIcon />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Table Editor</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="my-2">
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      size="icon"
                      className={
                        currPath ===
                        `/dashboard/projects/${myProjectId}/sql-editor`
                          ? 'bg-secondary'
                          : 'bg-background'
                      }
                    >
                      <SQLEditorIcon />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>SQL Editor</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Separator
              orientation="horizontal"
              className="my-2 bg-secondary-foreground"
            />

            <div className="my-2">
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      size="icon"
                      className={
                        currPath ===
                        `/dashboard/projects/${myProjectId}/databases/tables`
                          ? 'bg-secondary'
                          : 'bg-background'
                      }
                      onClick={(e) => {
                        toggleDatabase();
                        router.push(
                          `/dashboard/projects/${myProjectId}/databases/tables`,
                        );
                      }}
                    >
                      <DatabaseIcon />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Database</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="my-2">
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      size="icon"
                      className={
                        currPath === `/dashboard/projects/${myProjectId}/auth`
                          ? 'bg-secondary'
                          : 'bg-background'
                      }
                    >
                      <AuthenticationIcon />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Authentication</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="my-2">
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      size="icon"
                      className={
                        currPath ===
                        `/dashboard/projects/${myProjectId}/storage`
                          ? 'bg-secondary'
                          : 'bg-background'
                      }
                    >
                      <StorageIcon />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Storage</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="my-2">
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      size="icon"
                      className={
                        currPath === `/dashboard/projects/${myProjectId}/edge`
                          ? 'bg-secondary'
                          : 'bg-background'
                      }
                    >
                      <EdgeIcon />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Edge Function</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Separator
              orientation="horizontal"
              className="my-2 bg-secondary-foreground"
            />
          </section>
        </div>
      </div>
      <div
        className={`${
          tableEditorVisible || databaseVisible
            ? 'hidden md:block  w-52'
            : 'hidden'
        }`}
      >
        {tableEditorVisible && !databaseVisible && <TableEditorExpanded />}
        {databaseVisible && !tableEditorVisible && <DatabaseExpanded />}
      </div>
    </nav>
  );
};

export default Sidebar;
