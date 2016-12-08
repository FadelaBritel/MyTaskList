import { Component } from '@angular/core';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'my-app',
  moduleId : module.id,
  templateUrl: 'app.component.html',
  providers : [TasksService]
})

export class AppComponent  { 
 
}
