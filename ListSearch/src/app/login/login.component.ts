import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public rtr:Router, private srvc:LoginService) { 

  }

  lform = new FormGroup({
    uname: new FormControl(),
    upwd: new FormControl()
  })

  login(){
    console.log("login is working");
    // this.rtr.navigate(["home"]);
    var res = this.srvc.validateuser(this.lform.value["uname"],this.lform.value["upwd"]);
     if(res){
      localStorage.setItem("uname",this.lform.value["uname"]),
      localStorage.setItem("upwd", this.lform.value["upwd"])
    this.rtr.navigate(["home"]);
     }else{

      alert("user invalid");

     }
  }

  ngOnInit(): void {
  }

}
