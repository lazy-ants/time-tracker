import { Component, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../../shared/todo.model';

import { TimerComponent } from "../todo-timewatch/timer.component";
import { ButtonsComponent } from "../todo-timewatch/buttons.component";
import { TodoProjectComponent } from "../todo-project/todo-project.component";

@Component({
    selector: 'todo-form',
    templateUrl: './app/components/todos/todo-form/todo-form.component.html',
    styleUrls: ['./app/components/todos/todo-form/todo-form.component.css']
})

export class TodoFormComponent {
    @Output() created: EventEmitter<Todo>;

    constructor() {
        this.created = new EventEmitter<Todo>();
    }

    create(title: string): void {
        if (title) {
            let todo = new Todo(title);
            this.created.emit(todo);
        }
    }
}
