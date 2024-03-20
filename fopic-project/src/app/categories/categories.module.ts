import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GamingComponent } from './gaming/gaming.component';
import { CarsComponent } from './cars/cars.component';
import { ComputersComponent } from './computers/computers.component';
import { CodingComponent } from './coding/coding.component';
import { UncategorizedComponent } from './uncategorized/uncategorized.component';


@NgModule({
  declarations: [
    GamingComponent,
    CarsComponent,
    ComputersComponent,
    CodingComponent,
    UncategorizedComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    GamingComponent,
    CarsComponent,
    ComputersComponent,
    CodingComponent,
    UncategorizedComponent
  ]
})
export class CategoriesModule { }
