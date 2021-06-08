import { configureStore } from "@reduxjs/toolkit";

// takes a reducer and makes a store
// auto adds thunk, dev checks, etc.
import counterReducer from '../features/counter/counter-slice';

export const store = configureStore({
    reducer: {
        counter: counterReducer, // calls combineReducers -> state.counter field in state
    }
});

//export types based on the store
export type AppDispatch = typeof store.dispatch;
export type RootState =  ReturnType<typeof store.getState>;