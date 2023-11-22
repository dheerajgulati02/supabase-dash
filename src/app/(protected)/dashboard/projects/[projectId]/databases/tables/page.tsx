'use client';
import { SchemaSelector } from '@/components/TableEditorExpanded';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusIcon } from '@radix-ui/react-icons';

export default function Databases() {
  const defSchema = ['public', 'auth', 'graphql'];
  return (
    <div className="w-full h-full p-12">
      <h3 className="py-8 text-lg">Database Tables</h3>
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-start">
          <SchemaSelector defSchema={defSchema} />
          <Input
            className="w-56 mx-4 border-secondary-foreground"
            placeholder="Search Schema"
          />
        </div>
        <Button size="sm" className="bg-accentPr text-foreground">
          <PlusIcon />
          <p className="px-2">New Table</p>
        </Button>
      </div>
    </div>
  );
}
