import { createSlice } from '@reduxjs/toolkit';

export const subRedditOptions = {
    name: "subReddit",
    initialState: 'r/nature',
    reducers: {
        chooseSub: (state, action) => {
            state.subReddit = action.payload;
        }
    }
}

export const subRedditSlice = createSlice(subRedditOptions);
export const selectSubReddit = (state) => state.subReddit;
export const {chooseSub} = subRedditSlice.actions;
export default subRedditSlice.reducer;