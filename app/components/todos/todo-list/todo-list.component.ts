import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ITask } from '../../../shared/task.model';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css'],
})
export class TodoListComponent {
    @Input() tasks: ITask[];
    @Output() toggled: EventEmitter<ITask>;
    @Output() deleted: EventEmitter<ITask>;

    constructor() {
        this.toggled = new EventEmitter<ITask>();
        this.deleted = new EventEmitter<ITask>();
    }

    get sortedTasks(): ITask[] {
        return this.tasks
            .map(task => task)
            .sort((a, b) => {
                if (a.title > b.title) return 1;
                else if (a.title < b.title) return -1;
                else return 0;
            })
            .sort((a, b) => {
                if (a.done && !b.done) return 1;
                else if (!a.done && b.done) return -1;
                else return 0;
            });
    }

    onTodoToggled(task: ITask): void {
        this.toggled.emit(task);
    }

    onTodoDeleted(task: ITask): void {
        this.deleted.emit(task);
    }
}
