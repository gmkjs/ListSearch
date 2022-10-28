import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.scss']
})
export class OuterComponent implements OnInit {
 @Output() place = new EventEmitter() ;
 
 airport:string = 'gannavaram';

  constructor() { }

  ngOnInit(): void {
  }

  getflight(){
    alert('child works in outer');

    this.place.emit();
  }

}
