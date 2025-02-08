import Image from "next/image";
import React from "react";

export default function FeaturedCard() {
  return (
    <>
      <div className="flex">
        <Image
          src={"/img/datsun.jpeg"}
          width={300}
          height={300}
          alt="datsun"
          className=""
        />
        <p className="bg-white text-black w-[200px] p-6 text-justify text-sm ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor maxime
          aspernatur eveniet rem, atque quam temporibus, ipsam non qui beatae
          magni esse, perspiciatis repellendus. Fugit praesentium sint
          temporibus amet dolores.
        </p>
      </div>
    </>
  );
}
