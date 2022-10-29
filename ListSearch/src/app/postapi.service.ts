import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostapiService {
public capi = 'HTTP://API.SHOUTCLOUD.IO/V1/SHOUT';
public url = 'http://http'
  constructor(private mk: HttpClient) { }

  getPostData(): Observable <any>{
    Headers={'Content-Type: application/json'}
return this.mk.post(url)
  }
}
