import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ITask } from '../../../shared/task.model';

@Component({
    moduleId: module.id,
    selector: 'task-list',
    templateUrl: 'task-list.component.html',
    styleUrls: ['task-list.component.css'],
})
export class TaskListComponent {

    @Input() tasks: ITask[];
    @Output() deleted: EventEmitter<ITask>;

    constructor() {
        this.toggled = new EventEmitter<ITask>();
        this.deleted = new EventEmitter<ITask>();
    }

    removeTask(t) {
        this.deleted.emit(t);
    }

    // @Output() toggled: EventEmitter<ITask>;

    //

    //
    // get sortedTasks(): ITask[] {
    //     return this.tasks
    //         .map(task => task)
    //         .sort((a, b) => {
    //             if (a.title > b.title) return 1;
    //             else if (a.title < b.title) return -1;
    //             else return 0;
    //         })
    //         .sort((a, b) => {
    //             if (a.done && !b.done) return 1;
    //             else if (!a.done && b.done) return -1;
    //             else return 0;
    //         });
    // }
    //
    // onTodoToggled(task: ITask): void {
    //     this.toggled.emit(task);
    // }
    //
    // onTodoDeleted(task: ITask): void {
    //     this.deleted.emit(task);
    // }
}
