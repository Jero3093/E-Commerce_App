import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./ProductSlice"; //Product Slice Component

export const store = configureStore({
  reducer: {
    products: ProductSlice.reducer, //Products Data
  },
}); //Function to Store all the states in the initial state to use it in the entire app
