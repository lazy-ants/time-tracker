import { Component, OnInit } from '@angular/core';

import { IProject } from '../../../shared/project.model';
import { ProjectService } from '../../../shared/project.service';

@Component({
    moduleId: module.id,
    selector: 'todo-project',
    templateUrl: 'todo-project.component.html',
    styleUrls: ['todo-project.component.css'],
})

export class TodoProjectComponent {
    projects: IProject[];
    projectService: ProjectService;

    constructor(projectService: ProjectService) {
        this.projects = [];
        this.projectService = projectService;
    }

    ngOnInit() {
        this.projectService.getProjects().subscribe(projects => this.projects = projects);
    }

    // onTodoCreated(todo: ITodo): void {
    //     this.todoService.addTodo(todo).subscribe(todo => this.addTodo(todo));
    // }
    //
    // onTodoToggled(todo: ITodo): void {
    //     this.todoService.saveTodo(todo).subscribe(todo => {});
    // }
    //
    // onTodoDeleted(todo: ITodo): void {
    //     this.todoService.deleteTodo(todo).subscribe(todo => this.deleteTodo(todo));
    // }
    //
    // private addTodo(todo: ITodo): void {
    //     this.todos.push(todo);
    // }
    //
    // private deleteTodo(todo: ITodo): void {
    //     let index = this.todos.indexOf(todo);
    //
    //     if (index > -1) {
    //         this.todos.splice(index, 1);
    //     }
    // }
}
