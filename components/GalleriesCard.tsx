import Image from "next/image";
import React from "react";

export default function GalleriesCard() {
  return (
    <>
      <div>
        <Image
          src="/img/datsun.jpeg"
          width={400}
          height={400}
          alt="img/datsun.jpeg"
          className="h-[250px] w-[420px] object-cover rounded-lg"
        />
      </div>
    </>
  );
}
