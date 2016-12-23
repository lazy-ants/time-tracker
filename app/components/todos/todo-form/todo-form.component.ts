import { Component } from '@angular/core';

import { Todo } from '../../../shared/todo.model';

import { TodoService } from '../../../shared/todo.service';

import { TimerComponent } from "../todo-timewatch/timer.component";
import { ButtonsComponent } from "../todo-timewatch/buttons.component";
import { TodoProjectComponent } from "../todo-project/todo-project.component";
import { TodoListComponent } from "../todo-list/todo-list.component";

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})

export class TodoFormComponent extends TodoListComponent {
    newTodoTitle = '';

    createTodo(event: Event) {
        console.log(this.todos);
        event.preventDefault();
        let todo = new Todo(this.newTodoTitle);
        this.todos.push(todo);
        this.newTodoTitle = '';
    }
}
