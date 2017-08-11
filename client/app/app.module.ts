import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TasksComponent} from './components/tasks/tasks.component';
import{AppComponent} from './app.component';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [AppComponent, TasksComponent],
    bootstrap: [AppComponent]
    
})

export class AppModule{}