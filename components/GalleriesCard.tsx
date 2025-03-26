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

export default function GalleriesCard() {
  return (
    <div className="relative w-[445px] h-[250px] rounded-lg overflow-hidden group">
      {/* Image */}
      <Image
        src="/img/hiace-premio.jpg"
        width={445}
        height={250}
        alt="img/hiace-premio.jpg"
        className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50"
      />

      {/* Text Overlay - Hidden initially, slides up & fades in on hover */}
      <div className="absolute inset-0 w-full text-white flex flex-col justify-center items-center text-center transition-all duration-300  opacity-0 group-hover:opacity-100">
        <h2 className="text-xl font-bold">Honda CR-V 2.4 AT</h2>
        <div className="mt-4 w-1/2 grid grid-cols-2 gap-x-16 gap-y-4 place-items-start">
          <p className="flex justify-center items-center gap-2 mt-1 text-sm text-justify">
            <FontAwesomeIcon className="w-4 h-4" icon={faCalendarDays} /> 2017
          </p>
          <p className="flex justify-center items-center gap-2 mt-1 text-sm text-justify">
            <FontAwesomeIcon className="w-4 h-4" icon={faPalette} /> Hitam
          </p>
          <p className="flex justify-center items-center gap-2 mt-1 text-sm text-justify">
            <FontAwesomeIcon className="w-4 h-4" icon={faGaugeHigh} /> 84.000
          </p>
          <p className="flex justify-center items-center gap-2 mt-1 text-sm text-justify">
            <FontAwesomeIcon className="w-4 h-4" icon={faGears} /> Otomatis
          </p>
          <p className="flex justify-center items-center gap-2 mt-1 text-sm text-justify">
            <FontAwesomeIcon className="w-4 h-4" icon={faGasPump} /> Bensin
          </p>
        </div>
      </div>
    </div>
  );
}
