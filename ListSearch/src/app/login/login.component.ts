import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  constructor(public rtr:Router, private srvc:LoginService, ) { 

  }

  ngOnInit() {
  
  }
  lform = new FormGroup({
    uname: new FormControl(),
    upwd: new FormControl(),
    mobilenums: new FormArray([
      new FormControl()
    ])
    
  })

 
  
  addMnum(){
    console.log(this.lform);
    let mobilenums = this.lform.get('mobilenums') as FormArray
    mobilenums.push(new FormControl())
  }

  delete(i: number){
    let mobilenums = this.lform.get('mobilenums') as FormArray
    mobilenums.removeAt(i);
  }

 

  login(){
    console.log("login is working");
    // this.rtr.navigate(["home"]);
    var res = this.srvc.validateuser(this.lform.value["uname"],this.lform.value["upwd"], this.lform.value["mobilenums"]);
     if(res){
      localStorage.setItem("uname",this.lform.value["uname"]),
      localStorage.setItem("upwd", this.lform.value["upwd"]),
      // localStorage.setItem("skills", this.lform.value['skills'])
    this.rtr.navigate(["home"]);
     }else{

      alert("user invalid");

     }
  }

  

}
