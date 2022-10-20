// import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { subjectService } from '../subject.service';
import { CurrencyPipe } from './currency.pipe';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService, CurrencyPipe]
})
export interface person {
  name: string;
  age: number;
  city: string;
  
  }

export class LoginComponent implements OnInit {
  rowss: any;
  searchTerm: any;
  people :  person [] = [];
  names = ['Maverick', 'Goutham', 'Arxero', 'Praveen', 'Mavericus', 'Murali'];

  constructor(private authService:AuthService, 
    private subjectService:subjectService
    
    
    ) {
      this.names.forEach((c,i)=> this.people.push({

        name: c,
        age: i + 20,
        city: 'boston' 
      })
      
      )
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



 
