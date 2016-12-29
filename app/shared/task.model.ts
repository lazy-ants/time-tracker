export interface ITask {
    id: number;
    title: string;
    project: Project;
    user: User;
    createdAt: string;
    records: Record[];
    done: boolean;
}

export class Task implements ITask {
    id: number;
    title: string;
    project: Project;
    user: User;
    createdAt: string;
    records: Record[];
    done: boolean;

    constructor(title: any, project: Project, createdAt: string) {
        this.title = title;
        this.project = project;
        this.createdAt = createdAt;
    }
}
