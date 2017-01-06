import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { TimeWatchService } from '../../../shared/timewatch.service';
import { IProject } from '../../../shared/project.model';
import { Task } from '../../../shared/task.model';

@Component({
    moduleId: module.id,
    selector: 'task-form',
    templateUrl: 'task-form.component.html',
    styleUrls: ['task-form.component.css']
})

export class TaskFormComponent implements OnInit, OnDestroy {

    @Input() title: string;
    @Input() createdAt: any;
    @Input() tasks: ITask[];
    @Input() projects: IProject[];
    @Output() created: EventEmitter<Task>;

    projectValue: string;
    projectTitle: string;
    projectId: number;
    createdAt: any;
    finishedAt: any;

    private playStopUnsubscribe: any;
    private play: boolean;

    constructor(private timeWatchService: TimeWatchService) {
        this.tasks = [];
        this.created = new EventEmitter<Task>();
    }

    ngOnInit() {
        this.playStopUnsubscribe = this.timeWatchService.playStop$.subscribe((res: any) => this.setPlay(res));
    }

    ngOnDestroy() {
        this.playStopUnsubscribe.unsubscribe();
    }

    playTimer() {
        this.timeWatchService.playTimer();
    }

    stopTimer() {
        this.timeWatchService.stopTimer();
    }

    create() {
        if (this.title && this.projectId && this.projectTitle && this.createdAt && this.finishedAt ) {
            let task = new Task(this.title, this.projectId, this.projectTitle, this.createdAt, this.finishedAt);
            this.created.emit(task);
        }
        console.log(this.title);
        console.log(this.projectId);
        console.log(this.projectTitle);
        console.log(this.createdAt);
        console.log(this.finishedAt);
        this.title = "";
    }

    setProject(projectValue: string) {
        let projectArr = projectValue.split(';');
        this.projectTitle = projectArr[0];
        this.projectId = projectArr[1];
    }

    startGetTime() {
        this.createdAt = this.timeWatchService.currentTime();
    }

    stopGetTime() {
        this.finishedAt = this.timeWatchService.currentTime();
    }

    private setPlay(res: any) {
        (res.play) ? this.play = true : this.play = false;
    }

}
