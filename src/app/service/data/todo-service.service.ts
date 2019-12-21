import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { TODO_JPA_API_URL } from './../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private httpClient: HttpClient) { }

  retriveAllTodos(username) {
    return this.httpClient.get<Todo[]>(`${TODO_JPA_API_URL}/user/${username}/todos`);
  }

  deleteTodoMethod(username, id) {
    return this.httpClient.delete(`${TODO_JPA_API_URL}/user/${username}/todos/${id}`);
  }

  retrieveTodoMethod(username, id) {
    return this.httpClient.get<Todo>(`${TODO_JPA_API_URL}/user/${username}/todos/${id}`);
  }

  updateTodoMethod(username, id, todo) {
    return this.httpClient.put(`${TODO_JPA_API_URL}/user/${username}/todos_update/${id}`, todo);
  }

  createTodoMethod(username, todo) {
    return this.httpClient.put(`${TODO_JPA_API_URL}/user/${username}/todos_added`, todo);
  }
}
