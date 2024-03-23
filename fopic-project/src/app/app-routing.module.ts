import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { UserDataComponent } from './shared/user-data/user-data.component';
import { CarsComponent } from './categories/cars/cars.component';
import { CodingComponent } from './categories/coding/coding.component';
import { ComputersComponent } from './categories/computers/computers.component';
import { GamingComponent } from './categories/gaming/gaming.component';
import { UncategorizedComponent } from './categories/uncategorized/uncategorized.component';
import { CreateTopicComponent } from './shared/create-topic/create-topic.component';
import { CommentsComponent } from './shared/comments/comments.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'profile-info', component: UserDataComponent},
  {path:'categories/cars', component: CarsComponent},
  {path:'categories/coding', component: CodingComponent},
  {path:'categories/computers', component: ComputersComponent},
  {path:'categories/gaming', component: GamingComponent},
  {path:'categories/uncategorized', component: UncategorizedComponent},
  {path:'create-topic', component: CreateTopicComponent},
  {path:'comments/:topicName', component: CommentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
