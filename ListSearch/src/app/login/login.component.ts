import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  rowss: any;

  

  constructor(private authService:AuthService) {
    
   }

  ngOnInit() {
    this.getAmigo()
  }

  getAmigo(){
    this.authService.getApiData().subscribe(res =>{
      console.log(res, 'dat');
      this.rowss = res.filter((x :any) => x.id < 5);
      console.log(this.rowss)
    })
  }

}

 
