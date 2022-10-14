import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
}) 

export class subjectService{

    

    constructor(){}

    private subData = new Subject<string>();


}
    



