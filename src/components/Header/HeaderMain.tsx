"use client";
import { RootState } from "@/app/redux/store";
import Link from "next/link";
import React from "react";
import {
  BagHandleOutline,
  HeartOutline,
  PersonOutline,
  SearchOutline,
} from "react-ionicons";
import { useSelector } from "react-redux";

const HeaderMain = () => {
  const cartItems = useSelector(
    (state: RootState) => state.ProductReducer.cartItem
  );
  return (
    <div className="header-main">
      <div className="container">
        <a href="#" className="header-logo">
          <p>RedHat</p>
        </a>
        <div className="header-search-container">
          <input
            type="search"
            name="search"
            className="search-field"
            placeholder="Enter your product name..."
          />

          <button className="search-btn bg-none">
            <SearchOutline />
          </button>
        </div>

        <div className="header-user-actions">
          <button className="action-btn">
            <PersonOutline width="30px" height="30px" />
          </button>

          <button className="action-btn">
            <HeartOutline width="30px" height="30px" />
            <span className="count">1</span>
          </button>
          <Link href="cart" className="action-btn">
            <BagHandleOutline width="30px" height="30px" />
            <span className="count">{cartItems.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
