'use client';
import ProjectInfoCard from '@/components/ProjectInfoCard';
import {
  AuthkeyIcon,
  DatabaseIcon,
  RealTimeIcon,
  StatusIcon,
  StorageBucketIcon,
} from '@/components/Icons';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTheme } from 'next-themes';

export default function MyProject() {
  const theme = useTheme();
  return (
    <div className="p-8">
      <div className="flex justify-between items-center py-8">
        <h1 className="text-xl font-semibold">Test Project</h1>
        <div className="flex items-center justify-center">
          <Button
            variant="outline"
            size="sm"
            className="bg-primary border border-secondary"
          >
            <StatusIcon color="#3ecf8e" />
            <p className="px-2">Project Status</p>
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center w-fit my-4 ">
        <Select>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="60 min">60 min</SelectItem>
            <SelectItem value="24 hour">24 hours</SelectItem>
            <SelectItem value="7 days">7 days</SelectItem>
          </SelectContent>
        </Select>
        <p className="px-2 text-xs">Statistics for last 24 hours.</p>
      </div>
      <section className="grid grid-cols-4">
        <span className="mr-2">
          <ProjectInfoCard
            theme={theme.theme as string}
            tittle="Database"
            description="REST Requests"
            numOfrequests={378}
            from="Nove 2, 4pm"
            to="Nov 3, 11pm"
            Icon={DatabaseIcon}
          />
        </span>
        <span className="mx-2">
          <ProjectInfoCard
            tittle="Auth"
            theme={theme.theme as string}
            description="Auth Requests"
            numOfrequests={378}
            from="Nove 2, 4pm"
            to="Nov 3, 11pm"
            Icon={AuthkeyIcon}
          />
        </span>
        <span className="mx-2">
          <ProjectInfoCard
            theme={theme.theme as string}
            tittle="Storage"
            description="Storage Requests"
            numOfrequests={378}
            from="Nove 2, 4pm"
            to="Nov 3, 11pm"
            Icon={StorageBucketIcon}
          />
        </span>
        <span className="mx-2">
          <ProjectInfoCard
            theme={theme.theme as string}
            tittle="Realtime"
            description="Realtime Requests"
            numOfrequests={378}
            from="Nove 2, 4pm"
            to="Nov 3, 11pm"
            Icon={RealTimeIcon}
          />
        </span>
      </section>
    </div>
  );
}
