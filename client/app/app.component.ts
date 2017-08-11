import {Component} from '@angular/core';
import {TaskService} from './services/task.service';

@Component({
    moduleId: module.id,
    selector:'app-container',
    templateUrl:'app.component.html',
    providers: [TaskService]
})

export class AppComponent{}