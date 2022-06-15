import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { MyPostsComponent } from './my-posts/my-posts.component';



@NgModule({
  declarations: [
    FeedComponent,
    AllPostsComponent,
    MyPostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [

  ]
})
export class FeedModule { }
