import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './act.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counterrx',
  templateUrl: './counterrx.component.html',
  styleUrls: ['./counterrx.component.scss']
})
export class CounterrxComponent implements OnInit {
  count:any ;
  constructor(
    public store: Store<any>
    ) { 
   
  }
  

  ngOnInit(): void {
     this.store.select('count').subscribe((c)=>{
this.count = c;
    })
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
