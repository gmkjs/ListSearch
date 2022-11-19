import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

     postusers(data:any){

      return this.http.post(this.url,data);
     }
     saveUsers(data:any){
      return this.http.post(this.url,data)
     }


     getList(): Observable<any> {
      
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    
     }
}
