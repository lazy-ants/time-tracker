import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../../shared/todo.service';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

    constructor(private todoService: TodoService) { }

    ngOnInit() {
        this.todoService.getTodos().subscribe(
            todos => this.todos = todos,
            error => console.error(error)
        );
    }

    toggle(todo: any) {
        todo.completed = !todo.completed;
    }

    delete(todo: any) {
        let index = this.todos.indexOf(todo);

        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
}





// import { Component, Input, Output, EventEmitter } from '@angular/core';
//
// import { ITodo } from '../../../shared/todo.model';
// import { TodoItemComponent } from '../todo-item/todo-item.component';
//
// @Component({
//     moduleId: module.id,
//     selector: 'todo-list',
//     templateUrl: 'todo-list.component.html',
//     styleUrls: ['todo-list.component.css'],
// })
// export class TodoListComponent {
//     @Input() todos: ITodo[];
//     @Output() toggled: EventEmitter<ITodo>;
//     @Output() deleted: EventEmitter<ITodo>;
//
//     constructor() {
//         this.toggled = new EventEmitter<ITodo>();
//         this.deleted = new EventEmitter<ITodo>();
//     }
//
//     get sortedTodos(): ITodo[] {
//         return this.todos
//             .map(todo => todo)
//             .sort((a, b) => {
//                 if (a.title > b.title) return 1;
//                 else if (a.title < b.title) return -1;
//                 else return 0;
//             })
//             .sort((a, b) => {
//                 if (a.done && !b.done) return 1;
//                 else if (!a.done && b.done) return -1;
//                 else return 0;
//             });
//     }
//
//     onTodoToggled(todo: ITodo): void {
//         this.toggled.emit(todo);
//     }
//
//     onTodoDeleted(todo: ITodo): void {
//         this.deleted.emit(todo);
//     }
// }
