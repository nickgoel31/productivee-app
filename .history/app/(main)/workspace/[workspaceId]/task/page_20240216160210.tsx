import { Button } from '@/components/ui/button'
import { getWorkspaceById } from '@/data/workspaces'
import { getAllLegacyTasksInWS } from '@/helpers/getLegacyTask'
import { LegacyTask, SubTask } from '@/types/legacy-task'
import { auth } from '@clerk/nextjs'
import { StepBack } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import NewLegacyTask from '../_components/legacy-task/new-legacy-task'
import NewTodoAdd from '@/app/(main)/_components/new-todo-add'
import LegacyTaskCard from '../_components/legacy-task/legacy-task-card'
import {motion} from "framer-motion"
import { ScrollArea } from '@/components/ui/scroll-area'
import { getAllSubTasks, getAllSubTasksByTaskId } from '@/helpers/getSubTask'
import { subtle } from 'crypto'

const TasksPage = async ({params}: {params: {workspaceId:string}}) => {

    const {workspaceId} = params;
    const {userId} = auth()

    if(!userId) return;

    const tasks: LegacyTask[] | null = await getAllLegacyTasksInWS(workspaceId)
    const subTasks: SubTask[] | null = await getAllSubTasks()

    let sortedTasks:LegacyTask[] = []

    if(tasks){
      sortedTasks = tasks.sort((a,b)=> new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf())
    }



  return (
    <ScrollArea className='h-full w-full pr-10 '>
    <div className='flex flex-col gap-6 py-6 w-full h-full'>
       <div className='flex items-center w-full justify-between'>
        <div className='space-y-1'>
          <h2 className='text-2xl font-semibold'>Tasks <span className='text-sm font-medium text-muted-foreground'>(Legacy)</span></h2>
          <p className='text-sm text-muted-foreground'>
            Tasks are no longer being maintained, you can now use&nbsp;
            <Link href={`/workspace/${workspaceId}/kanban`} className='underline underline-offset-1'>Kanban Boards</Link>
            &nbsp;for better productivity.
          </p>
        </div>

        <div className='flex gap-4 items-center'>
        <Button variant={"outline"} asChild>
          <Link href={`/workspace/${workspaceId}`}>
            <StepBack size={17} className='mr-1'/> 
            Go back
          </Link>
        </Button>
        </div>
      </div>

      <div className=' w-full h-full flex flex-col items-center py-6 gap-5'>
        {tasks?.length === 0 ? (
          <div className="flex flex-col items-center gap-2 mt-6 text-neutral-400 ">
            {/* <Cat size={72} /> */}
            <h3 className=" font-medium text-sm text-center">No tasks found in this workspace! Click on add a task to get started.</h3>
          </div>
          ):(
            <div className='w-full max-w-screen-md flex flex-col gap-3'>
              {sortedTasks?.map((t) => (
                <LegacyTaskCard task={t} subtasks={subTasks?.filter(st => st.legacyTaskId === t.id)}/>
              ))}
            </div>
          )}

        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <NewLegacyTask workspaceId={workspaceId}/>
        </div>
        {/* <NewTodoAdd workspaceId={workspace.id}/> */}
      </div>
    </div>
    </ScrollArea>
  )
}

export default TasksPage