import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { ITask } from './task.model';

const API_ENDPOINT = 'http://localhost:3015/projects';

@Injectable()
export class TaskService {

    constructor(private http: Http) {}

    getTasks(): Observable<ITask[]> {
        return this.http.get(API_ENDPOINT)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    addTask(task: ITask): Observable<ITask> {
        return this.post(task);
    }

    saveTask(task: ITask): Observable<ITask> {
        return this.put(task);
    }

    deleteTask(task: ITask): Observable<ITask> {
        return this.delete(task);
    }

    private post(task: ITask): Observable<ITask> {
        let body = JSON.stringify(task);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        return this.http.post(API_ENDPOINT, body, options)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }

    private put(task: ITask): Observable<ITask> {
        let body = JSON.stringify(task);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        let url = `${API_ENDPOINT}/${task.id}`;

        return this.http.put(url, body, options)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }

    private delete(task: ITask): Observable<ITask> {
        let url = `${API_ENDPOINT}/${task.id}`;
        // let url = `http://localhost:3015/tasks/${task.id}`;

        return this.http.delete(url)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }

    private handleError(error: any) {
        console.log('An error has occurred: ', error);
        return Promise.reject(error.message || error)
    }
}
