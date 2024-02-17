import { LayoutDashboard } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-64 bg-background border-r h-full gap-12 flex flex-col items-center px-7 py-14'>
        <h2 className='font-semibold text-2xl'>Todo App</h2>

        <ul className='flex flex-col gap-3 items-start  w-full'>
            <li className='flex items-center gap-3'><LayoutDashboard className='text-neutral-500'/>Overview</li>
        </ul>
    </div>
  )
}

export default Sidebar