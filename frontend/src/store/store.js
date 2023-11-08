import {configureStore} from "@reduxjs/toolkit"
import storeReducers from "./slice/slice";
export const store=configureStore({
    reducer:storeReducers
});

