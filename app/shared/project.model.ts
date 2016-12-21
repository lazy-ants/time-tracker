export interface IProject {
    id: number;
    name: string;
}

export class Project implements IProject {
    id: number;
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
