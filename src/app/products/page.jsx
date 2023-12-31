"use client";
import ProductCart from "@/components/ProductCart";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data.json");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="pb-20 px-5 md:px-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center pb-3">
          <h4 className="text-xl">Collection of This Month</h4>
          <p className="text-[#6E7092]">Choose your t-shirt as you like</p>
        </div>

        <div className="grid md:grid-cols-4 items-center justify-center gap-10">
          {products.slice(0,8).map((item) => (
            <ProductCart key={item.id} item={item} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-5">
          <Link href={'/shop'}>
            <button className="hover:bg-[#38BDF8] hover:text-white text-[#38BDF8] py-1 px-2 rounded border-2 border-[#38BDF8]">See All Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
