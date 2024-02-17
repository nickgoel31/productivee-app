import React from 'react'

const KanbanPage = ({params}: {params: { workspaceId: string }}) => {

  return (
    <div className='flex flex-col gap-8 py-7 pr-10'>
        <div className='space-y-1'>
            <h1 className='text-2xl font-semibold'>Kanban Board</h1>
            <p className="font-medium text-sm text-neutral-400">Best for keeping track of tasks.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 items-center'>
            <div>
                <h2>ON HOLD</h2>
            </div>
            <div>
                <h2>To be done</h2>
            </div>

            <div>
                <h2>To be done</h2>
            </div>

            <div>
                <h2>To be done</h2>
            </div>
        </div>
    </div>
  )
}

export default KanbanPage