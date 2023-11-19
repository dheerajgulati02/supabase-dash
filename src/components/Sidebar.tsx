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

const Sidebar = async () => {
  return (
    <nav className="w-[4%] px-2 min-h-screen border-r  border-secondary-foreground">
      <div className="sticky top-0 py-2">
        <div className="p-1">
          <Image
            src="supabase-logo.svg"
            alt="supabase logo"
            width={24}
            height={24}
          />
        </div>
        <section className="py-3">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <Button size="icon" className="bg-background">
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
                  <Button size="icon" className="bg-background">
                    <TablesIcon />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Tables</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="my-2">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <Button size="icon" className="bg-background">
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
                  <Button size="icon" className="bg-background">
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
                  <Button size="icon" className="bg-background">
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
                  <Button size="icon" className="bg-background">
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
                  <Button size="icon" className="bg-background">
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
    </nav>
  );
};

export default Sidebar;
