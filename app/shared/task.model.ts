export interface ITask {
    id: number;
    title: string;
    project: {id: number; title: string};
    user: any;
    createdAt: string;
    finishedAt: string;
    records: records[];
}

export class Task implements ITask {
    id: number;
    title: string;
    project: { id: number; title: string };
    user: any;
    records: records[];

    constructor(title, projectId, projectTitle, createdAt, finishedAt) {
        this.project = {
            id: projectId,
            title: projectTitle
        };
        this.records = [
            {
                createdAt: createdAt,
                finishedAt: finishedAt
            }
        ];
        this.title = title;
        // this.project = project;
    }
}
