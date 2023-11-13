"use client";
import { ProductType } from "@/types/product.type";
import Image from "next/image";
import React from "react";
import { Star, StarOutline } from "react-ionicons";

const CartCard = ({
  badge,
  name,
  ImageUrl,
  description,
  id,
  offerPrice,
  originalPrice,
  stars,
}: ProductType) => {
  return (
    <div className="showcase-container ">
      <div className="showcase">
        <div className="showcase-banner">
          <Image
            src={ImageUrl}
            alt={name}
            className="showcase-img"
            width={10}
            height={10}
          />
        </div>

        <div className="showcase-content">
          <div className="showcase-rating">
            {[...Array(stars)].map((_, i) => (
              <Star key={`${name}:${i}`} />
            ))}
            {[...Array(5 - stars)].map((_, i) => (
              <StarOutline key={`${name}:${i}`} />
            ))}
          </div>

          <a href="#">
            <h3 className="showcase-title">{name}</h3>
          </a>

          <p className="showcase-desc">{description}</p>

          <div className="price-box">
            <p className="price">{offerPrice}</p>

            <del>{originalPrice}</del>
          </div>

          <div className="showcase-status">
            <div className="wrapper">
              <p>
                already sold: <b>20</b>
              </p>

              <p>
                available: <b>40</b>
              </p>
            </div>

            <div className="showcase-status-bar"></div>
          </div>

          <div className="countdown-box">
            <p className="countdown-desc">Hurry Up! Offer ends in:</p>

            <div className="countdown">
              <div className="countdown-content">
                <p className="display-number">360</p>

                <p className="display-text">Days</p>
              </div>

              <div className="countdown-content">
                <p className="display-number">24</p>
                <p className="display-text">Hours</p>
              </div>

              <div className="countdown-content">
                <p className="display-number">59</p>
                <p className="display-text">Min</p>
              </div>

              <div className="countdown-content">
                <p className="display-number">00</p>
                <p className="display-text">Sec</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
