import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TableEditor() {
  return (
    <div className="flex justify-center items-center w-full h-full p-16">
      <Card className="col-span-1 mt-8">
        <CardHeader>
          <CardTitle>
            <h5>Table Editor</h5>
          </CardTitle>
        </CardHeader>
        <CardContent className="">
          <div className=" text-xs text-primary-foreground ">
            <p>There are no tables available in this Schema</p>
            <Button size="sm" className="bg-accentPr text-foreground mt-4">
              Create Table
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
