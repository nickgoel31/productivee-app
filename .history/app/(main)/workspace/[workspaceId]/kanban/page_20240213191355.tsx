"use client"

import { Button } from '@/components/ui/button'
import { Column, Id } from '@/types/kanban'
import React, { useState } from 'react'
import KanbanColumn from '../_components/kanban/kanban-column'

const KanbanPage = () => {

  const columns: Column[] = [
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
      headingColor: "text-blue-500/70"
    },
    {
      id: 4,
      title: "COMPLETED",
      headingColor: "text-green-500/70"
    },
  ]

  return (
    <div className='py-6 flex flex-col gap-6 pr-9'>
      <div className='flex flex-col gap-1'>
        <h2 className='text-2xl font-semibold'>Kanban Board</h2>
        <p className='text-muted-foreground text-sm'>A simple draggable and resizable kanban board.</p>
      </div>

      <div className='md:grid-cols-4 grid grid-cols-1 gap-8 h-full min-h-[700px] w-full'>
        {columns.map((col) => (
          <KanbanColumn column={col}/>
        ))}
      </div>


    </div>
  )
}

export default KanbanPage