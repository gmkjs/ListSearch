import { Action, createReducer, on, State } from "@ngrx/store";
import { increment , decrement, reset} from "./act.action";


export const initialState = 5 ;

const _counterReducer = createReducer(
    initialState,
    on(increment,(state) => state + 1),
    on(decrement,(state) => state - 1),
    on(reset,(state)=> 0),
);


export function counterReducer(state:any, action: any){

    return _counterReducer(state, action);

}