import { Component } from '@angular/core';

import { TodosComponent } from './components/todos/todos.component';
import { Todo } from './shared/todo.model';
import { Project } from './shared/project.model';
import { TodoService } from './shared/todo.service';
import { ProjectService } from './shared/project.service';
import { TimeWatchService } from './components/todos/todo-timewatch/timewatch.service';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    providers: [ TodoService, ProjectService, TimeWatchService ],
})

export class AppComponent {
    title: string;

    constructor() {
        this.title = 'Time Tracker';
    }
}
