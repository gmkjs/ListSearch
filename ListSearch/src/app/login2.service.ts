import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Login2Service {

  constructor() { }

  login2(data:any){
    console.log('login services working smooth');
    if(data.username2=="muralikrishna@gmail.com" && data.password2=="welcome"){
      return true;
    }else{
      return false;
    }
  }


}
