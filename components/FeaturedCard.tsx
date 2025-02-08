import Image from "next/image";
import React from "react";

export default function FeaturedCard() {
  return (
    <>
      <div className="flex">
        <Image src={"/img/datsun.jpeg"} width={300} height={300} alt="datsun" />
        <p className="bg-[#AF0000] w-[200px] p-6 text-justify text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </>
  );
}
