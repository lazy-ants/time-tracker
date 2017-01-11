import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Task } from './task.model';

const API_ENDPOINT = 'http://localhost:3015/tasks';

@Injectable()
export class TaskService {

    constructor(private http: Http) {}

    getTasks(): Observable<Task[]> {
        return this.http.get(API_ENDPOINT)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    addTask(task: Task): Observable<Task> {
        return this.post(task);
    }

    saveTask(task: Task): Observable<Task> {
        return this.put(task);
    }

    deleteTask(task: Task): Observable<Task> {
        return this.delete(task);
    }

    private post(task: Task): Observable<Task> {
        let body = JSON.stringify(task);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        return this.http.post(API_ENDPOINT, body, options)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }

    private put(task: Task): Observable<Task> {
        let body = JSON.stringify(task);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        let url = `${API_ENDPOINT}/${task.id}`;

        return this.http.put(url, body, options)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }

    private delete(task: Task): Observable<Task> {
        let url = `${API_ENDPOINT}/${task.id}`;

        return this.http.delete(url)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }

    private handleError(error: any) {
        console.log('An error has occurred: ', error);
        return Promise.reject(error.message || error)
    }
}
