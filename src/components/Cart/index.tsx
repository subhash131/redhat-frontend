"use client";
import React from "react";
import CartCard from "./CartCard";
import { Star, StarOutline } from "react-ionicons";
import HeaderMain from "../Header/HeaderMain";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const Cart = () => {
  const cartItems = useSelector(
    (state: RootState) => state.ProductReducer.cartItem
  );
  return (
    <div>
      <HeaderMain />
      {cartItems.length > 0 ? (
        <div className="product-featured container cart-grid ">
          <h2 className="title mt-2">Cart</h2>
          {cartItems.map((item) => {
            return (
              <CartCard
                ImageUrl={item.ImageUrl}
                badge={item.badge}
                description={item.description}
                id={item.id}
                name={item.name}
                offerPrice={item.offerPrice}
                originalPrice={item.originalPrice}
                stars={item.stars}
                key={`:${item.id}${item.name}:`}
              />
            );
          })}

          <div className="flex items-center justify-center mb-5 flex-col">
            <div className="w-full border rounded p-4 ">
              <p className="text-gray-600 px-1 ">items : 1</p>
              <p className="text-gray-600 px-1">Price : 65$</p>
              <p className="text-gray-600 px-1">Discount : 15$</p>
              <p className="text-gray-600 px-1 mb-5">Total : 50$</p>
              <hr />
              <button className="bg-blue-600 text-white px-6 py-2 rounded mt-3">
                Check Out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-2 h-[70vh] flex items-center justify-center  text-gray-700">
          <p>No Items in the cart</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
