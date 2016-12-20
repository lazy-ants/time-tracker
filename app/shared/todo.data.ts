import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TodoSeedData implements InMemoryDbService {
    createDb() {
        let todos = [
            {id: 1, title: 'To learn Type script', done: false},
            {id: 2, title: 'To learn ES6', done: false},
            {id: 3, title: 'To learn Angular 2', done: false}
        ];
        return { todos };
    }
}
