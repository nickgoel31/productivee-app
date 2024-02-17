"use client"

import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const QuillEditor = () => {
    const [value, setValue] = useState('');

  return (
    <div className='w-full h-[500px]'>
        <ReactQuill theme="bubble" className='h-full' value={value} onChange={setValue} />
    </div>
  )
}

export default QuillEditor