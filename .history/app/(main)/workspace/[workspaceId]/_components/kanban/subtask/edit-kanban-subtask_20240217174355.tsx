"use client"

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { KanbanSubtask } from '@/types/kanban';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ComboboxKanbanTask } from '@/components/ui/combo-box';
import { Button } from '@/components/ui/button';
import { useKanbanTasks } from '@/hooks/useKanbanTasks';
import { editKanbanSubtaskInDB } from '@/actions/kanban-subtasks/edit-kanban-subtask';

interface Props{
    subtask: KanbanSubtask;
    workspaceId: string;
}

const editSubTaskSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required to create a task!"
    }),
    priority: z.number()
})

const EditKanbanSubtask = ({subtask,workspaceId}:Props) => {

    const form = useForm<z.infer<typeof editSubTaskSchema>>({
        resolver: zodResolver(editSubTaskSchema),
        defaultValues: {
            title: subtask.title,
            priority: Number(subtask.priority)
        }
    })

    const {isValid} = form.formState;

    const handleEditSubTaskSubmit = (values: z.infer<typeof editSubTaskSchema>) => {
        values.priority = Number(values.priority)
        editKanbanSubtaskInDB(values, subtask.id)
        console.log(values)
    }

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

           <Form {...form}>
            <form onSubmit={form.handleSubmit(handleEditSubTaskSubmit)} className='space-y-3'>
                <div className='space-y-1'>
                    <Label>Subtask ID</Label>
                    <Input className='h-9' type='text' disabled value={subtask.id} />
                </div>

                <FormField
                    control={form.control}
                    name="title"
                    render={({field}) => (
                        <FormItem className='space-y-1'>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input type='text' placeholder='eg- make a new navbar' {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="priority"
                    render={({field}) => (
                        <FormItem className='space-y-1'>
                            <FormLabel>Priority</FormLabel>
                            <FormControl>
                                <Input type='number' min="1" max="10" placeholder='default value: 1' {...field} 
                                onChange={(e) => field.onChange(Number(e.target.value))}/>
                            </FormControl>
                            <FormDescription className='px-1 text-xs mt-1'>
                                Priority is a number from 1 to 10. Higher the number, higher the priority
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className='space-y-1'>
                    <Label>Parent Task</Label>
                    <ComboboxKanbanTask workspaceId={workspaceId} activeTaskId={subtask.taskId}/>
                    <FormDescription className='px-1 text-xs mt-1'>
                        Changing the task functionality coming soon!
                    </FormDescription>
                </div>

                <div className='w-full flex items-center justify-end pt-2'>
                    <DialogClose disabled={!isValid}>
                        <Button type='submit' >
                            Edit subtask
                        </Button>
                    </DialogClose>
                </div>
                
            </form>
           </Form>
        </DialogContent>
    </Dialog>
  )
}

export default EditKanbanSubtask