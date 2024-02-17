import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
  
import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-background border-r h-full w-full  pt-16 flex flex-col items-center gap-8'>
        <h1 className='text-xl font-medium'>Productive<span className='bg-gradient-to-r bg-clip-text text-transparent font-semibold from-emerald-500 to-teal-500'>Docs</span></h1>

        <ScrollArea className=" h-full w-full px-6 pb-8">

        <div className="flex flex-col w-full">
            {/* <h2 className="text-left text-lg font-semibold">Topics</h2> */}

            <Accordion type="single" className="w-full" collapsible>
                <AccordionItem value="item-1" className="border-none w-full">
                    <AccordionTrigger>Topics</AccordionTrigger>
                    <AccordionContent>
                        <ul className="flex flex-col gap-3 pl-3">
                            <li>Features</li>
                            <li className="text-red-500 font-semibold text-lg">DOCS PAGE COMING SOON</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
        </ScrollArea>
    </div>
  )
}

export default Sidebar