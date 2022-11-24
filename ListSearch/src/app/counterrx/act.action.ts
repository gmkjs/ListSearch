import { Action , createAction} from "@ngrx/store";

export const increment = createAction('[Counter] Increment');


export const decrement = createAction('[Counter] Decrement');


export const reset = createAction('[Counter] reset');

