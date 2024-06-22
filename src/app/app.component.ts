import { Component } from '@angular/core';
import { Itodo } from './shared/models/todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ioMachineTest';

  todoArr : Array<Itodo>=[
    {
      todo : "Javascript"
    }
  ];

  onTodoObjGet(data :Itodo){
    console.log(data)
    this.todoArr.unshift(data)
    console.log(this.todoArr);
  }
}
