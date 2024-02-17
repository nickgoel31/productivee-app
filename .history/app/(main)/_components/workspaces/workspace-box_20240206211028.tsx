import { ChevronRightCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface WorkspaceProps {
    name: string;
    desc: string | null;
}

const WorkspaceBox = ({name, desc}: WorkspaceProps) => {
  return (
    <div className='border rounded-md overflow-hidden cursor-pointer group relative'>
        <div className='overflow-hidden object-contain w-full relative'>
            <Image src={"/bg-1.jpg"} className='group-hover:scale-110 transition duration-500' alt='Workspace Thumbnail' width={2000} height={2000}/>
            <span className='absolute w-full h-full top-0 bg-black/10'></span>
        </div>

        <div className='absolute bottom-0 flex justify-between gap-1 py-4 px-3 items-end w-full h-[70%] bg-gradient-to-t from-black via-black/60 to-transparent group-hover:text-green-400 transition'>
            <h2 className='line-clamp-1 font-medium text-sm'>Workspace Name</h2>
            <ChevronRightCircle className='shrink-0' size={20}/>
        </div>
    </div>
  )
}

export default WorkspaceBox