import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Project } from "./project.model";

const API_ENDPOINT = 'http://localhost:3015/projects';

@Injectable()
export class ProjectService {

    constructor(private http: Http) {}

    getProjects(): Observable<Project[]> {
        return this.http.get(API_ENDPOINT)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    addProject(project: Project): Observable<Project> {
        return this.post(project);
    }

    saveProject(project: Project): Observable<Project> {
        return this.put(project);
    }

    deleteProject(project: Project): Observable<Project> {
        return this.delete(project);
    }

    private post(project: Project): Observable<Project> {
        let body = JSON.stringify(project);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        return this.http.post(API_ENDPOINT, body, options)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }

    private put(project: Project): Observable<Project> {
        let body = JSON.stringify(project);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        let url = `${API_ENDPOINT}/${project.id}`;

        return this.http.put(url, body, options)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }

    private delete(project: Project): Observable<Project> {
        let url = `${API_ENDPOINT}/${project.id}`;

        return this.http.delete(url)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }

    private handleError(error: any) {
        console.log('An error has occurred: ', error);
        return Promise.reject(error.message || error)
    }
}
