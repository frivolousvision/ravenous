import {configureStore} from "@reduxjs/toolkit";
import subRedditReducer from "../Features/subRedditSlice";

const store = configureStore({
    reducer: {
        subReddit: subRedditReducer 
    }
})

export default store;