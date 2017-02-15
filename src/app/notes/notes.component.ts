import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  todos:any;
  newTodo:string;
  text:any;
  todoObj:any;
    constructor() {
        this.newTodo = '';
     }

    ngOnInit() {
      this.todos=[
      ];
    }
  //
  addTodo(event) {
    this.todoObj = {
          text: this.newTodo
        }
    this.todos.push(this.todoObj);
    this.newTodo = '';
    event.preventDefault();
  };

  deleteTodo(index) {
    this.todos.splice(index,1);

  }
  deleteSelectedTodos() {
       //need ES5 to reverse loop in order to splice by index
       for(var i=(this.todos.length -1); i > -1; i--) {
         if(this.todos[i].completed) {
           this.todos.splice(i, 1);
         }
       }
     }


}
