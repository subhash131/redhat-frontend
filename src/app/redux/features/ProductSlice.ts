import { ProductType } from "@/types/product.type";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: new Array<ProductType>(),
  cartItem: [
    {
      id: 44,
      name: "Jacket",
      description: "Fancy Jacket",
      quantity: 1,
      originalPrice: 65,
      offerPrice: 50,
      ImageUrl:
        "https://5.imimg.com/data5/NM/LX/MY-42532489/mens-black-jacket-500x500.jpg",
      badge: "Top",
      stars: 4,
    },
  ],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setVideos: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      state.cartItem = [...state.cartItem, action.payload];
    },
    removeFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { setVideos, addToCart, removeFromCart } = productSlice.actions;
export default productSlice.reducer;
