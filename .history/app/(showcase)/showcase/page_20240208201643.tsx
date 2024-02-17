"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { LampDemo } from '../_components/ul/lamp'

const ShowcasePage = () => {

  return (
    <div className='w-full py-8 flex flex-col items-center justify-center h-[calc(65vh)] text-center gap-4 relative'>

      <LampDemo />

      
    </div>
  )
}

export default ShowcasePage