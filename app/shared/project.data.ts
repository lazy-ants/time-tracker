import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ProjectSeedData implements InMemoryDbService {
    createDb() {
        let projects = [
            {id: 1, name: 'Angular 2'},
            {id: 2, name: 'EcmaScript 6'},
            {id: 3, name: 'TypeScript'}
        ];
        return { projects };
    }
}

