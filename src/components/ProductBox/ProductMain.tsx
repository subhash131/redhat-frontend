"use client";
import Image from "next/image";
import React from "react";
import {
  BagAddOutline,
  EyeOutline,
  HeartOutline,
  RepeatOutline,
  Star,
  StarOutline,
} from "react-ionicons";
import ProductCard from "./ProductCard";

const ProductMain = () => {
  return (
    <div className="product-main">
      <h2 className="title">New Products</h2>

      <div className="product-grid">
        <ProductCard
          id={44}
          ImageUrl="https://5.imimg.com/data5/NM/LX/MY-42532489/mens-black-jacket-500x500.jpg"
          badge="Top"
          description="Fancy Jacket"
          name="Jacket"
          offerPrice="50"
          originalPrice="65"
          stars={4}
        />
      </div>
    </div>
  );
};

export default ProductMain;
