import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-inputdecor',
  templateUrl: './inputdecor.component.html',
  styleUrls: ['./inputdecor.component.scss']
})
export class InputdecorComponent implements OnInit {

@Input()allreviews:any;

  constructor() { }

  ngOnInit(): void {
  }

}
