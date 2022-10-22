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



export class LoginComponent  {
  rowss: any;
  people:  Person[] = [];
  searchTerm: any;
  names = ['Maverick', 'Goutham', 'Arxero', 'Praveen', 'Mavericus', 'Murali'];

  constructor(private authService:AuthService, 
    private subjectService:subjectService) {
    
   }

  ngOnInit() {
    this.getAmigo()
  }

  getCompData(val:any){
    this.subjectService.getSubjectSerData(val);
console.log(val);
  }

  getAmigo(){
    this.authService.getApiData().subscribe(res =>{
      console.log(res, 'dat');
      this.rowss = res.filter((x :any) => x.id < 5);
      console.log(this.rowss)
    })
  }

}

 
