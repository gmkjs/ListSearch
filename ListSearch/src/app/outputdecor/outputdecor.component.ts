import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-outputdecor',
  templateUrl: './outputdecor.component.html',
  styleUrls: ['./outputdecor.component.scss']
})
export class OutputdecorComponent implements OnInit {

  @Output() clickemitref = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  getdetailsfromparent(){
    alert("it is from child");
    this.clickemitref.emit();
  }

}
