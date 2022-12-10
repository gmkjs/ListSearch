import { Component, OnInit } from '@angular/core';
import { increment, decrement, reset } from '../counter/counter.actions';
import {Store} from '@ngrx/store'

@Component({
  selector: 'app-counterrx',
  templateUrl: './counterrx.component.html',
  styleUrls: ['./counterrx.component.scss']
})
export class CounterrxComponent implements OnInit {
count:any;
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select('count').subscribe((c)=>{
this.count = c;
    })
  }

  increment(){
    this.store.dispatch(increment()) 
  }

  decrement(){
    this.store.dispatch(decrement()) 
  }

  reset(){
    this.store.dispatch(reset())
  }
}
