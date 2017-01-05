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

    @Output() created: EventEmitter<Task>;
    @Input() title: string;
    @Input() tasks: ITask[];
    @Input() projects: IProject[];


    projectValue: string;
    projectTitle: string;
    projectId: number;
    createdAt: string;
    finishedAt: string;

    private playStopUnsubscribe: any;
    private play: boolean;

    constructor(private TimeWatchService: TimeWatchService) {
        this.tasks = [];
        this.created = new EventEmitter<Task>();
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

    create(title: string): void {
        if (title && this.projectId && this.projectTitle && this.createdAt && this.finishedAt ) {
            let task = new Task(title, this.projectId, this.projectTitle, this.createdAt, this.finishedAt);
            this.created.emit(task);
        }
    }

    setProject(projectValue: string) {
        let projectArr = projectValue.split(';');
        this.projectTitle = projectArr[0];
        this.projectId = projectArr[1];
    }
}
