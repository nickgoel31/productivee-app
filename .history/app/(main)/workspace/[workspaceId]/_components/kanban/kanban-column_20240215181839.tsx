"use client"

import { Column, Task } from '@/types/kanban'
import React from 'react'
import KanbanTaskCard from './kanban-task-card'
import { Button } from '@/components/ui/button';
import { deleteCompletedTasks } from '@/actions/tasks/delete-task';

interface Props{
    col: Column
    tasks: Task[];
    workspaceId: string;
}

const KanbanColumn = ({col, tasks, workspaceId}:Props) => {

    const filteredTasks = tasks.filter(t => t.columnId === col.id);

    const handleClearCompletedTasks = () => {
        deleteCompletedTasks();
    }

  return (
    <div className='w-full h-full flex flex-col gap-5 items-start justify-start py-2 px-3'>
        <div className='flex items-center justify-between w-full'>
            <h3 className={`font-medium ${col.colorScheme} `}>{col.title}</h3>
            <p className='text-muted-foreground text-sm'>{filteredTasks.length}</p>
        </div>

        <div className='flex flex-col gap-2 w-full'>
            {filteredTasks.map((t) => (
                <KanbanTaskCard task={t} col={col} workspaceId={workspaceId}/>
            ))}

            {col.id === 4 && filteredTasks.length && (
                <div className='w-full flex items-center justify-end'>
                    <div onClick={() => {handleClearCompletedTasks}} className='py-1 cursor-pointer px-0 hover:text-neutral-200 transition-all text-muted-foreground font-medium underline underline-offset-2 text-xs'>
                        Clear all completed tasks
                    </div>
                </div>
            )}
        </div>

    </div>
  )
}

export default KanbanColumn