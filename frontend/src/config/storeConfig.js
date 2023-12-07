
import {configureStore} from "@reduxjs/toolkit"
import storeReducers from "../store/actions/productSlice.js";
export const store=configureStore({
    reducer:storeReducers
});

