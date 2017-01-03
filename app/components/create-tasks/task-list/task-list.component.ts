import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TimeWatchService } from '../../../shared/timewatch.service';

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

    constructor(private TimeWatchService: TimeWatchService) {
        this.deleted = new EventEmitter<ITask>();
    }

    playTimer() {
        this.TimeWatchService.playTimer();
    }

    addTitle(title: string) {
        console.log(title);
    }

    msToTime(duration) {
        let  seconds = parseInt((duration/1000)%60),
             minutes = parseInt((duration/(1000*60))%60),
             hours = parseInt((duration/(1000*60*60))%24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds;
    }

    removeTask(task: ITask) {
        this.deleted.emit(task);
        let index = this.tasks.indexOf(task);

        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }

    // @Output() toggled: EventEmitter<ITask>;

    // removeTask(t) {
    //     this.deleted.emit(t);
    // }

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
