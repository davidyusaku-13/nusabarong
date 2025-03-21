import Image from "next/image";
import React from "react";

export default function GalleriesCard() {
  return (
    <>
      <div>
        <Image
          src="/img/hiace-premio.jpg"
          width={450}
          height={250}
          alt="img/hiace-premio.jpg"
          className="w-[450px] h-[250px] object-cover rounded-lg"
        />
      </div>
    </>
  );
}
