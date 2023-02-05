import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (event) =>{
            event.count +=1
        },
        decrement: (event) =>{
            event.count -=1
        },
        reset: (event) =>{
            event.count = 0
        },
        incrementByAmount: (event,action) => {
            event.count += action.payload
        }


    }
})

export const {increment,decrement,reset,incrementByAmount} = counterSlice.actions

export default counterSlice.reducer