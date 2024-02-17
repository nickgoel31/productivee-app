import { cn } from '@/lib/utils'
import React from 'react'

const NewTodoAdd = () => {
  return (
    <div className='flex items-center justify-between border rounded-md px-4 py-4 w-96'>
    <div className='flex items-center gap-3 justify-center'>
        <h2 className={cn('font-medium text-lg line-clamp-1 ')}>Add a todo</h2>
    </div>
</div>
  )
}

export default NewTodoAdd