import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  } from "rxjs";
import { NgForm } from '@angular/forms';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any = {email:'',password:''};
  token:string;
  constructor(private http:HttpService) {
  }

  login(f:NgForm){
    this.user.email = f.value['email'];
    this.user.password = f.value['password'];
    this.http.sendPostRequest("/auth/login",this.user).subscribe((r)=>{
      this.token = r["access_token"];
    });
  }

  signup(f: NgForm){
    this.user = {
      cin:f.value['cin'],
      email:f.value['email'],
      firstname:f.value['firstname'],
      lastname:f.value['lastname'],
      password:f.value['password']
    }
    this.http.sendPostRequest("/auth/new",this.user).subscribe((r)=>{
      console.log(r);
    });
  }
}
