import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetapService {

  constructor( private http:HttpClient) {

   }

   getapi():Observable<any>{

    // const myheaderparam = {
    //   headers : {"headers1":"value1"},
    //   parameters: {"parameter1":"pvalue1"}
    // }

    let myparams= new HttpParams();
    myparams = myparams.set("abc","val1");
    myparams= myparams.set("car","verna");
    myparams = myparams.set("emplist",["1","2"] as any);
    let myheaders = new HttpHeaders({"key1":"val1"});
    myheaders = myheaders.set("Authkey","123-456-qwe");
    return this.http.get('https://jsonplaceholder.typicode.com/users',{headers:myheaders,params:myparams},
    // myheaderparam
    );
   }
}
