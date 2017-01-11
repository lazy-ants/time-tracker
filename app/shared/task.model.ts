export class Task {
    id: number;
    title: any;
    project: { id: number; title: string };
    createdAt: any;
    startedAt: any;
    finishedAt: any;
    user: any;
    records: any;

    constructor(title: any, projectId: number, projectTitle: any, createdAt: any, startedAt: any, finishedAt: any) {
        this.title = title;
        this.project = {
            id: projectId,
            title: projectTitle
        };
        this.createdAt = createdAt;
        this.records = [
            {
                startedAt: startedAt,
                finishedAt: finishedAt
            }
        ];
    }
}
