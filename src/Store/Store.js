import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./ProductSlice"; //Product Slice Component
import { CartSlice } from "./CartSlice"; //Cart Items Slice Component

export const store = configureStore({
  reducer: {
    products: ProductSlice.reducer, //Products Data
    CartItems: CartSlice.reducer, //Cart Items Data
  },
}); //Function to Store all the states in the initial state to use it in the entire app
