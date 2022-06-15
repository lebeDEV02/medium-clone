import { FeedComponent } from './feed/feed/feed.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppGuard } from './app.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent, canActivate: [AppGuard]},
  {path: 'signup', component: SignupComponent, canActivate: [AppGuard]},
  {path: 'logout', component: LogoutComponent},
  {path: 'feed', component: FeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
