import Image from "next/image";
import React from "react";

export default function FeaturedProductsCard() {
  return (
    <>
      {/* <div className="flex flex-col justify-center items-center w-[500px] md:flex-row md:w-[500px] md:h-[400px]"> */}
      <div className="flex flex-col justify-center items-center w-48 sm:w-60 lg:w-96">
        <Image
          src={"/img/terios.jpg"}
          width={500}
          height={400}
          alt="img/terios.jpg"
          className="object-cover rounded-2xl"
        />
      </div>
    </>
  );
}
