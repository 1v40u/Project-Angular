import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Comment } from 'src/app/types/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
  commentsArr: Comment[] | null = [];
  isLoading: boolean = true;
  topicName: string = '';
  author: any = localStorage.getItem('username');
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private http: HttpClient){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((i) => {
      this.topicName = (i['topicName']);
      console.log(this.topicName);
    });

    this.api.getComments(`comments/${this.topicName}`).subscribe((comments) => {
      console.log(comments);
      this.commentsArr = comments;
      this.isLoading = false;
    })
  }

  addCommentHandler(form: NgForm) {
    let topic = ''
    this.activatedRoute.params.subscribe((i) => {
      topic = (i['topicName']);
      console.log(this.topicName);
    });
    const addedText = form.value['addText'];
    
    if(form.invalid){
      return
    }

    this.http.post<any>('http://localhost:1337/addComment', {
        author: this.author,
        text: addedText,
        topic: topic,
      }).subscribe((data) => {
        form.reset();
      });
    
    form.reset();
  }
}
