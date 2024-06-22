import { NgFor } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../models/todo.interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @ViewChild('todoForm') todoForm !:NgForm
  constructor() { }

  @Output() emitTodoEvent : EventEmitter<Itodo> = new EventEmitter<Itodo>()

  ngOnInit(): void {
  }
  onFormSubmit(){
    if(this.todoForm.valid){
      console.log(this.todoForm.value);
    this.emitTodoEvent.emit(this.todoForm.value)
    this.todoForm.reset()
    }
  }
}
