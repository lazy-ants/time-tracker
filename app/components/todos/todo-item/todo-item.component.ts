import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../../shared/todo.model';


@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html',
    styleUrls: ['todo-item.component.css']
})

export class TodoItemComponent {
    @Input() todo: Todo;
    @Output() toggled: EventEmitter<Todo>;
    @Output() deleted: EventEmitter<Todo>;

    constructor() {
        this.toggled = new EventEmitter<Todo>();
        this.deleted = new EventEmitter<Todo>();
    }

    toggle() {
        this.todo.done = !this.todo.done;
        this.toggled.emit(this.todo);
    }

    delete() {
        this.deleted.emit(this.todo);
    }
}
