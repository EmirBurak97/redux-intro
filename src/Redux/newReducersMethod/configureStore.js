import { createSlice } from '@reduxjs/toolkit';
import * as actionTypes from "../actions/actionTypes";

const actionSlice = createSlice ({
    name: 'actionss',
    initialState: [],
    reducers : {
        INCREASE_COUNTER(state=0,action) {
            let newState;
            newState=state+action.payload;
            
        },
        DECREASE_COUNTER(state=0,action) {
            let newState;
            newState=state-action.payload;
        },
        INCREASE_BY_TWO_COUNTER(state=0,action) {           
            let newState;
            newState=state+action.payload;
        }
    }
})

export const {INCREASE_COUNTER,DECREASE_COUNTER,INCREASE_BY_TWO_COUNTER} = actionSlice.actions
export default actionSlice.reducer