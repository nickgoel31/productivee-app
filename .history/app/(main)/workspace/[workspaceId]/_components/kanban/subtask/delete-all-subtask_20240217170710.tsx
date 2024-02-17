
import { Button } from '@/components/ui/button'
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import React from 'react'

const DeleteAllKanbanSubtasksBtn = ({taskId}:{taskId:string}) => {
  return (
    <AlertDialog>
        <AlertDialogTrigger>
            <Button variant={"outline"} size={"sm"} className='text-xs text-red-500'>Delete all subtasks</Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>This action can't be undone! It will delete all subtasks associated with this task.</AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter className='w-full flex items-center justify-end gap-4'>
                <div>

                </div>
            </AlertDialogFooter>
        </AlertDialogContent>

        
    </AlertDialog>
  )
}

export default DeleteAllKanbanSubtasksBtn