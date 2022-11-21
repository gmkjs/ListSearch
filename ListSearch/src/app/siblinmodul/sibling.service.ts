import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SiblingService {

  sendmessage = new Subject();
  sendobject = new Subject();
  sendarray = new Subject();

    constructor() { }

    communicatemessage(msg:any){
      this.sendmessage.next(msg);
    }

    communicateobject(obj:any){
      this.sendobject.next(obj);
    }

    communicatearry(arr:any){
      this.sendarray.next(arr);
    }
}
