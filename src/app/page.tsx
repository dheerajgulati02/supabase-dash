'use client';
import { useState } from 'react';
import { formSchema } from '@/utils/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  AuthenticationIcon,
  DatabaseIcon,
  StorageIcon,
} from '@/components/Icons';

export default function Home() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.username === 'admin' && values.password === 'admin123') {
      router.push('/dashboard/projects');
      return;
    }
  }
  return (
    <main className="w-screen h-screen">
      <nav className="flex justify-between px-8 py-2 items-center ">
        <div className="flex justify-between items-center">
          <Image
            src="/supabase-logo.svg"
            alt="Supabase Logo"
            width={24}
            height={24}
          />
          <h1 className="px-2 font-bold text-lg">supabase</h1>
        </div>
        <div className="hidden md:flex justify-evenly items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                  Projects
                </NavigationMenuTrigger>
                <NavigationMenuContent className="">
                  <NavigationMenuLink className="flex justify-start items-center border-none bg-primary px-4 py-2">
                    <DatabaseIcon />
                    <p className="hover:text-accentPr duration-200 mx-4">
                      Database
                    </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink className="flex justify-start items-center border-none bg-primary px-4 py-2">
                    <AuthenticationIcon />
                    <p className="hover:text-accentPr duration-200 mx-4">
                      Auth
                    </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink className="flex justify-start items-center border-none bg-primary px-4 py-2">
                    <StorageIcon />
                    <p className="hover:text-accentPr duration-200 mx-4">
                      Storage
                    </p>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <span className="px-2">
            <p className="text-md hover:text-accentPr">Developers</p>
          </span>
          <span className="px-2">
            <p className="text-md hover:text-accentPr">Documentation</p>
          </span>
        </div>
        <div>
          <Button
            onClick={() => router.push('/dashboard/projects')}
            variant="default"
            size="sm"
            className="bg-accentPr hover:bg-[hsl(152,47%,36%)] border border-secondary text-gray-200 "
          >
            Dashboard
          </Button>
        </div>
      </nav>
      <div className="flex justify-center items-center py-4 sm:mt-4  md:mt-8 w-full px-2 ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 w-full md:w-1/2 lg:w-1/5"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="username" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mt-0">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" {...field} />
                  </FormControl>
                  <FormDescription>Your password here.</FormDescription>
                  <FormMessage />

                  <Button type="submit" className="bg-accentPr text-foreground">
                    Submit
                  </Button>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </main>
  );
}
