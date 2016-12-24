import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { TodoListComponent } from "./components/todos/todo-list/todo-list.component";
import { TodoFormComponent } from "./components/todos/todo-form/todo-form.component";
import { TodoItemComponent } from "./components/todos/todo-item/todo-item.component";
import { TimerComponent } from "./components/todos/todo-form/timer.component";
import { TodosComponent } from './components/todos/todos.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
    ],
    declarations: [
        AppComponent,
        TodoListComponent,
        TodoFormComponent,
        TodoItemComponent,
        TimerComponent,
        TodosComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
