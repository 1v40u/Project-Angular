import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css']
})
export class CreateTopicComponent{
  constructor(private http: HttpClient, private router: Router){}

  createTopicSubmitHandler(form: NgForm) {
    const username = localStorage.getItem('username');    
    const topicName = form.value['topic-name'];
    const category = form.value['categories'];    
    if(form.invalid){
      return
    }

    this.http.post<any>('http://localhost:1337/createTopic', {
        creator: username,
        topicName: topicName,
        category: category
      }).subscribe();
  }
}
