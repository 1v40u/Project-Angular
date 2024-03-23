import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Topic } from 'src/app/types/topic';

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.css']
})
export class CodingComponent implements OnInit{
  topicsArr: Topic[] | null = [];
  isLoading: boolean = true;
  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.api.getTopics('categories/coding').subscribe((topics) => {
      console.log(topics);
      this.topicsArr = topics;
      this.isLoading = false;
    })
  }
}
