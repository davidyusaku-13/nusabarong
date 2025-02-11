import Image from "next/image";
import React from "react";

export default function FeaturedProductsCard() {
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
        <p className="bg-white p-4 text-black text-sm text-justify overflow-hidden text-ellipsis md:w-[200px] md:h-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          convallis dolor in augue sagittis, eget laoreet odio viverra. Donec
          luctus purus dignissim turpis placerat feugiat. Proin ac luctus felis.
          Morbi facilisis tellus nec turpis placerat, et egestas massa
          facilisis.
        </p>
      </div>
    </>
  );
}
