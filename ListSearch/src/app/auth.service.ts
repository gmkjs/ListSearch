import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

// function(){
  
//   return this.http.get("https://jsonplaceholder.typicode.com/posts",'any');

// }

constructor(private http: HttpClient, ) { }

getApiData(): Observable<any> {
let myheader= new HttpHeaders({'car':'electric'})
 let myParams = new HttpParams().set('bus','hydraulic')


return this.http.get('https://jsonplaceholder.typicode.com/posts',{headers: myheader, params:myParams})

}


}
