import { configureStore } from "@reduxjs/toolkit"
import basketReducer from "./basketSlice/basketSlice"


export const store = configureStore({
    reducer: {
        basket: basketReducer
    }
})