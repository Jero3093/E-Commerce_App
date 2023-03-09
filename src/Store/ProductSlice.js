import { createSlice } from "@reduxjs/toolkit";
import { Products, Categories } from "../Product"; //Products Categories Database

const initialState = {
  products: Products, //Products Global State
  categories: Categories, //Categories Global State
  SelectedProduct: null, //Selected Product Global State
  SelectedCategory: null, //Selected Category Global State
}; //Global states to use

export const ProductSlice = createSlice({
  name: "products",
  initialState, //Global States
  reducers: {
    setSelectedProduct: (state, action) => {
      const ProductID = action.payload; //Specific Product ID by payload
      state.SelectedProduct = state.products.find((p) => p.id === ProductID); //If the ID of the product is equal to the selected Product ID the state will change to selected with the info of that product
    },
    setSelectedCategory: (state, action) => {
      const CategoryName = action.payload;
      state.SelectedCategory = state.products.find(
        (p) => p.category === CategoryName
      );
    }, //If the Category of the product is equal to the Selected Category Name the state will change to the selected with the info of that products with the same category
  },
}); //Function to modify the states
