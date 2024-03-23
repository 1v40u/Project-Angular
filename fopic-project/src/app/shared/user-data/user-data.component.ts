import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit{
  userData: any = {};
  userTopics: any = [];
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    const username = localStorage.getItem('username');    
    if (username) {
        this.http.post<any>('http://localhost:1337/user/info', {
        username: username
        }).subscribe((data) => {
          this.userData = data;
          console.log(this.userData);
        });
        this.http.post<any>('http://localhost:1337/currentUserTopics', {
        username: username
        }).subscribe((data) => {
          this.userTopics = data;
        });
    }    
  }
}
