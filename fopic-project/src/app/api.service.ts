import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Topic } from './types/topic';
import { Comment } from './types/comment';
import { User } from './types/user';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  url = 'http://localhost:1337'
  constructor(private http: HttpClient) {}

  getTopics(category: string){
    return this.http.get<Topic[]>(`${this.url}/${category}`);
  }

  getComments(topic: string){
    return this.http.get<Comment[]>(`${this.url}/${topic}`);
  }

  postUser(uri: string, data: User){
    return this.http.post<User>(uri, data);
  }

  postLogin(uri: string, data: any){
    return this.http.post<any>(uri, data);
  }
}
