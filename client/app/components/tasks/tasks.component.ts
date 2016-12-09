import { Component, EventEmitter } from '@angular/core';
import {TasksService } from '../../services/tasks.service';

@Component({
  moduleId : module.id,
  selector: 'tasks',
  templateUrl : 'tasks.component.html'
})

export class TasksComponent  {
  tasks : Task[] = [];
  title : string;

  constructor(private tasksService : TasksService){
    this.tasksService.getTasks().subscribe(tasks =>{
        this.tasks = tasks;
    })
  }

  addTask(event){
    event.preventDefault();
    var newTask = {
      title : this.title,
      isDone : false
    }

    this.tasksService.addTask(newTask)
    .subscribe(tasks => {
        this.tasks.push(newTask);
        this.title ='';
    });
  }

  deleteTask(id : number){
    var tasks = this.tasks;
    
     this.tasksService.deleteTask(id)
     .subscribe(data => {
        if(data.n == 1){
          for(var i=0; i<tasks.length; i++){
            if(tasks[i]._id == id){
              tasks.splice(i, 1);
            }
          }
        }
    });
  }

  updateStatus(task: Task){
    var _task = {
      _id : task._id,
      title : task.title,
      isDone : !task.isDone
    };
    this.tasksService.updateStatus(_task)
    .subscribe(data => {
        task.isDone = !task.isDone;
    });
  }
}



export interface Task {
  title :  string;
  isDone: boolean;
}