import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IProject } from "./project.model";

const API_ENDPOINT = 'http://localhost:3004/projects';

@Injectable()
export class ProjectService {

    constructor(private http: Http) {}

    getProjects(): Observable<IProject[]> {
        return this.http.get(API_ENDPOINT)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    // addTodo(todo: ITodo): Observable<ITodo> {
    //     return this.post(todo);
    // }
    //
    // saveTodo(todo: ITodo): Observable<ITodo> {
    //     return this.put(todo);
    // }
    //
    // deleteTodo(todo: ITodo): Observable<ITodo> {
    //     return this.delete(todo);
    // }
    //
    // private post(todo: ITodo): Promise<ITodo> {
    //     let body = JSON.stringify(todo);
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers });
    //
    //     return this.http.post(API_ENDPOINT, body, options)
    //         .map((res: Response) => res.json().data)
    //         .catch(this.handleError)
    // }
    //
    // private put(todo: ITodo): Observable<ITodo> {
    //     let body = JSON.stringify(todo);
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers });
    //
    //     let url = `${API_ENDPOINT}/${todo.id}`;
    //
    //     return this.http.put(url, body, options)
    //         .map((res: Response) => res.json().data)
    //         .catch(this.handleError)
    // }
    //
    // private delete(todo: ITodo): Observable<ITodo> {
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers });
    //
    //     let url = `${API_ENDPOINT}/${todo.id}`;
    //
    //     return this.http.delete(url, options)
    //         .map((res: Response) => res.json().data)
    //         .catch(this.handleError)
    // }

    private handleError(error: any) {
        console.log('An error has occurred: ', error);
        return Promise.reject(error.message || error)
    }
}
