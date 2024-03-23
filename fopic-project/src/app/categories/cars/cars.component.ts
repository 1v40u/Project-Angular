import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Topic } from 'src/app/types/topic';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{
  topicsArr: Topic[] | null = [];
  isLoading: boolean = true;
  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.api.getTopics('categories/cars').subscribe((topics) => {
      console.log(topics);
      this.topicsArr = topics;
      this.isLoading = false;
    })
  }
  
}