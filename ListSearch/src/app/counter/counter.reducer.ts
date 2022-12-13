import {createReducer, on} from '@ngrx/store';
import { increment, decrement, reset, custInput } from './counter.actions';

const initialState = 1;


const _counterReducer = createReducer(
    initialState,
    
    on(increment,(state) => {return state + 1}),
    on(decrement,(state) => {return state - 1}),
    on(reset,(state)=> {return 0}),
    on(custInput,(state, action)=>{return  state + action.count}
    
)
);



export function counterReducer(state:any, action:any){

    return _counterReducer(state, action)
}


