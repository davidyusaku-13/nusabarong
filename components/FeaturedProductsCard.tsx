import Image from "next/image";
import React from "react";

// Define the type for props
interface FeaturedProductProps {
  picture: string;
  title: string;
  description: string;
}

export default function FeaturedProductsCard({
  picture,
  title,
  description,
}: FeaturedProductProps) {
  return (
    <div className="relative w-[500px] h-[400px] rounded-2xl shadow-lg overflow-hidden group">
      {/* Image */}
      <Image
        src={"/img/" + picture}
        width={500}
        height={400}
        alt={title}
        className="w-full h-full object-cover transition-all duration-1000 group-hover:h-2/3"
      />

      {/* Text Overlay - Hidden initially, slides up & fades in on hover */}
      <div className="absolute bottom-0 w-full bg-white text-black p-4 flex flex-col transition-all duration-1000 translate-y-full opacity-100 group-hover:translate-y-0">
        <h3 className="text-2xl font-extrabold">{title}</h3>
        <p className="mt-2 text-sm text-justify font-normal">{description}</p>
      </div>
    </div>
  );
}
