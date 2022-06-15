import { FeedComponent } from './feed/feed.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { MyPostsComponent } from './my-posts/my-posts.component';

const routes: Routes = [
  {
    path: 'feed',
    component: FeedComponent,
    children: [
      { path: 'all-posts', component: AllPostsComponent },
      { path: 'my-posts', component: MyPostsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedRoutingModule {}
