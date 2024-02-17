import Image from 'next/image'
import React from 'react'

const WorkspaceBox = () => {
  return (
    <div className='border rounded-md overflow-hidden'>
        <div className='overflow-hidden object-contain w-'>
            <Image src={"/bg-1.jpg"} alt='Workspace Thumbnail' width={1000} height={1000}/>
        </div>
    </div>
  )
}

export default WorkspaceBox