import { createSlice } from '@reduxjs/toolkit';
import calculate from '../logic/calculate';

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        total: null,
        next: null,
        operation: null,
    },
    reducers: {
        calculateAction: (state, action) => {
            return calculate(state, action.payload)
        },
    },
})

export const { calculateAction } = calculatorSlice.actions;


export const selectTotal = (state) => state.calculator.total;
export const selectNext = (state) => state.calculator.next;
export const selectOperation = (state) => state.calculator.operation;

export default calculatorSlice.reducer;