export interface ITask {
    id: number;
    title: string;
    project: {id: number; title: string};
    user: any;
    createdAt: string;
    finishedAt: string;
    records: any;
}

export class Task implements ITask {
    id: number;
    title: string;
    project: { id: number; title: string };
    user: any;
    createdAt: string;
    finishedAt: string;
    records: any;

    constructor(title, projectId, projectTitle, createdAt, finishedAt) {
        this.project = {
            id: projectId,
            title: projectTitle
        };

        this.title = title;
        // this.project = project;
        this.createdAt = createdAt;
        this.finishedAt = finishedAt;
    }
}
