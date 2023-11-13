"use client";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductBox from "@/components/ProductBox";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {}, []);
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <div className="product-container">
          <div className="container">
            <ProductBox />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
