import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: []
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,

    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload]
        },

        removeFromBasket: (state, action) => {
            state.value = items - 1
        }
    }
})

export default basketSlice.reducer
export const { addToBasket, removeFromBasket } = basketSlice.actions
export const selectBasketItems = (state) => state.basket.items
export const selectBasketItemsWithId = (state, id) => state.basket.items.filter((item) => item.id === id)