import Image from "next/image";
import React from "react";

export default function FeaturedCard() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[300px] md:flex-row md:w-[500px] md:h-[300px]">
        <Image
          src={"/img/datsun.jpeg"}
          width={300}
          height={300}
          alt="img/datsun.jpeg"
          className="md:h-full object-cover"
        />
        <p className="bg-white p-4 text-black text-sm text-justify md:w-[200px] md:h-full">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </>
  );
}
