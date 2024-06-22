import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from '../../models/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() getTodoArr !: Array<Itodo>
}
