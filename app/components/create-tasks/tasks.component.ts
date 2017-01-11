import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '../../shared/task.model';
import { Project } from '../../shared/project.model';
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
    @Input() tasks: Task[];
    @Input() projects: Project[];

    pager: any = {};
    pagedItems: any[];
    title: any;
    createdAt: any;
    startedAt: any;

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
    }

    onTitleClear() {
        this.title = '';
    }

    onStartGetTime() {
        this.createdAt = this.timeWatchService.currentTime();
        this.startedAt = this.timeWatchService.startStopTime();
        console.log(this.createdAt);
    }

    onTaskDeleted(task: Task): void {
        this.taskService.deleteTask(task).subscribe(task => this.deleteTask(task));
    }

    onTaskCreated(task: Task): void {
        this.taskService.addTask(task).subscribe(task => this.addTask(task));
    }

    private addTask(task: Task): void {
        console.log(task);
        this.tasks.push(task);
    }

    private deleteTask(task: Task): void {
        let index = this.tasks.indexOf(task);

        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }
}
