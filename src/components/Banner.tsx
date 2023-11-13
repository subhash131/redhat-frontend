import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">
          <div className="slider-item">
            <Image
              src="/assets/banner-1.jpg"
              alt="women's latest fashion sale"
              width={100}
              height={100}
              className="banner-img"
            />

            <div className="banner-content">
              <p className="banner-subtitle">Trending item</p>

              <h2 className="banner-title">Women&apos;s latest fashion sale</h2>

              <p className="banner-text">
                starting at &dollar; <b>20</b>.00
              </p>

              <a href="#" className="banner-btn">
                Shop now
              </a>
            </div>
          </div>

          <div className="slider-item">
            <Image
              src="/assets/banner-2.jpg"
              alt="modern sunglasses"
              width={100}
              height={100}
              className="banner-img"
            />

            <div className="banner-content">
              <p className="banner-subtitle">Trending accessories</p>

              <h2 className="banner-title">Modern sunglasses</h2>

              <p className="banner-text">
                starting at &dollar; <b>15</b>.00
              </p>

              <a href="#" className="banner-btn">
                Shop now
              </a>
            </div>
          </div>

          <div className="slider-item">
            <Image
              src="/assets/banner-3.jpg"
              alt="new fashion summer sale"
              width={100}
              height={100}
              className="banner-img"
            />

            <div className="banner-content">
              <p className="banner-subtitle">Sale Offer</p>

              <h2 className="banner-title">New fashion summer sale</h2>

              <p className="banner-text">
                starting at &dollar; <b>29</b>.99
              </p>

              <a href="#" className="banner-btn">
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
