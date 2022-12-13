import { counterState } from "./counter.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";


const getCounterState = createFeatureSelector<counterState>('count');

export const getCounter = createSelector(getCounterState, (state)=>{
    return state.counter;
})