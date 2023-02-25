import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogAuthService {

  constructor() { }

  getAuth(inp:any){
    if(inp.username == 'murali.hero@cmk.com' && inp.password == 'romboy' ){
return true;
    }else{
      return false;
    }
  }
}
