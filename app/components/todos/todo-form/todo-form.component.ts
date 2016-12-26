import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { TimeWatchService } from '../../../shared/timewatch.service';
import { ProjectService } from '../../../shared/project.service';
import { Task } from '../../../shared/task.model';
import { IProject } from '../../../shared/project.model';

import { TimerComponent } from "./timer.component";

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})

export class TodoFormComponent implements OnInit, OnDestroy {
    projects: IProject[];
    projectService: ProjectService;

    @Output() created: EventEmitter<Task>;

    private playStopUnsubscribe: any;
    private play: boolean;
    private projectTitle: string;

    constructor(private TimeWatchService: TimeWatchService, projectService: ProjectService) {
        this.projects = [];
        this.projectService = projectService;
        this.created = new EventEmitter<Task>();
    }

    ngOnInit() {
        this.playStopUnsubscribe = this.TimeWatchService.playStop$.subscribe((res: any) => this.setPlay(res));
        this.projectService.getProjects().subscribe(projects => this.projects = projects);
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

    setProjectName(projectTitle: string) {
        this.projectTitle = projectTitle;
    }
}
