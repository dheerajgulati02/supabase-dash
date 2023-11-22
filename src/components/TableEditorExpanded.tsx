import Link from 'next/link';
import { Check, ChevronsUpDown, EditIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';
import { PlusIcon } from '@radix-ui/react-icons';

export default function TableEditorExpanded() {
  const defSchema = ['public', 'auth', 'graphql'];
  return (
    <nav className="border-r border-secondary-foreground h-full">
      <div className=" py-[0.60rem] border-b border-secondary-foreground px-4 text-lg font-medium">
        Table Editor
      </div>
      <div className="border-b border-secondary-foreground p-4 w-fit">
        <SchemaSelector defSchema={defSchema} />
      </div>
      <div className="border-b border-secondary-foreground p-4 ">
        <Button variant="outline" size="sm" className="bg-primary w-full">
          <EditIcon size={16} />
          <p className="px-2">New Table</p>
        </Button>
      </div>
    </nav>
  );
}

export function SchemaSelector({ defSchema }: { defSchema: string[] }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="border-secondary-foreground">
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          className="w-44 justify-between"
        >
          {value
            ? defSchema.find((schema) => schema === value)
            : 'Select Schema...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 ml-16">
        <Command>
          <CommandInput placeholder="Search Schema..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {defSchema.map((schema) => (
              <CommandItem
                key={schema}
                value={schema}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === schema ? 'opacity-100' : 'opacity-0',
                  )}
                />
                {schema}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
        <div className="px-4 py-2">
          <Button size="sm" variant="ghost" className="w-full">
            <PlusIcon />
            <p className="px-2">Create new Schema</p>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
