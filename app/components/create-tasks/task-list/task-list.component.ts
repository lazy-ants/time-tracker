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
    @Output() deleted = new EventEmitter<ITask>();
    @Output() update = new EventEmitter();
    @Output() start = new EventEmitter();

    constructor(private timeWatchService: TimeWatchService) { }

    playTimer() {
        this.timeWatchService.playTimer();
    }

    updateTitle(task: ITask): void {
        this.update.emit(task);
    }
    startGetTime() {
        this.start.emit();
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
}
