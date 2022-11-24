import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, Observable } from 'rxjs';
// mergeMap
// 



@Injectable({
  providedIn: 'root'
})
export class MergeapiService {
  public firstApi = 'https://jsonplaceholder.typicode.com/users';
  public secondApi = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

      // getTwoApi():Observable<any>{
// return this.http.get()



      // }


}
