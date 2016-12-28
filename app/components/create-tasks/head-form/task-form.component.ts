import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { TimeWatchService } from '../../../shared/timewatch.service';
import { ITask } from '../../../shared/task.model';

import { TimerComponent } from "./timer.component";

@Component({
    moduleId: module.id,
    selector: 'task-form',
    templateUrl: 'task-form.component.html',
    styleUrls: ['task-form.component.css']
})

export class TaskFormComponent implements OnInit, OnDestroy {
    @Input() tasks: ITask[];

    @Output() created: EventEmitter<ITask>;

    private playStopUnsubscribe: any;
    private play: boolean;
    // private projectTitle: string;

    constructor(private TimeWatchService: TimeWatchService) {
        this.created = new EventEmitter<ITask>();
    }

    ngOnInit() {
        this.playStopUnsubscribe = this.TimeWatchService.playStop$.subscribe((res: any) => this.setPlay(res));
    }

    ngOnDestroy() {
        this.playStopUnsubscribe.unsubscribe();
    }

    private setPlay(res: any) {
        (res.play) ? this.play = true : this.play = false;
    }

    playTimer() {
        this.TimeWatchService.playTimer();
    }

    stopTimer() {
        this.TimeWatchService.stopTimer();
    }

    // create(title: string): void {
    //     if (title && this.projectTitle) {
    //         let task = new Task(title, this.projectTitle);
    //         this.created.emit(task);
    //     }
    // }

    // setProjectName(projectTitle: string) {
    //     this.projectTitle = projectTitle;
    // }

}
