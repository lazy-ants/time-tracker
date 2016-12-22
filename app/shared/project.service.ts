import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_ENDPOINT = 'http://localhost:3004/projects';

@Injectable()
export class ProjectService {

    constructor(private http: Http) {}

    getProjects() {
        return this.http.get(API_ENDPOINT)
            .map((res: Response) => res.json())
    }
}
