import { Component, OnInit } from '@angular/core';

import { IProject } from '../../../shared/project.model';
import { ProjectService } from '../../../shared/project.service';
import { error } from "util";

@Component({
    moduleId: module.id,
    selector: 'todo-project',
    templateUrl: 'todo-project.component.html',
    styleUrls: ['todo-project.component.css'],
})

export class TodoProjectComponent implements OnInit {
    private projects: IProject;

    constructor(private projectService: ProjectService) { }

    ngOnInit() {
        this.projectService.getProjects().subscribe(
            projects => this.projects = projects,
            error => console.error(error)
        );
    }
}
