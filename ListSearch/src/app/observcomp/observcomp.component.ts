import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-observcomp',
  templateUrl: './observcomp.component.html',
  styleUrls: ['./observcomp.component.scss']
})
export class ObservcompComponent implements OnInit {

  mySubj = new Subject();

  btnclik(mks:string){
    alert("Subject display");
    this.mySubj.subscribe(function(){
      console.log("Subject function");
    });

    this.mySubj.next(mks);


  }


  constructor() { }



  ngOnInit() {
  }

  

}
