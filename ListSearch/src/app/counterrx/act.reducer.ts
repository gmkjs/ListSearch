import { Action, createReducer, on, State } from "@ngrx/store";
import { increment , decrement, reset} from "./act.actions";


 const initialState = 1 ;

const _counterReducer = createReducer(
    initialState,
    on(increment,(state) => {return state + 1}),
    on(decrement,(state) => {return state - 1}),
    on(reset,(state)=> {return 0}),
);


export function counterReducer(state:any, action: any){

    return _counterReducer(state, action);

}