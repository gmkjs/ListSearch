import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetapService {

  constructor( private http:HttpClient) {

   }

   getapi():Observable<any>{
    let myheaders = new HttpHeaders({"key1":"val1"});
    return this.http.get('https://jsonplaceholder.typicode.com/users',{headers:myheaders});
   }
}
