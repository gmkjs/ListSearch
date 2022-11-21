import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './act.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counterrx',
  templateUrl: './counterrx.component.html',
  styleUrls: ['./counterrx.component.scss']
})
export class CounterrxComponent implements OnInit {
count$: Observable<number>;
  constructor(private store: Store<{count:number}>) { 
    this.count$ = this.store.select('count');
  }

  ngOnInit(): void {
    
  }

  increment(){
    this.store.dispatch(increment())
    console.log(this.store.dispatch(increment()))
  }

  reset(){
    this.store.dispatch(reset())
  }

  decrement(){
    this.store.dispatch(decrement())
  }

}
