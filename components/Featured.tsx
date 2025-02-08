import Image from "next/image";
import React from "react";
import FeaturedCard from "./FeaturedCard";

export default function Featured() {
  return (
    <>
      <div className="bg-black text-white flex flex-col w-full min-h-[769px] pb-8">
        <div className="mt-24 justify-center items-center text-center">
          <p className=" text-[64px] font-extrabold">FEATURED PRODUCTS</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-8">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div>
      </div>
    </>
  );
}
