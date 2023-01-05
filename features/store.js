import { configureStore } from "@reduxjs/toolkit"
import basketReducer from "./basketSlice/basketSlice"
import restaurantReducer from "./restaurantSlice/restaurantSlice"





export const store = configureStore({
    reducer: {
        basket: basketReducer,
        restaurant: restaurantReducer

    }
})