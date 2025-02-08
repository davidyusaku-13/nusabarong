import React from "react";
import FeaturedCard from "./FeaturedCard";

export default function Featured() {
  return (
    <>
      {/* min height 737 + 32(pb-8) = 769px */}
      <div className="bg-black text-white flex flex-col w-full min-h-[737px] pb-8">
        <div className="my-24 justify-center items-center text-center">
          <p className=" text-[64px] font-extrabold">FEATURED PRODUCTS</p>
        </div>
        <div className="flex flex-wrap justify-evenly items-center gap-8">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div>
      </div>
    </>
  );
}
