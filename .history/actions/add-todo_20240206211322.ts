"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const addTodoInDB = async (title: string) => {
    
    await db.toDo.create({
        data: {
            title
        }
    })

    revalidatePath("/")
}