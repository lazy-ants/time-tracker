import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../../shared/task.model';


@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html',
    styleUrls: ['todo-item.component.css']
})

export class TodoItemComponent {
    @Input() task: Task;
    @Output() toggled: EventEmitter<Task>;
    @Output() deleted: EventEmitter<Task>;

    constructor() {
        this.toggled = new EventEmitter<Task>();
        this.deleted = new EventEmitter<Task>();
    }

    toggle() {
        this.task.done = !this.task.done;
        this.toggled.emit(this.task);
    }

    delete() {
        this.deleted.emit(this.task);
    }
}
