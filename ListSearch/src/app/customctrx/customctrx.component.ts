import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { custInput } from '../counter/counter.actions';

@Component({
  selector: 'app-customctrx',
  templateUrl: './customctrx.component.html',
  styleUrls: ['./customctrx.component.scss']
})
export class CustomctrxComponent implements OnInit {
  value: any;
  


  constructor(private store: Store<{}>, ) { }

  ngOnInit(): void {
  }

  pass(){
    console.log(this.value)

    this.store.dispatch(custInput({count: +this.value}))
  }

}
