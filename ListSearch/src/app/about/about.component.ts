import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {



   isNextDisabled = true;

   disableform = new FormGroup({
    uname: new FormControl('',Validators.required),
    uemail: new FormControl('',Validators.required)
   })

  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {

    this.disableform.valueChanges.subscribe((v)=>{
      this.isNextDisabled = !this.disableform.valid;
    })
   
  }

  


}
