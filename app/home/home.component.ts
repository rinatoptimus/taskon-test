import { Component } from '@angular/core';
import { Task } from '../shared/assets-home-component/tasks';
import { TaskService } from '../shared/assets-home-component/tasks.service';

import { FilterPipe } from './search-task/pipe-task';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [TaskService]
})

export class HomeComponent {
    tasks: Task[];
    constructor(private taskService: TaskService) { }
    getTasks(): void {
        this.taskService.getTasks().then(tasks => this.tasks = tasks);
    }
    
    ngOnInit(): void {
        this.getTasks();
    }
}