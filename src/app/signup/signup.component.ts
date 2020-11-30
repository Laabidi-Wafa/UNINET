import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from "../classes/user";
import { AuthService } from '../services/auth.service';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User = null;

  constructor(private auth: AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  signUpUser(f:NgForm){
    this.auth.signup(f);
    this.router.navigate(['home']);
  }

}
