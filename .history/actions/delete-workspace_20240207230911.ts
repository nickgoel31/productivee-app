"use server"

import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs"


export const deleteWorkspaceInDB = async (id: string) => {

    const {userId} = auth();

    if(!userId) return;
    
    await db.workspace.delete({
        where: {id, userId}
    })

    return {success:true}

}