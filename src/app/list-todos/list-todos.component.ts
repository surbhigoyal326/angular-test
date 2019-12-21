import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../service/data/todo-service.service';
import { Router } from '@angular/router';


export class Todo {
  constructor(
   public id: number,
   public description: string,
   public done: boolean,
   public targetDate: Date,
   // public userName: string
  ) {}
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: string;
//    = [
//     new Todo(1, 'Learn to dance', false, new Date()),
//     new Todo(2, 'Learn to sing', false, new Date()),
//     new Todo(3, 'Learn angular', false, new Date())


//       { id : 1 , description : 'Dancer' },
//       { id : 2 , description : 'Singer'},
//       { id : 3 , description : 'enterpreneur'}
// ];
  constructor( private todoService: TodoServiceService, private router: Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retriveAllTodos('admin').subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    // console.log(`delete done ${id}`);
    this.todoService.deleteTodoMethod('admin', id).subscribe(
      response => {
         console.log(response);
         this.message = `Delete successful for ${id}`;
         this.refreshTodos();
      }
    );

  }

  updateTodo(id) {
   this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
   }
}
