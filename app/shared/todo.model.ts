export interface ITodo {
    id: number;
    taskTitle: string;
    projectTitle: string;
    currentTime: any;
    done: boolean;
}

export class Todo implements ITodo {
    id: number;
    taskTitle: string;
    projectTitle: string;
    currentTime: any;
    done: boolean;

    constructor(taskTitle: string, projectTitle: string, currentTime: any) {
        this.taskTitle = taskTitle;
        this.projectTitle = projectTitle;
        this.currentTime = currentTime;
        this.done = false;
    }
}
