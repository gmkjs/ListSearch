import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LogAuthService } from '../log-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   username: any;
   password: any;
lform= new FormGroup({
  username: new FormControl(),
  password: new FormControl()
});

  constructor(private srvc:LogAuthService, private rtr:Router) { }

  

  ngOnInit(): void {
  }

  getValidate(){
const res = this.srvc.getAuth(this.lform.value);
if(res == true){
this.rtr.navigate(['home'])
}
  }

}


