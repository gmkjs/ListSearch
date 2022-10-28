import { Component, OnInit } from '@angular/core';
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



export class LoginComponent  implements OnInit{
  rowss: any;
  people:  Person[] = [];
  searchTerm: any;
  pressData= 'Murali';
  parentData= ''

  names = ['Maverick', 'Goutham', 'Arxero', 'Praveen', 'Mavericus', 'Murali'];

  constructor(private authService:AuthService, 
    private subjectService:subjectService) {
    
   }

   login(){
    console.log("login working");
   }

  ngOnInit() {
    this.getAmigo()
  }

  

  transferData(){
    this.parentData = this.pressData;
  }

  getCompData(val:any){
    this.subjectService.getSubjectSerData(val);
console.log(val);
  }

  getAmigo(){
    this.authService.getApiData().subscribe(res =>{
      console.log(res, 'dat');
      this.rowss = res.filter((x :any) => x.id < 5);
      // this.rowss = JSON.stringify(this.rowss);
      console.log(this.rowss)
    })
  }

}

 
