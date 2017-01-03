import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { TimeWatchService } from '../../../shared/timewatch.service';
import { ProjectService } from '../../../shared/project.service';
import { TaskService } from '../../../shared/task.service';
import { IProject } from '../../../shared/project.model';
import { Task } from '../../../shared/task.model';

import { TimerComponent } from "./timer.component";

@Component({
    moduleId: module.id,
    selector: 'task-form',
    templateUrl: 'task-form.component.html',
    styleUrls: ['task-form.component.css']
})

export class TaskFormComponent implements OnInit, OnDestroy {

    @Output() created: EventEmitter<Task>;

    projects: IProject[];
    tasks: Task[];
    projectTitle: string;
    createdAt: string;
    finishedAt: string;
    private playStopUnsubscribe: any;
    private play: boolean;

    constructor(private TimeWatchService: TimeWatchService,
                private projectService: ProjectService,
                private taskService: TaskService) {
        this.tasks = [];
        this.created = new EventEmitter<Task>();
    }

    ngOnInit() {
        this.playStopUnsubscribe = this.TimeWatchService.playStop$.subscribe((res: any) => this.setPlay(res));
        this.projectService.getProjects().subscribe(projects => this.projects = projects);
        this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
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
        if (title && this.projectTitle && this.createdAt && this.finishedAt ) {
            let task = new Task(title, this.projectTitle, this.createdAt, this.finishedAt);
            this.created.emit(task);
        }
    }

    setProjectName(projectTitle: string) {
        this.projectTitle = projectTitle;
    }
}
