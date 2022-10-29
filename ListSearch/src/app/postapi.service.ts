import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PostapiService {
// public capi = 'HTTP://API.SHOUTCLOUD.IO/V1/SHOUT';
public url = 'https://reqres.in/api/register'
  constructor(private mk: HttpClient) { }

  getPostData(): Observable <any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    
    };
    const body = {
      "email": "eve.holt@reqres.in",
  "password": "pistol"
     }
   
return this.mk.post(this.url, body, httpOptions);


  }

}
