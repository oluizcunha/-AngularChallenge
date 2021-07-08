import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../model/todo';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class TodoService {
  url = 'http://localhost:3000/'; // API REST COM JSON-SERVER

  constructor(private http: HttpClient) {}

  // HEADERS
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  // LISTA TODAS AS TASKS EM UM ARRAY
  getToDos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(this.url + 'todos')
      .pipe(catchError(this.handleError));
  }

  // TRAZ TASK POR ID
  getToDo(id: number): Observable<Todo> {
    return this.http
      .get<Todo>(this.url + 'todos/' + id)
      .pipe(catchError(this.handleError));
  }

  // CRIA NOVA TASK
  createToDo(toDo: Todo): Observable<Todo> {
    return this.http
      .post<Todo>(this.url + 'todos', JSON.stringify(toDo), this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // ATUALIZA UMA TASK
  updateToDo(id: number, toDo: Todo): Observable<Todo> {
    return this.http
      .put<Todo>(
        this.url + 'todos/' + id,
        JSON.stringify(toDo),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  // REMOVE TASK
  deleteToDo(id: number): Observable<Todo> {
    return this.http
      .delete<Todo>(this.url + 'todos/' + id, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // MANIPULADOR DE ERRO
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // CLIENT-SIDE ERROR
      errorMessage = error.error.message;
    } else {
      // SERVER-SIDE ERROR
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
