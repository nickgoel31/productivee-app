import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full border-b py-4 h-20'>
        <div>
          <UserButton afterSignOutUrl='/signin' />
        </div>
    </div>
  )
}

export default Navbar