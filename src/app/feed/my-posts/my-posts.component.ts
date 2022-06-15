import { Component, OnInit } from '@angular/core';
import { FetchPostsService } from '../services/fetch-posts/fetch-posts.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.less']
})
export class MyPostsComponent implements OnInit {


  public userPosts;

  constructor(private readonly fetchPostsService: FetchPostsService) {
   }

  ngOnInit(): void {
    this.fetchPostsService.fetchUserPosts().subscribe(data => this.userPosts = data);
  }

}
