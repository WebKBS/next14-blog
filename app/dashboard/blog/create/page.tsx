'use client';

import { zodResolver } from '@hookform/resolvers/zod';
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
import { Switch } from '@/components/ui/switch';
import { toast } from '@/components/ui/use-toast';
import { EyeOpenIcon, RocketIcon, StarIcon } from '@radix-ui/react-icons';
import { BsSave } from 'react-icons/bs';

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export default function BlogForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full border rounded-md space-y-6"
      >
        <div className="p-5 flex gap-5 items-center flex-wrap">
          <span
            role="button"
            tabIndex={0}
            className="flex items-center gap-1 border bg-zinc-700 p-2 rounded-md hover:ring-2 transition-all hover:ring-zinc-400"
          >
            <EyeOpenIcon />
            Preview
          </span>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center gap-1 border bg-zinc-700 p-2 rounded-md">
                    <StarIcon />
                    <span>Premium</span>
                    <Switch />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center gap-1 border bg-zinc-700 p-2 rounded-md">
                    <RocketIcon />
                    <span>Publish</span>
                    <Switch />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="flex items-center gap-1">
            <BsSave /> Save
          </Button>
        </div>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
