import { Component } from '@angular/core';

import { ITodo } from '../../shared/todo.model';
import { TodoService } from '../../shared/todo.service';
import { TimeWatchService } from './todo-timewatch/timewatch.service';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {error} from "util";

@Component({
    moduleId: module.id,
    selector: 'todos',
    templateUrl: 'todos.component.html',
    styleUrls: ['todos.component.css'],
})

export class TodosComponent {}

// import { Component, OnInit } from '@angular/core';
//
// import { ITodo } from '../../shared/todo.model';
// import { TodoService } from '../../shared/todo.service';
// import { TimeWatchService } from './todo-timewatch/timewatch.service';
// import { TodoFormComponent } from './todo-form/todo-form.component';
// import { TodoListComponent } from './todo-list/todo-list.component';
// import {error} from "util";
//
// @Component({
//     moduleId: module.id,
//     selector: 'todos',
//     templateUrl: 'todos.component.html',
//     styleUrls: ['todos.component.css'],
// })
// export class TodosComponent {
//
//     constructor(private todoService: TodoService) { }
//
//     ngOnInit() {
//         this.todoService.getTodos().subscribe(
//             todos => this.todos = todos,
//             error => console.error(error)
//         );
//     }
//
//     onTodoCreated(todo: ITodo): void {
//         this.todoService.addTodo(todo).subscribe(todo => this.addTodo(todo));
//     }
//
//     onTodoToggled(todo: ITodo): void {
//         this.todoService.saveTodo(todo).subscribe(todo => {});
//     }
//
//     onTodoDeleted(todo: ITodo): void {
//         this.todoService.deleteTodo(todo).subscribe(todo => this.deleteTodo(todo));
//     }
//
//     private addTodo(todo: ITodo): void {
//         this.todos.push(todo);
//     }
//
//     private deleteTodo(todo: ITodo): void {
//         let index = this.todos.indexOf(todo);
//
//         if (index > -1) {
//             this.todos.splice(index, 1);
//         }
//     }
// }
