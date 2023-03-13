import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], //Cart Items Global State
}; //Global states to use

export const CartSlice = createSlice({
  name: "CartItems",
  initialState, //Global States
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload.product; //Data of the product passed by the Dispath in Product Details
      const cartItem = state.items.find((item) => item.id === newProduct.id); //Function to filter the Products of the Items Global State by the ID

      if (cartItem) {
        cartItem.quantity += 1;
      } //If the Cart Item is already in the Cart it will increment the quantity of the Product
      else {
        state.items.push(newProduct); //Function to push the New Product data to the items Global State
      } //If the Cart Item is not in the Cart it will just set the Product to the Cart
    },
    ChangeQuantity: (state, action) => {
      const { ProductID, Quantity } = action.payload; //Data of the product passed and Quantity to Incrise or Decrese by the Dispath in Product Details
      const cartItem = state.items.find((item) => item.id === ProductID.id); //Function to filter the Products of the Items Global State by the ID
      if (cartItem) {
        cartItem.quantity += Quantity;
      } //If the Cart Item exist in the Cart it will increment or decrese the quantity of the Product
      if (cartItem.quantity <= 0) {
        state.items = state.items.filter((item) => item.id !== ProductID.id);
      } //If the quantity of the Product is equal or lower than 0 it will remove the Product from the Cart
    },
  },
});

export const NumberofItems = (state) => state.CartItems.items.length; //Get the number of items in the Cart with Items Global State counting the lenght of the array of items

export const GetTotal = (state) =>
  state.CartItems.items.reduce(
    (sum, cartItems) => sum + cartItems.price * cartItems.quantity,
    0
  ); //Function to calculate total of price taking all the Items Price in the Cart and multiplying by the quantity of the Items, the Default Value is 0
