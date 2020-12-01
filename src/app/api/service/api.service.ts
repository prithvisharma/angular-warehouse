import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Todo, Post } from '../model/api.model';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  todoApi: string;
  postApi: string;

  constructor(private http: HttpClient) {
    this.todoApi = 'https://jsonplaceholder.typicode.com/todos/1';
    this.postApi = 'https://jsonplaceholder.typicode.com/posts';
  }

  public getTodoData(): Observable<HttpResponse<Todo>> {
    return this.http.get<Todo>(
      this.todoApi, { observe: 'response' });
  }

  public getPostData(): Observable<HttpResponse<Post[]>> {
    return this.http.get<Post[]>(
      this.postApi, { observe: 'response' });
  }

  public postPostData(post: Post): Observable<HttpResponse<Post>> {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post, { observe: 'response' });
  }

}
