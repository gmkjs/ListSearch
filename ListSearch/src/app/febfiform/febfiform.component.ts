import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-febfiform',
  templateUrl: './febfiform.component.html',
  styleUrls: ['./febfiform.component.scss']
})
export class FebfiformComponent implements OnInit {
  username:any;
  password:any;
  constructor() { }

  ngOnInit(): void {
    this.lform();
  }

  lform(){
    this.username = '';
    this.password = '';

    console.log(this.username, this.password, 'hhh');
  }
}
