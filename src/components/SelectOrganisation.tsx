'use client';

import * as React from 'react';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';

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

const organisations = [
  {
    value: 'Md Izaan Anwar',
    label: 'Izaan',
  },
];

export default function SelectOrganisation() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        asChild
        className="border-none hover:bg-popover hover:text-foreground"
      >
        <Button
          size="sm"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value ? (
            <div className="flex justify-between w-full text-xs">
              <>
                {
                  organisations.find(
                    (organisation) => organisation.value === value,
                  )?.label
                }
              </>
              <span className="flex justify-center rounded-full border px-2  text-xs items-center text-center">
                Free
              </span>
            </div>
          ) : (
            <div className="flex justify-between w-full">
              <p>Izaan</p>
              <span className="flex justify-center border-secondary-foreground rounded-full border px-2  text-xs items-center text-center">
                Free
              </span>
            </div>
          )}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Organisations..." className="h-9" />
          <CommandEmpty>No organisation found.</CommandEmpty>
          <CommandGroup>
            {organisations.map((organisation) => (
              <CommandItem
                key={organisation.value}
                value={organisation.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                {organisation.label}
                <CheckIcon
                  className={cn(
                    'ml-auto h-4 w-4',
                    value === organisation.value ? 'opacity-100' : 'opacity-0',
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
