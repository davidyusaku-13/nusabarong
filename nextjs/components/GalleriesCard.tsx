import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faGasPump,
  faGaugeHigh,
  faGears,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

// Define props for dynamic data
interface GalleriesCardProps {
  name: string;
  year: number;
  color: string;
  mileage: number;
  transmission: string;
  fuelType: string;
  imageUrl: string;
}

export default function GalleriesCard({
  name,
  year,
  color,
  mileage,
  transmission,
  fuelType,
  imageUrl,
}: GalleriesCardProps) {
  // Format mileage with thousands separator
  const formattedMileage = new Intl.NumberFormat("id-ID").format(mileage);

  // Ensure correct image URL handling (local or full URL)
  const validImageUrl = imageUrl.startsWith("http")
    ? imageUrl
    : `/img/${imageUrl}`;

  return (
    <div className="relative w-[445px] h-[250px] rounded-lg overflow-hidden group">
      {/* Image */}
      <Image
        src={validImageUrl}
        width={445}
        height={250}
        alt={name}
        className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50"
      />

      {/* Text Overlay - Fade Effect */}
      <div className="absolute inset-0 w-full bg-black/50 text-white flex flex-col justify-center items-center text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
        <h2 className="font-bold text-[32px]">{name}</h2>
        <div className="mt-4 grid grid-cols-2 gap-x-24 gap-y-4 place-items-start text-[20px]">
          <p className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faCalendarDays} className="w-6 h-6" /> {year}
          </p>
          <p className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faPalette} className="w-6 h-6" /> {color}
          </p>
          <p className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faGaugeHigh} className="w-6 h-6" />{" "}
            {formattedMileage}
          </p>
          <p className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faGears} className="w-6 h-6" />{" "}
            {transmission}
          </p>
          <p className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faGasPump} className="w-6 h-6" /> {fuelType}
          </p>
        </div>
      </div>
    </div>
  );
}
