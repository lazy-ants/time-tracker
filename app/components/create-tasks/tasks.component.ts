import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ITask } from '../../shared/task.model';
import { TaskService } from '../../shared/task.service';
import { ProjectService } from '../../shared/project.service';
import { TimeWatchService } from '../../shared/timewatch.service';
import { TaskFormComponent } from './head-form/task-form.component';
import { TaskListComponent} from './task-list/task-list.component';

@Component({
    moduleId: module.id,
    selector: 'tasks',
    templateUrl: 'tasks.component.html',
    styleUrls: ['tasks.component.css'],
})
export class TasksComponent implements OnInit {
    tasks: ITask[];
    title: string;
    createdAt: any;

    constructor (private taskService: TaskService,
                 private projectService: ProjectService,
                 private timeWatchService: TimeWatchService) {
        this.tasks = [];
    }

    ngOnInit() {
        this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
        this.projectService.getProjects().subscribe(projects => this.projects = projects);
    }

    onUpdate(task: ITask) {
        this.title = task.title;
        console.log(this.title);
    }

    onStartGetTime() {
        this.createdAt = this.timeWatchService.currentTime();
        console.log(this.createdAt);
    }

    onTaskDeleted(task: ITask): void {
        this.taskService.deleteTask(task).subscribe(task => this.deleteTask(task));
    }

    onTaskCreated(task: ITask): void {
        this.taskService.addTask(task).subscribe(task => this.addTask(task));
    }

    private addTask(task: ITask): void {
        console.log(task);
        this.tasks.push(task);
    }

    private deleteTask(task: ITask): void {
        let index = this.tasks.indexOf(task);

        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }
}
