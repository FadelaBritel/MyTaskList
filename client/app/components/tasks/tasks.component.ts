import { Component } from '@angular/core';
import {TasksService } from '../../services/tasks.service';

@Component({
  moduleId : module.id,
  selector: 'tasks',
  templateUrl : 'tasks.component.html'
})

export class TasksComponent  {
  tasks : Task[] = [];
  constructor(private tasksService : TasksService){
    this.tasksService.getTasks().subscribe(tasks =>{
        this.tasks = tasks;
    })
  }
}


interface Task {
  title :  string;
  isDone: boolean;
}