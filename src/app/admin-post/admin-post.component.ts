import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent implements OnInit {

  @Input() text:string;

  constructor() { }

  ngOnInit(): void {
  }

}
