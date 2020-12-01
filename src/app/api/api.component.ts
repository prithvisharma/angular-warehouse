import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';
import { Todo, Post } from './model/api.model';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  //call getTodoData
  todo: Todo;
  posts: Post[] = [];
  post: Post;
  constructor(private apiService: ApiService) {
    this.post = {
      "title": "foo",
      "body": "bar",
      "userId": 102
    }
  }

  ngOnInit(): void {
    this.apiService.getTodoData()
      .subscribe(
        data => {
          this.todo = data.body;
        }
      );

    this.apiService.getPostData().subscribe(data => {
      this.posts = data.body;
    });


    this.apiService.postPostData(this.post).subscribe(data => {
      this.post = data.body;
      console.log(this.post);
    });
  }

}
