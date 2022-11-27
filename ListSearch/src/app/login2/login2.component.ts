import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  public formdataerror = {
    username:true
  }

  lform = new FormGroup({
    username : new FormControl(),
    email : new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }

  login(){

  }

}
