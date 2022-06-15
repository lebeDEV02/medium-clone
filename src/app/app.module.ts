import { FeedRoutingModule } from './feed/feed-routing.module';
import { FeedModule } from './feed/feed.module';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
} from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiInputPasswordModule } from '@taiga-ui/kit';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, SignupComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiAlertModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiButtonModule,
    TuiInputPasswordModule,
    HttpClientModule,
    FeedModule,
    FeedRoutingModule
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
