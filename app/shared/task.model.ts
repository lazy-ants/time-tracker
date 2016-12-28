export interface ITask {
    id: number;
    title: any;
    tasks: any;
    projectTitle: string;
    createdAt: any;
}

export class Task implements ITask {
    id: number;
    title: any;
    tasks: any;
    projectTitle: string;
    createdAt: any;

    constructor(title: any, tasks: any, projectTitle: string, createdAt: any) {
        this.title = title;
        this.tasks = tasks;
        this.projectTitle = projectTitle;
        this.createdAt = createdAt;
    }
}
