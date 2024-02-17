"use client"

import { Button } from '@/components/ui/button'
import { Column, Id, Task } from '@/types/kanban'
import React, { useMemo, useState } from 'react'
import KanbanColumn from '../_components/kanban/kanban-column'
import { DndContext, DragEndEvent, DragOverEvent, DragOverlay, DragStartEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import { createPortal } from 'react-dom'
import KanbanCard from '../_components/kanban/kanban-card'
import { addTaskInDB } from '@/actions/tasks/add-task'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

const formSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
})

interface IParams{
  workspaceId: string;
}


const KanbanPage = ({params}: {params:IParams}) => {

  const {workspaceId} = params;

  const [columns,setColumns] = useState<Column[]>(columnsInitial);
  const [tasks,setTasks] = useState<Task[]>([]);

  const [activeTask, setActiveTask] = useState<Task | null>(null)

  const sensors = useSensors(useSensor(PointerSensor, {
    activationConstraint: {
      distance: 3 // 3px
    }
  }))

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
     title: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    addTaskInDB(values, workspaceId)

    setTasks([...tasks])
  }

  return (
    <div className='py-6 flex flex-col gap-6 pr-9'>
      <div className='flex items-center w-full justify-between'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-2xl font-semibold'>Kanban Board</h2>
          <p className='text-muted-foreground text-sm'>A simple draggable and resizable kanban board.</p>
        </div>

        <Dialog>
          <DialogTrigger>
            <Button variant={"outline"}>Add a new task +</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a task</DialogTitle>
              <DialogDescription>by  entering the details below</DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                <FormField 
                  control={form.control}
                  name="title"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input autoFocus placeholder='Add task' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Add task</Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <DndContext sensors={sensors} onDragStart={onDragStart} onDragEnd={onDragEnd} onDragOver={onDragOver}>
        <div className='md:grid-cols-4 grid grid-cols-1 gap-8 h-full min-h-[700px] w-full'>
            {columns.map((col) => (
              <KanbanColumn 
                key={col.id} 
                column={col}
                tasks={tasks.filter(t => t.columnId === col.id)}
              />
            ))}
        </div>

        {createPortal(
          <DragOverlay>
          {activeTask && <KanbanCard task={activeTask} />}
        </DragOverlay>, document.body
        )}
      </DndContext>


    </div>
  )

  function onDragStart(e: DragStartEvent){

    if(e.active.data.current?.type === "Task"){
      setActiveTask(e.active.data.current.task)
    }
  }

  function onDragOver(e: DragOverEvent){
    const {active,over} = e;

    if(!over) return;

    const activeId = active.id;
    const overId = over.id

    if(activeId === overId) return;

    const isActiveATask = active.data.current?.type === "Task";
    const isOverATask = over.data.current?.type === "Task";

    if(!isActiveATask) return;

    //DROPPING A TASK OVER ANOTHER TASK
    if(isActiveATask && isOverATask){
      setTasks(tasks => {
        const activeIndex = tasks.findIndex(t => t.id === activeId);
        const overIndex = tasks.findIndex(t => t.id === overId);
        
        tasks[activeIndex].columnId = tasks[overIndex].columnId;

        return arrayMove(tasks, activeIndex, overIndex);
      })
    }

    const isOverAColumn = over.data.current?.type === "Column"


    //DROPPING A TASK OVER A COLUMN
    if(isActiveATask && isOverAColumn){

      setTasks(tasks => {
        const activeIndex = tasks.findIndex(t => t.id === activeId);
        
        tasks[activeIndex].columnId = overId;

        return arrayMove(tasks, activeIndex, activeIndex);
      })


    }

  }

  function onDragEnd(e: DragEndEvent){
    setActiveTask(null);
  }

}

export default KanbanPage


const columnsInitial = [
  {
    id: 1,
    title: "ON HOLD",
    headingColor: "text-neutral-500"
  },
  {
    id: 2,
    title: "TODO",
    headingColor: "text-yellow-300/80"
  },
  {
    id: 3,
    title: "IN PROGRESS",
    headingColor: "text-blue-400/80"
  },
  {
    id: 4,
    title: "COMPLETED",
    headingColor: "text-green-400/80"
  },
]