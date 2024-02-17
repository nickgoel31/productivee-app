export type LegacyTask = {
    id: string;
    title:string;
    createdAt:Date;
    isDone:boolean;
    workspaceId:string;
    subTasks?: SubTask[]
}

export type SubTask = {
    id: string;
    title:string;
    createdAt:Date;
    priority:number;
    legacyTaskId: string;
}