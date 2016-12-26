import { Component } from '@angular/core';

import { TodosComponent } from './components/todos/todos.component';
import { Task } from './shared/task.model';
import { Project } from './shared/project.model';
import { TaskService } from './shared/task.service';
import { ProjectService } from './shared/project.service';
import { TimeWatchService } from './shared/timewatch.service';

@Component({
    moduleId: module.id,
    selector: 'todo-app',
    templateUrl: 'app.component.html',
    providers: [ TaskService, ProjectService, TimeWatchService ],
})

export class AppComponent {
    title: string;

    constructor() {
        this.title = 'Time Tracker';
    }
}
