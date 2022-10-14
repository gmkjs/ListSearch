import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

// function(){
  
//   return this.http.get("https://jsonplaceholder.typicode.com/posts",'any');

// }

constructor(private http: HttpClient) { }

getApiData(): Observable<any> {
return this.http.get('https://jsonplaceholder.typicode.com/posts')
}


}
