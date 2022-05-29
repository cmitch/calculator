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
        calculate: (state, action) => {
            return calculate(state, action.payload)
        }
    },
})

export default calculatorSlice.reducer;