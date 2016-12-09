import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Task } from '../components/tasks/tasks.component';
import 'rxjs/add/operator/map';

@Injectable()
export class TasksService{

    constructor(private http: Http){
        console.log("TaskService initialized...");
    }

    getTasks() {
        return this.http.get('/api/tasks')
        .map(res => res.json());
    }

   addTask(newtask : Task){
       var headers = new Headers();
       headers.append('Content-type', 'application/json');
       return this.http.post('/api/task', JSON.stringify(newtask), {headers:headers})
       .map(res => res.json());
   }

   deleteTask(id : number){
       return this.http.delete('/api/task/'+id)
       .map(res => res.json());
   }

   updateStatus(task : Task){
       var headers = new Headers();
       headers.append('Content-type', 'application/json');
       return this.http.put('/api/task/'+task._id, JSON.stringify(task), {headers:headers})
       .map(res => res.json());
   }
}