import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { AuthService } from '../auth.service';
import { subjectService } from '../subject.service';

export interface Person {
  name: string;
  age: number;
  city: string;

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})

  
 





export class LoginComponent implements OnInit {
  count=0;
  rowss: any;
  people: Person[] = [];
  searchTerm: any;
  pressData = 'Murali';
  parentData = 'today is your day bbbb';


  names = ['Maverick', 'Goutham', 'Arxero', 'Praveen', 'Mavericus', 'Murali'];

  constructor(private authService: AuthService,
    private subjectService: subjectService, public rtr: Router, private srvc: LoginService,) {

  }



  ngOnInit() {
    this.getAmigo()
  }


  checkin() {

    alert('parent is calling');
  }


  transferData() {
    this.parentData = this.pressData;
  }

  getCompData(val: any) {
    this.subjectService.getSubjectSerData(val);
    console.log(val);
  }

  getAmigo() {
    this.authService.getApiData().subscribe(res => {
      console.log(res, 'dat');
      this.rowss = res.filter((x: any) => x.id < 5);
      // this.rowss = JSON.stringify(this.rowss);
      console.log(this.rowss)
    })
  }


  lform = new FormGroup({
    uname: new FormControl(),
    upwd: new FormControl(),
    mobilenums: new FormArray([
      new FormControl()
    ])

  })



  addMnum() {
    console.log(this.lform);
    let mobilenums = this.lform.get('mobilenums') as FormArray
    mobilenums.push(new FormControl())
  }

  delete(i: number) {
    let mobilenums = this.lform.get('mobilenums') as FormArray
    mobilenums.removeAt(i);
  }



  login() {
    console.log("login is working");
    // this.rtr.navigate(["home"]);
    var res = this.srvc.validateuser(this.lform.value["uname"], this.lform.value["upwd"], this.lform.value["mobilenums"]);
    if (res) {
      localStorage.setItem("uname", this.lform.value["uname"]),
        localStorage.setItem("upwd", this.lform.value["upwd"]),
        // localStorage.setItem("skills", this.lform.value['skills'])
        this.rtr.navigate(["home"]);
    } else {

      alert("user invalid");

    }
  }

  
  incre(){
    this.count = this.count+1;
  }

  decre(){
    this.count = this.count-1;
  }

}


