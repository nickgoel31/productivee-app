import { UserButton } from '@clerk/nextjs'
import { InfoIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full border-b py-4 h-[60px] px-7 flex items-center justify-end bg-background gap-6'>
      <Link target='_blank' href={"/showcase/features"} className='flex items-center gap-1 text-xs font-medium hover:underline underline-offset-2 transition'><InfoIcon size={15}/>{"Features!"}</Link>
        <UserButton afterSignOutUrl='/signin' />
    </div>
  )
}

export default Navbar