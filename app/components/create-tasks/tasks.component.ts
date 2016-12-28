import { Component, OnInit, EventEmitter } from '@angular/core';

import { ITask } from '../../shared/task.model';
import { TaskService } from '../../shared/task.service';
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
    taskService: TaskService;

    constructor(taskService: TaskService) {
        this.tasks = [];
        this.taskService = taskService;
    }

    ngOnInit() {
        this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
    }

    private deleteTask(task: ITask): void {
        for (let key in this.tasks) {
            let tasks = this.tasks[key].tasks;
            let index = tasks.indexOf(task);
            if (index > -1) {
                tasks.splice(index, 1);
            }
        }
    }
    onTaskDeleted(task: ITask): void {
        console.log(task);
        this.taskService.deleteTask(task).subscribe(task => this.deleteTask(task));
    }
    // onTaskCreated(task: ITask): void {
    //     this.taskService.addTask(task).subscribe(task => this.addTask(task));
    // }
    //
    //
    // onTaskToggled(task: ITask): void {
    //     this.taskService.saveTask(task).subscribe(task => {});
    // }
    //
    //
    // private addTask(task: ITask): void {
    //     this.tasks.push(task);
    // }
    //
    // private deleteTask(task: ITask): void {
    //     let index = this.tasks.indexOf(task);
    //
    //     if (index > -1) {
    //         this.tasks.splice(index, 1);
    //     }
    // }

}
