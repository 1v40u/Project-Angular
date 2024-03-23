import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private api: ApiService, private router: Router){}

  userExists: boolean = false;
  errorMessage: string = '';

  registerSubmitHandler(form: NgForm) {
    const {username, email, password, rePassword} = form?.value;

    if(form.invalid){
      return;
    }

    this.api.postUser('http://localhost:1337/user/register',{
      username: username,
      email: email,
      password: password,
      avatar: 'none'
    }).subscribe();

    localStorage.setItem('username', username);
    form.reset();
    this.router.navigate([''])
  }
  
}
