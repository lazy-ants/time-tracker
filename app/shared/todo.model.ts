export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

export class Todo implements ITodo {
    id: number;
    title: string;
    completed: boolean;

    constructor(title: string, number: number ) {
        this.id = number;
        this.title = title;
        this.completed = false;
    }
}
