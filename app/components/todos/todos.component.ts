import { Component, OnInit } from '@angular/core';

import { ITask } from '../../shared/task.model';
import { TaskService } from '../../shared/task.service';
import { TimeWatchService } from '../../shared/timewatch.service';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
    moduleId: module.id,
    selector: 'todos',
    templateUrl: 'todos.component.html',
    styleUrls: ['todos.component.css'],
})
export class TodosComponent implements OnInit {
    tasks: ITask[];
    taskService: TaskService;

    constructor(taskService: TaskService) {
        this.tasks = [];
        this.taskService = taskService;
    }

    ngOnInit() {
        this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
    }

    onTaskCreated(task: ITask): void {
        this.taskService.addTask(task).subscribe(task => this.addTask(task));
    }


    onTaskToggled(task: ITask): void {
        this.taskService.saveTask(task).subscribe(task => {});
    }

    onTaskDeleted(task: ITask): void {
        this.taskService.deleteTask(task).subscribe(task => this.deleteTask(task));
    }

    private addTask(task: ITask): void {
        this.tasks.push(task);
    }

    private deleteTask(task: ITask): void {
        let index = this.tasks.indexOf(task);

        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }
}
