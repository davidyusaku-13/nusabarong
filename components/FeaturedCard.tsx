import Image from "next/image";
import React from "react";

export default function FeaturedCard() {
  return (
    <>
      <div className="flex min-w-[300px]">
        <div className="relative w-[300px]">
          <Image
            src={"/img/datsun.jpeg"}
            alt="datsun"
            fill
            className="object-cover"
          />
        </div>
        <p className="bg-white text-black w-[300px] p-6 text-justify text-sm ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor maxime
          aspernatur eveniet rem, atque quam temporibus, ipsam non qui beatae
          magni esse, perspiciatis repellendus. Fugit praesentium sint
          temporibus amet dolores.Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Dolor maxime aspernatur eveniet rem, atque quam
          temporibus, ipsam non qui beatae magni esse, perspiciatis repellendus.
          Fugit praesentium sint temporibus amet dolores.
        </p>
      </div>
    </>
  );
}
