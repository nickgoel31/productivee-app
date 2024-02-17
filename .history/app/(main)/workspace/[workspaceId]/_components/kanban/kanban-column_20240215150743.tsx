import { Column } from '@/types/kanban'
import React from 'react'

interface Props{
    col: Column
}

const KanbanColumn = ({col}:Props) => {
  return (
    <div className='w-full h-full flex flex-col gap-4 items-start justify-start bg-neutral-900'>
        <div className='flex items-center justify-between w-full'>
            <h3 className='font-medium '>{col.title}</h3>
        </div>
    </div>
  )
}

export default KanbanColumn