import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { FetchPostsService } from '../services/fetch-posts/fetch-posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.less']
})
export class AllPostsComponent implements OnInit {

  public allPosts;

  constructor(private readonly fetchPostsService: FetchPostsService) {
   }

  ngOnInit(): void {
    this.fetchPostsService.fetchAllPosts().pipe(delay(3000)).subscribe(data => this.allPosts = data);
  }

}
