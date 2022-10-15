import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-promiscomp',
  templateUrl: './promiscomp.component.html',
  styleUrls: ['./promiscomp.component.scss']
})

export class PromiscompComponent implements OnInit {



  constructor() { }

  ngOnInit() {

    var p1 = new Promise(function(fulfilcbfn,rejectcbfn){

      if(!true){
        fulfilcbfn("i am promise1")

        }
        else {
          rejectcbfn("i am promise2")
        }
      })

      p1.then(function(val1){ console.log(val1);}).catch((val2)=>{console.log(val2)})

    };
  

}
