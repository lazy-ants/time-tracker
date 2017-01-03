export interface ITask {
    id: number;
    title: string;
    project: any;
    user: any;
    createdAt: string;
    finishedAt: string;
    records: any;
    done: boolean;
}

export class Task implements ITask {
    id: number;
    title: string;
    project: any;
    user: any;
    createdAt: string;
    finishedAt: string;
    records: any;
    done: boolean;

    constructor(title: any, project: any, createdAt: string, finishedAt: string) {
        this.title = title;
        this.project = project;
        this.createdAt = createdAt;
        this.finishedAt = finishedAt;
    }
}
