export interface IProject {
    id: number;
    title: string;
}

export class Project implements IProject {
    id: number;
    title: string;

    constructor(title: string) {
        this.title = title;
    }
}
