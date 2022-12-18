import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { delay, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RresolveService implements Resolve<Observable<any>>{
public url = 'https://reqres.in/api/users?page=2';
  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
return this.http.get(this.url).pipe(delay(1000))
  }

  resolve():Observable<any>{
   return  this.getUsers();
  }
}
