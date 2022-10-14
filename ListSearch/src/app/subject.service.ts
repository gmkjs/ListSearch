import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
}) 

export class subjectService{

    

    constructor(){}

    public subData = new Subject<string>();

   getSubjectSerData(res:any){
console.log(res,'in Subject service')

this.subData.next(res);
   }
}
    



