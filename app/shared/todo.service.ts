import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { ITodo } from "./todo.model";

const API_ENDPOINT = 'http://localhost:3004/todos';

@Injectable()
export class TodoService {

    constructor(private http: Http) {}

    getTodos() {
        return this.http.get(API_ENDPOINT)
            .map((res: Response) => res.json())
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
    // private post(todo: ITodo): Observable<ITodo> {
    //     return this.http.post(API_ENDPOINT)
    //         .map((res: Response) => res.json())
    // }
    //
    // private put(todo: ITodo) {
    //     return this.http.put('{API_ENDPOINT}/${todo.id}', todo)
    //         .map((res: Response) => res.json())
    // }
    //
    // private delete(todo: ITodo): Observable<ITodo> {
    //     return this.http.delete('{API_ENDPOINT}/${todo.id}', todo)
    //         .map((res: Response) => res.json())
    // }
}
