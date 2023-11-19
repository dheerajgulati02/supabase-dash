import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from './ui/button';
import Image from 'next/image';
import { ReactNode } from 'react';

export type ProjectInfoCardProps = {
  tittle: string;
  description: string;
  numOfrequests: number;
  from: string;
  to: string;
  Icon: () => JSX.Element;
};
export default function ProjectInfoCard({
  tittle,
  description,
  numOfrequests,
  from,
  to,
  Icon,
}: ProjectInfoCardProps) {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>
          <span className="flex justify-between items-center w-fit">
            <Button size="icon" className="bg-secondary border-none">
              <Icon />
            </Button>
            <p className="px-2">{tittle}</p>
          </span>
        </CardTitle>
        <CardDescription className="text-md  text-primary-foreground">
          <h2>{description}</h2>
          <p className="text-lg text-foreground">{numOfrequests}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="max-w-full max-h-full overflow-auto">
          <Image
            src="/graph-demo.png"
            alt="graph"
            width={228}
            height={228}
            className="border-b border-secondary-foreground"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between text-xs text-primary-foreground">
        <p> {from}</p>
        <p> {to}</p>
      </CardFooter>
    </Card>
  );
}
