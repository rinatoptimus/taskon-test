import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(tasks: any, term: any): any {
        if(term === undefined) {
            return tasks;
        }
        return tasks.filter(function(task: any) {
            return task.taskName.toLowerCase().includes(term.toLowerCase());
        })
    }
}