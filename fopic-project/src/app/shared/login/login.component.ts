import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';

  constructor(private api: ApiService, private router: Router){}

  loginSubmitHandler(form: NgForm) {
    const {email, password} = form?.value;
    if(form.invalid){
      return;
    }
    
    this.api.postLogin('http://localhost:1337/user/login',{
      email:email,
      password: password
    }).subscribe((name) => {
      console.log(name); 
      this.username = name;
      localStorage.setItem('username', this.username); 
      form.reset();
      this.router.navigate(['']);
    });
  }
}
