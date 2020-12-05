import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { MessageViewComponent } from './message-view/message-view.component';
import { PostsComponent } from './posts/posts.component';
import { AdministrationComponent } from './administration/administration.component';
import { AdminPostComponent } from './admin-post/admin-post.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ReportedPostsComponent } from './reported-posts/reported-posts.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    MessageComponent,
    MessageViewComponent,
    PostsComponent,
    AdministrationComponent,
    AdminPostComponent,
    PageNotFoundComponent,
    AdminDashboardComponent,
    ReportedPostsComponent,
    EditProfileComponent,
  ],
  imports: [ 
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
