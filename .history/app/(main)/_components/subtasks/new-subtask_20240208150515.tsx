import { Plus } from 'lucide-react'
import React from 'react'

const NewSubtask = () => {
  return (
    <div className='w-full py-1 flex items-center justify-center text-xs font-medium text-neutral-400'>
        Add a new subtask
        <Plus size={12}/>
    </div>
  )
}

export default NewSubtask