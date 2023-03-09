import { createSlice } from "@reduxjs/toolkit";
import { Products, Categories } from "../Product"; //Products Categories Database

const initialState = {
  products: Products, //Products Global State
  categories: Categories, //Categories Global State
  SelectedProduct: null, //Selected Product Global State
}; //Global states to use

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      const ProductID = action.payload; //Specific Product ID by payload
      state.SelectedProduct = state.products.find((p) => p.id === ProductID); //If the ID of the product is equal to the selected Product ID the state will change to selected with the info of that product
    },
  },
}); //Function to modify the states
