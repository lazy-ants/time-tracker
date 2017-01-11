import { Component } from '@angular/core';

import { TasksComponent } from './components/create-tasks/tasks.component';
import { Task } from './shared/task.model';
import { TaskService } from './shared/task.service';
import { ProjectService } from './shared/project.service';
import { TimeWatchService } from './shared/timewatch.service';

@Component({
    moduleId: module.id,
    selector: 'time-tracker',
    templateUrl: 'app.component.html',
    providers: [ TaskService, ProjectService, TimeWatchService ],
})

export class AppComponent {
    title: string;

    constructor() {
        this.title = 'Time Tracker';
    }
}
