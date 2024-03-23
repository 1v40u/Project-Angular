import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Topic } from 'src/app/types/topic';

@Component({
  selector: 'app-uncategorized',
  templateUrl: './uncategorized.component.html',
  styleUrls: ['./uncategorized.component.css']
})
export class UncategorizedComponent implements OnInit{
  topicsArr: Topic[] | null = [];
  isLoading: boolean = true;
  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.api.getTopics('categories/uncategorized').subscribe((topics) => {
      console.log(topics);
      this.topicsArr = topics;
      this.isLoading = false;
    })
  }
}
