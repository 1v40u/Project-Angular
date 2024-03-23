import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Topic } from 'src/app/types/topic';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit{
  topicsArr: Topic[] | null = [];
  isLoading: boolean = true;
  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.api.getTopics('categories/computers').subscribe((topics) => {
      console.log(topics);
      this.topicsArr = topics;
      this.isLoading = false;
    })
  }
}
