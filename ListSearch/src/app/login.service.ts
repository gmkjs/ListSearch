import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  validateuser(username:any,password:any, skills: any){

    return true;

  }

}
