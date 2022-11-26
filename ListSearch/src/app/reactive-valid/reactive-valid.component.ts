import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
FormControl

@Component({
  selector: 'app-reactive-valid',
  templateUrl: './reactive-valid.component.html',
  styleUrls: ['./reactive-valid.component.scss']
})
export class ReactiveValidComponent implements OnInit {
  regForm:any;

  constructor() { }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required,Validators.email])
    })
    
    
  }

  getData(){
    console.log(this.regForm)
  }

}
