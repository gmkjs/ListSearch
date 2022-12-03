import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../rest/rest.service';


@Component({
  selector: 'app-role-login',
  templateUrl: './role-login.component.html',
  styleUrls: ['./role-login.component.scss']
})
export class RoleLoginComponent implements OnInit {
  rToken:any;
  rForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password:  new FormControl('', Validators.required)
  })

  constructor(public authSrvc:RestService) { }

  ngOnInit(): void {
  }

  rLogin(){
if(this.rForm.valid){
  const datval = this.authSrvc.getLogCred(this.rForm.value)
console.log(datval);

this.authSrvc.getLogToken().subscribe((resp)=>{
  this.rToken = resp;
  console.log(resp, this.rToken.Token);
  if(resp!=null){
localStorage.setItem('token', this.rToken.Token)

  }
})
}
  }



}
