import { Clipboard } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NotesBtn = ({workspaceId} : {workspaceId : string}) => {
  return (
    <Link href={`/workspace/${workspaceId}/notes`} className='p-4 h-40 w-48 flex flex-col gap-3 items-center justify-center rounded-lg border bg-neutral-900 hover:text-green-500 hover:border-green-500 transition'>
      <Clipboard size={29}/>
      <h2 className="font-semibold text-xl">Notes</h2>
    </Link>
  )
}

export default NotesBtn