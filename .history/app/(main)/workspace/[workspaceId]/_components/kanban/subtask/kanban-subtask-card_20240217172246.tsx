"use client"

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { KanbanSubtask } from '@/types/kanban'
import { CheckboxItem } from '@radix-ui/react-dropdown-menu';
import React, { useState } from 'react'
import EditKanbanSubtask from './edit-kanban-subtask';
import { deleteKanbanSubtaskById } from '@/actions/kanban-subtasks/delete-kanban-subtasks';
import {motion} from "framer-motion"
import { updateIsDoneKanbanSubtaskInDB } from '@/actions/kanban-subtasks/edit-kanban-subtask';

interface Props{
  subtask: KanbanSubtask;
  workspaceId:string;
}

const KanbanSubtaskCard = ({subtask,workspaceId}:Props) => {

  const [isDone,setIsDone] = useState(subtask.isDone)

  const handleKanbanSubtaskDelete = () => {
    deleteKanbanSubtaskById(subtask.id);
  }

  const handleMarkSubtask = () => {
    setIsDone(!isDone)
    updateIsDoneKanbanSubtaskInDB(subtask.id, isDone)
  }

  return (
    <motion.div layout layoutId={subtask.id} className='max-w-screen-lg border py-2 px-4 rounded flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Checkbox className='opacity-80 border-neutral-500'/>
          <h5 className='font-medium text-neutral-300 line-clamp-1'>{subtask.title}</h5>
          <EditKanbanSubtask subtask={subtask} workspaceId={workspaceId}/>
        </div>

        <div className='flex items-center gap-3'>
          <Button onClick={handleKanbanSubtaskDelete} variant={"outline"} size={"sm"} className='text-xs text-red-500'>Delete</Button>
          <Button variant={"outline"} size={"sm"} className='text-xs'>Mark as completed</Button>
        </div>
    </motion.div>
  )
}

export default KanbanSubtaskCard