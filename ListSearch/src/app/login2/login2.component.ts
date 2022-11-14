import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Login2Service } from '../login2.service';



@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  constructor(private gtm:Login2Service, private routing:Router) { }

  ngOnInit(): void {

  }
  
  loginform2= new FormGroup ({
    username2: new FormControl(),
    password2: new FormControl()
  })

  login2(){
    console.log("loginform is working smoothly");
   const response = this.gtm.login2(this.loginform2.value);
   if(response == true){
    this.routing.navigate(['home']);
   }
    // this.gtm;

  }

}