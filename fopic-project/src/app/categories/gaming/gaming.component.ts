import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Topic } from 'src/app/types/topic';

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.css']
})
export class GamingComponent implements OnInit{
  topicsArr: Topic[] | null = [];
  isLoading: boolean = true;
  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.api.getTopics('categories/gaming').subscribe((topics) => {
      console.log(topics);
      this.topicsArr = topics;
      this.isLoading = false;
    })
  }
}
