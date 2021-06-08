import { createSlice , PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number; 
}

const initialState: CounterState = {
    value: 10,
}

// React-redux is implying the name from the counterSlice + incremented
// to get counter/incremented  --- it is by configuration and dynamic
// To create the action it combined the slice name field (counterSlice) with
// the name of the reducer (incremented)
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented(state) {
            // simplified by redux toolkit
            // seems like mutating code, no return needed
            // uses a library named immer to wrap the state, 
            // creates safe, immuatable update
            state.value++;
        },
        amountAdded (state, action: PayloadAction<number>){
            state.value += action.payload;
        }
    }
});

// reducer function that knows how to update the state
export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;