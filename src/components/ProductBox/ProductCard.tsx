"use client";
import { addToCart } from "@/app/redux/features/ProductSlice";
import { ProductType } from "@/types/product.type";
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
import { useDispatch } from "react-redux";

const ProductCard = ({
  id,
  ImageUrl,
  badge,
  name,
  description,
  originalPrice,
  offerPrice,
  stars,
}: ProductType) => {
  const dispatch = useDispatch();
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(
      addToCart({
        id,
        ImageUrl,
        badge,
        name,
        description,
        originalPrice,
        offerPrice,
        stars,
      })
    );
  };
  return (
    <div className="showcase">
      <div className="showcase-banner">
        <Image
          src={ImageUrl}
          alt="Mens Winter Leathers Jackets"
          width="300"
          height="300"
          className="product-Image default"
        />

        <p className="showcase-badge">{badge}</p>

        <div className="showcase-actions">
          <button className="btn-action">
            <HeartOutline />
          </button>

          <button className="btn-action">
            <EyeOutline />
          </button>

          <button className="btn-action">
            <RepeatOutline />
          </button>

          <button className="btn-action" onClick={handleClick}>
            <BagAddOutline />
          </button>
        </div>
      </div>

      <div className="showcase-content">
        <a href="#" className="showcase-category">
          {name}
        </a>

        <a href="#">
          <h3 className="showcase-title">{description}</h3>
        </a>

        <div className="showcase-rating">
          {[...Array(stars)].map((_, i) => {
            return <Star key={i} />;
          })}
          {[...Array(5 - stars)].map((_, i) => {
            return <StarOutline key={i} />;
          })}
        </div>
        <div className="price-box">
          <p className="price">{offerPrice}</p>
          <del>{originalPrice}</del>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
