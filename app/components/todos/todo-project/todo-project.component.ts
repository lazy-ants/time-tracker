import { Component, OnInit, Input } from '@angular/core';

import { IProject } from '../../../shared/project.model';
import { ProjectService } from '../../../shared/project.service';

@Component({
    moduleId: module.id,
    selector: 'todo-project',
    templateUrl: 'todo-project.component.html',
    styleUrls: ['todo-project.component.css'],
})

export class TodoProjectComponent implements OnInit {
    @Input() projects: IProject[];
    projectService: ProjectService;
    defaultSelected: string = 'Select project';

    constructor(projectService: ProjectService) {
        this.projects = [];
        this.projectService = projectService;
    }

    ngOnInit() {
        this.projectService.getProjects().then(projects => this.projects = projects);
    }

}
