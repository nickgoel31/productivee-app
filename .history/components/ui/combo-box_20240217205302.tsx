"use client"

import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useKanbanTasks } from "@/hooks/useKanbanTasks"
import { Task } from "@/types/kanban"
import { useState } from "react"

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

interface Props{
  activeTaskId:string;
  workspaceId:string
}


export function ComboboxKanbanTask({workspaceId, activeTaskId}:Props) {

  const tasks:Task[] | undefined = useKanbanTasks(workspaceId)
  if(!tasks) return null; // Return null here if kanban is falsy
  
  let activeTask = tasks?.find(t => t.id === activeTaskId)

  // const [value,setValue] = useState(activeTask?.title)
  const value = activeTask?.title

  

  return (
    <Popover>
      <PopoverTrigger disabled asChild>
        <Button
            variant="outline"
            role="combobox"
            className="w-full justify-between"
          >
            {value
            ? tasks.find((task) => task?.title === value)?.title
            : "No task associated!"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        {tasks.map((task) => (
          <div key={task.id}>
            {task.title}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  )
}



    // <Popover open={open} onOpenChange={setOpen}>
    //   <PopoverTrigger asChild>
    //     <Button
    //       variant="outline"
    //       role="combobox"
    //       aria-expanded={open}
    //       className="w-full justify-between"
    //     >
    //       {value
    //         ? tasks.find((task) => task.title === value)?.title
    //         : "Select task..."}
    //       <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
    //     </Button>
    //   </PopoverTrigger>
    //   <PopoverContent className="w-[200px] p-0">
    //     <Command>
    //       <CommandInput placeholder="Search framework..." />
    //       <CommandEmpty>No tasks found.</CommandEmpty>
    //       <CommandGroup>
    //         {frameworks.map((framework) => (
    //           <CommandItem
    //             key={framework.value}
    //             value={framework.value}
    //             onSelect={(currentValue) => {
    //               setValue(currentValue === value ? "" : currentValue)
    //               setOpen(false)
    //             }}
    //           >
    //             <Check
    //               className={cn(
    //                 "mr-2 h-4 w-4",
    //                 value === framework.value ? "opacity-100" : "opacity-0"
    //               )}
    //             />
    //             {framework.label}
    //           </CommandItem>
    //         ))}
    //       </CommandGroup>
    //     </Command>
    //   </PopoverContent>
    // </Popover>