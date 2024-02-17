"use client"

import { ChevronRightCircle, PlusCircle } from 'lucide-react'
import React from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
 
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { WorkspaceSchema } from '@/schemas'
import { addWorkspaceInDB } from '@/actions/add-workspace'

  

const NewWorkspaceBox = () => {

    const form = useForm<z.infer<typeof WorkspaceSchema>>({
        resolver: zodResolver(WorkspaceSchema),
        defaultValues: {
          name: "",
          desc: ""
        },
    })

    function onSubmit(values: z.infer<typeof WorkspaceSchema>) {
       addWorkspaceInDB(values)
    }


  return (
    <Dialog>
        <DialogTrigger className='border hover:border-green-600/50 rounded-md overflow-hidden cursor-pointer group relative flex items-center justify-center flex-col gap-2 hover:text-green-500 transition'>
            <PlusCircle size={20}/>
            <h2 className='font-medium text-sm'>New workspace</h2>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Create new workspace</DialogTitle>
            <DialogDescription>
                By clicking on create, a new workspace will be created.
            </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
                <FormField 
                  control={form.control}
                  name="name"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel className='font-medium text-sm ml-1'>Name*</FormLabel>
                      <FormControl>
                        <Input placeholder="eg- TWJ" {...field}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField 
                  control={form.control}
                  name="desc"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel className='font-medium text-sm ml-1'>Description <span className='text-neutral-400'>{"(optional)"}</span></FormLabel>
                      <FormControl>
                        <Input placeholder="eg- an AI Company" {...field}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className='w-full flex gap-4 items-center justify-end pt-2'>
                    <DialogClose>
                        <Button variant={"outline"}>Cancel</Button>
                    </DialogClose>
                    <DialogClose>

                      <Button type='submit' variant={"default"}>Create</Button>
                    </DialogClose>
                </div>
              </form>
            </Form>

        </DialogContent>
    </Dialog>
  )
}

export default NewWorkspaceBox