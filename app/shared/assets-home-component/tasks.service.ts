import { Injectable } from '@angular/core';

import { Task } from './tasks';
import { TASKS } from './tasks-list';

@Injectable()
export class TaskService {
  getTasks(): Promise<Task[]> {
    return Promise.resolve(TASKS);
  }

  // See the "Take it slow" appendix
  getTasksSlowly(): Promise<Task[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getTasks()), 2000);
    });
  }
}