import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-background border-r h-full w-full px-6 py-16 flex flex-col items-center'>
        <h1 className='text-xl font-medium'>Productive<span className='text-emerald-500'>Docs</span></h1>


        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    </div>
  )
}

export default Sidebar