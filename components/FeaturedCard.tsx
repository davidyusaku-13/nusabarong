import Image from "next/image";
import React from "react";

export default function FeaturedCard() {
  return (
    <>
      <div className="flex flex-col justify-center items-center sm:flex-row sm:w-[500px] sm:h-[300px]">
        <Image
          src={"/img/datsun.jpeg"}
          alt="datsun"
          width={300}
          height={300}
          className="object-cover sm:w-[300px]"
        />
        <p className="bg-white text-black sm:w-[200px] sm:h-[300px] w-[300px] sm:p-6 p-2 text-justify text-[13px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ea
          corporis doloribus in necessitatibus inventore, explicabo nisi, alias
          fuga placeat optio nostrum voluptatum cumque repellat suscipit ullam
          exercitationem officia labore.
        </p>
      </div>
    </>
  );
}
