import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TimeWatchService } from '../../../shared/timewatch.service';

import { Task } from '../../../shared/task.model';

@Component({
    moduleId: module.id,
    selector: 'task-list',
    templateUrl: 'task-list.component.html',
    styleUrls: ['task-list.component.css'],
})

export class TaskListComponent {
    ms: number;
    createdAt: any;

    @Input() tasks: Task[];
    @Output() deleted = new EventEmitter();
    @Output() update = new EventEmitter();
    @Output() start = new EventEmitter();

    constructor(private timeWatchService: TimeWatchService) { }

    get sortedTasks(): Task[] {
        return this.tasks
            .map(task => task)
            .sort((a, b) => {
                if (a.createdAt > b.createdAt) return 1;
                else if (a.createdAt < b.createdAt) return -1;
                else return 0;
            }).reverse();
    }

    playTimer() {
        this.timeWatchService.playTimer();
    }

    updateTitle(task: Task): void {
        this.update.emit(task);
    }

    startGetTime() {
        this.start.emit();
    }

    msToTime(ms: number) {
        let  seconds: any = Math.floor((ms/1000)%60),
             minutes: any = Math.floor((ms/(1000*60))%60),
             hours: any = Math.floor((ms/(1000*60*60))%24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds;
    }

    removeTask(task: Task) {
        this.deleted.emit(task);
        let index = this.tasks.indexOf(task);

        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }
}
