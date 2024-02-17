"use client"

import { Check, ChevronRightCircle, PlusCircle } from 'lucide-react'
import React, { useState } from 'react'
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
import Image from 'next/image'

import { bannerImages } from '@/data/banners'
import { cn } from '@/lib/utils'


interface Workspace {
  id: string; 
  name: string; 
  description: string | null; 
  createdAt: Date;
}

interface WorkspaceListProps {
  workspaces: Workspace[];
}


const NewWorkspaceBox = ({workspaces} : WorkspaceListProps) => {

    const [workspaceLimitReached, SetWorkspaceLimitReached] = useState(false)

    const [bannerImgUrl,setBannerImageUrl] = useState(bannerImages[0].imageUrl)
    const [selectedImg,setSelectedImg] = useState(bannerImages[0].imageUrl)

    const form = useForm<z.infer<typeof WorkspaceSchema>>({
        resolver: zodResolver(WorkspaceSchema),
        defaultValues: {
          name: "",
          desc: ""
        },
    })

    function toggleSelectedImg(url:string) {
      setSelectedImg(url)
    }

    function onSubmit(values: z.infer<typeof WorkspaceSchema>) {
       addWorkspaceInDB(values)
       
    }

    if(workspaces.length >=6){
      return(
        <div className='border rounded-md overflow-hidden group relative flex flex-col gap-1 items-center justify-center text-center px-4'>
            <h1 className='text-sm font-semibold'>Free limit reached (6)</h1>
            <p className='text-neutral-400 font-medium text-xs'>Delete existing workspaces to create more!</p>
        </div>
      )
    }

    const handleBannerImageClick = (url: string) => {
      setBannerImageUrl(url)
      toggleSelectedImg(url)
    }




  return (
    <Dialog>
        <DialogTrigger className='border hover:border-green-600/50 rounded-md overflow-hidden cursor-pointer group relative flex items-center justify-center flex-col gap-2 hover:text-green-500 transition h-40'>
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

            <div className='flex flex-col space-y-3 mb-1'>
              <h2 className='font-medium text-sm ml-1'>Banner Image</h2>
              <div className='grid grid-cols-3 gap-4 px-1'>
                {bannerImages.map((img) => (
                  <div onClick={() => handleBannerImageClick(img.imageUrl)} key={img.id} className={cn('w-full flex-grow-0 object-contain cursor-pointer flex items-center justify-center group relative overflow-hidden')}>
                    <Image src={img.imageUrl} alt='Banner image' width={1000} height={1000} className='object-contain transition'/>
                    <span className='w-full h-full absolute group-hover:opacity-100 bg-background/50 opacity-0 transition top-0 left-0 text-center flex items-center justify-center text-sm font-medium'>
                      {selectedImg === img.imageUrl ? (<><Check /></>) : (<>{img.label}</>) }
                    </span>
                  </div>
                ))}
              </div>
            </div>

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