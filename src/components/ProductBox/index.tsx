import React from "react";
import ProductFeatured from "./ProductFeatured";
import Banner2 from "../Banner2";
import ProductMain from "./ProductMain";

const ProductBox = () => {
  return (
    <div className="product-box">
      <Banner2 />
      <ProductMain />
      <ProductFeatured />
    </div>
  );
};

export default ProductBox;
