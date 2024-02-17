import React from 'react'
import Navbar from './_components/navbar'
import Sidebar from './_components/sidebar'


const DocsLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=''>
      {/* <Navbar /> */}
      <div className='w-56 top-0 left-0 fixed h-full'>
        <Sidebar />
      </div>
      <div className='pl-56 py-10'>
        {children}
      </div>
    </div>
  )
}

export default DocsLayout