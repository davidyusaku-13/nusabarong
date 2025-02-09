import React from "react";
import FeaturedCard from "./FeaturedCard";
import Image from "next/image";

export default function Featured() {
  return (
    <>
      <div className="bg-black text-white flex flex-col w-full min-h-[94vh] pb-8">
        <div className="my-24 justify-center items-center text-center">
          <p className="sm:text-[64px] text-3xl font-extrabold">
            FEATURED PRODUCTS
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div>
      </div>
    </>
  );
}
