import React from "react";
import FeaturedProductsCard from "./FeaturedProductsCard";

export default function FeaturedProducts() {
  return (
    <>
      <div className="bg-gradient-to-b from-black via-black to-[#2C2C2C] text-white flex flex-col w-full min-h-[94vh] pb-8">
        <div className="my-24 justify-center items-center text-center">
          <p className="uppercase lg:text-[64px] md:text-[42px] text-3xl font-extrabold">
            Rekomendasi Terbaik untuk Anda!
          </p>
        </div>
        <div className="flex flex-wrap xl:flex-row xl:justify-center flex-col justify-start items-center gap-8">
          <FeaturedProductsCard />
          <FeaturedProductsCard />
          <FeaturedProductsCard />
        </div>
      </div>
    </>
  );
}
