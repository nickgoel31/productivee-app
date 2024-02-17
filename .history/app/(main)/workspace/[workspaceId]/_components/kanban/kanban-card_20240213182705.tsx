import React from 'react'
import {motion} from "framer-motion"
import { TaskType } from '@/types'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'


const KanbanCard = ({id, title,status, handleDragStart} : TaskType) => {

  const {attributes,listeners,setNodeRef, transform,transition, isDragging} = useSortable({id, data:{
    type: "Task",
    data:{
      id,
      title,
      status
    }
  }})

  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }

  if(isDragging){
    return <div ref={setNodeRef} style={style} className='border p-3  w-full bg-neutral-900 rounded-lg opacity-50'>
      Task
    </div>
  }

  return (
    <>
      {/* <DropIndicator beforeId={id} column={status} /> */}
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}
        // onDragStart={(e) => handleDragStart(e, { title, id, status })}
        className='border p-3  w-full bg-neutral-900 rounded-lg'>
            <h3 className='text-neutral-100'>{title}</h3>
        </div>
        
    </>
  )
}

export default KanbanCard

