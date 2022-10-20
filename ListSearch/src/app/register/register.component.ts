import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form1 = {
    username:'',
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confirmpassword:''
  }

  constructor() { }

  ngOnInit(): void {
  }

onSubmit(){
  this.form1;
  console.log(JSON.stringify(this.form1),'form data');
}

reset(form1: NgForm){
form1.reset();
}





}
