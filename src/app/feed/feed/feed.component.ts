import { FetchPostsService } from './../services/fetch-posts/fetch-posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.less']
})
export class FeedComponent implements OnInit {

  constructor(private readonly fetchPostsService: FetchPostsService) {
    
   }

  ngOnInit(): void {
  }

}
