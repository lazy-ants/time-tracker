import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { TimeWatchService } from '../../../shared/timewatch.service';
import { Project } from '../../../shared/project.model';
import { Task } from '../../../shared/task.model';

@Component({
    moduleId: module.id,
    selector: 'task-form',
    templateUrl: 'task-form.component.html',
    styleUrls: ['task-form.component.css']
})

export class TaskFormComponent implements OnInit, OnDestroy {

    @Input() title: any;
    @Input() createdAt: any;
    @Input() startedAt: any;
    @Input() tasks: Task[];
    @Input() projects: Project[];
    @Output() created = new EventEmitter();
    @Output() clear = new EventEmitter();

    projectValue: any;
    projectTitle: any;
    finishedAt: any;
    projectId: number;


    private playStopUnsubscribe: any;
    private play: boolean;

    constructor(private timeWatchService: TimeWatchService) {
        this.tasks = [];
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

    clearTitle() {
        this.clear.emit();
    }

    create() {
        if (this.title && this.projectId && this.projectTitle && this.createdAt && this.startedAt && this.finishedAt ) {
            let task = new Task(this.title, this.projectId, this.projectTitle, this.createdAt, this.startedAt, this.finishedAt);
            this.created.emit(task);
        }
        console.log(this.createdAt);
    }

    setProject(projectValue: any) {
        let projectArr = projectValue.split(';');
        this.projectTitle = projectArr[0];
        this.projectId = projectArr[1];
    }

    getCreatedAtTime() {
        this.createdAt = this.timeWatchService.currentTime();
    }

    getStartTime() {
        this.startedAt = this.timeWatchService.startStopTime();
    }

    getStopTime() {
        this.finishedAt = this.timeWatchService.startStopTime();
    }

    private setPlay(res: any) {
        (res.play) ? this.play = true : this.play = false;
    }

}
