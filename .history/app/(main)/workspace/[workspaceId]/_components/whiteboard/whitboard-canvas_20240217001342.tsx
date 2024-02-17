"use client"

import { useDraw } from '@/hooks/useDraw'
import React from 'react'

const Canvas = () => {

    const {canvasRef} = useDraw()

  return (
    <canvas
        ref={canvasRef}
        width={"100%"}
        height={"100%"}
        className='w-full h-full bg-neutral-900/10 whiteboard-canvas'
    />
  )
}

export default Canvas