import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './users';



@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) {   }

     url: string = "http://localhost:3000/Users";
     
     getusers(){

      return this.http.get<Users[]>(this.url);

     }
}