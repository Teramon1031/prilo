"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const blockFormSchema = z.object({
  //   username: z.string().min(2, {
  //     message: "Username must be at least 2 characters.",
  //   }),
  type: z.enum(["h2", "h3", "p"]),
  content: z.string(),
  blockId: z.string(),
});

export type BlockContent = {
  type: "h2" | "h3" | "p";
  content: string;
  blockId: string;
};

export const BlockForm = ({ blockContent }: { blockContent: BlockContent }) => {
  const form = useForm<z.infer<typeof blockFormSchema>>({
    resolver: zodResolver(blockFormSchema),
    defaultValues: blockContent,
  });

  function onSubmit(values: z.infer<typeof blockFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Input placeholder="write" {...field} />
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
};
