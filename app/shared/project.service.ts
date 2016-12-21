import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { IProject } from './project.model';

@Injectable()
export class ProjectService {
    private apiUrl = 'api/projects';

    constructor(private http: Http) {}

    getProjects(): Promise<IProject[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.log('An error has occurred: ', error);
        return Promise.reject(error.message || error)
    }

}
