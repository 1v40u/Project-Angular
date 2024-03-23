import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { UserDataComponent } from './user-data/user-data.component';
import { CreateTopicComponent } from './create-topic/create-topic.component';
import { CommentsComponent } from './comments/comments.component';
import { CategoriesModule } from '../categories/categories.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserDataComponent,
    CreateTopicComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CategoriesModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserDataComponent,
    CreateTopicComponent,
  ]
})
export class SharedModule { }
