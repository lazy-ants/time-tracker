import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { TaskListComponent } from "./components/create-tasks/task-list/task-list.component";
import { TaskFormComponent } from "./components/create-tasks/head-form/task-form.component";
import { TimerComponent } from "./components/create-tasks/head-form/timer.component";
import { TasksComponent } from './components/create-tasks/tasks.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        TaskListComponent,
        TaskFormComponent,
        TimerComponent,
        TasksComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
