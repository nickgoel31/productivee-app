"use client"

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { KanbanSubtask } from '@/types/kanban';
import React from 'react'

interface Props{
    subtask: KanbanSubtask;
  }

const EditKanbanSubtask = ({subtask}:Props) => {
  return (
    <Dialog>
        <DialogTrigger>
            <button className='rounded border text-xs font-medium p-1.5 px-3 hover:bg-neutral-500/20 transition'>Edit</button>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit "{subtask.title}"</DialogTitle>
                <DialogDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </DialogDescription>
            </DialogHeader>

            <form>
                <div className='space-y-1'>
                    <Label>Subtask ID</Label>
                    <Input className='h-9' type='text' disabled value={subtask.id} />
                </div>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default EditKanbanSubtask