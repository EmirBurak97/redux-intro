import { createSlice } from '@reduxjs/toolkit';
import { increaseCounter,decreaseCounter,increaseByTwoCounter } from '../actions/counterActions';

const actionSlice = createSlice ({
    name: 'actionss',
    initialState: [],
    reducers : {
        increaseCounter(state=0,action) {
            let newState;
            newState=state+action.payload;
            
        },
        decreaseCounter(state=0,action) {
            let newState;
            newState=state-action.payload;
        },
        increaseByTwoCounter(state=0,action) {           
            let newState;
            newState=state+action.payload;
        }
    }
})

export const {increaseCounter,decreaseCounter,increaseByTwoCounter} = actionSlice.actions
export default actionSlice.reducer