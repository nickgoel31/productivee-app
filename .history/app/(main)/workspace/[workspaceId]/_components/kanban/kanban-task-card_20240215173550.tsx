"use client"

import { Task } from '@/types/kanban'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import EditKanbanCardForm from './edit-card-form';

interface Props{
    task: Task;
    workspaceId: string;
}

const KanbanTaskCard = ({task,workspaceId}:Props) => {
    
    // const [focusMode, setFocusMode] = useState(false)
    // const [editMode, setEditMode] = useState(false);

    // const onClick = () => {
    //     setFocusMode(!focusMode)
    //     setEditMode(!editMode)

    //     setTimeout(() => {
    //         setFocusMode(false)
    //     },2000)
    // }

    // const editClick = () => {
    //     if(focusMode){
    //         setEditMode(true)
    //     }
    // }

  return (
    <>
        <Dialog>
            <DialogTrigger>
                <div className='border bg-neutral-900 rounded p-3 cursor-pointer flex items-start'>
                    <h4 className='text-sm text-neutral-200'>{task.title}</h4>
                </div>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Edit "{task.title}"
                    </DialogTitle>
                    <DialogDescription>
                        edit the task thingys here
                    </DialogDescription>

                    <EditKanbanCardForm 
                        taskId={task.id} 
                        prevTitle={task.title} 
                        prevDesc={task.description} 
                        prevTags={task.tags} 
                        prevColumnId={task.columnId}
                        workspaceId={workspaceId}
                    />
                </DialogHeader>


            </DialogContent>
        </Dialog>
    </>
  )
}

export default KanbanTaskCard