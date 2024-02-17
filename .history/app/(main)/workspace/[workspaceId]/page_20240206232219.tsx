

import { getWorkspaceById } from '@/actions/get-workspace';
import React from 'react'

interface IParams{
  workspaceId: string;
}


const WorkspaceIdPage = async ({params}:{params: IParams}) => {

  const workspace = await getWorkspaceById(params)

  if(!workspace) return null;

  return (
    <div className='py-14'>
      <h1 className='font-semibold text-3xl'>{workspace.name}</h1>
    </div>
  )
}

export default WorkspaceIdPage