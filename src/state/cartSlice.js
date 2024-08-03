import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    allTotal: 0
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState, 
    reducers: {
        addProductToCart: (state, action) => {
            state.products.push(action.payload)
        },
        incrementQuantity: (state, action) => {
            const productId = action.payload
            const findProduct = state.products.find((item) => item.id == productId)
            if (findProduct) {
                findProduct.quantity += 1
            }
        },
        decrementQuantity: (state, action) => {
            const productId = action.payload
            const findProduct = state.products.find((item) => item.id == productId)
            if (findProduct && findProduct.quantity > 1) {
                findProduct.quantity -= 1
            }
        },
        removeProduct: (state, action) => {
            const productId = action.payload
            state.products = state.products.filter((item) => item.id != productId)
        },
         allTotal:(state,action) => {
            state.allTotal = action.payload
         }
    },
})

export const { addProductToCart, incrementQuantity, decrementQuantity, removeProduct, allTotal } = cartSlice.actions

export default cartSlice.reducer