import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changdetec',
  templateUrl: './changdetec.component.html',
  styleUrls: ['./changdetec.component.scss']
})
export class ChangdetecComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  triggerchild(){
    console.log("child triggered");
  }

}
