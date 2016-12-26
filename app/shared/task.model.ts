export interface ITask {
    id: number;
    title: string;
    // tasks: [
    //     {
    //         id: number;
    //         title: string;
    //         user: [
    //             {
    //                 id: number;
    //                 firstName: string;
    //                 lastName: string;
    //                 email: string;
    //             }
    //         ];
    //         createdAt: any;
    //         records: [
    //             {
    //                 id: number;
    //                 createdAt: any;
    //                 finishedAt: any;
    //             }
    //         ]
    //     }
    // ]
    projectTitle: string;
    createdAt: any;
    done: boolean;
}

export class Task implements ITask {
    id: number;
    title: string;
    projectTitle: string;
    createdAt: any;
    done: boolean;

    constructor(title: string, projectTitle: string, createdAt: any) {
        this.title = title;
        this.projectTitle = projectTitle;
        this.createdAt = createdAt;
        this.done = false;
    }
}
