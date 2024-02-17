"use client"

import React from 'react'
import Canvas from '../_components/whiteboard/whitboard-canvas'
import { useDraw } from '@/hooks/useDraw'

const WhiteBoardPage = () => {

    const {canvasRef} = useDraw()

  return (
    <div className='w-full h-full'>
        
        <Canvas />
    </div>
  )
}

export default WhiteBoardPage