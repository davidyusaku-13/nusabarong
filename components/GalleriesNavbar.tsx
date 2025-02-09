import Image from "next/image";
import Link from "next/link";
import React from "react";
import FilterAndSearch from "./FilterAndSearch";

export default function GalleriesNavbar() {
  return (
    <>
      <div className="flex justify-center items-center p-[30px] h-[131px]">
        {/* LOGO */}
        <div>
          <Link href={"/"}>
            <Image
              src="/nbm_white.png"
              width={96}
              height={79}
              alt="nbm_white.png"
              className="w-[60px] lg:w-[96px]"
            />
          </Link>
        </div>
        {/* TITLE */}
        <div className="mx-auto">
          <p className="font-extrabold 2xl:text-8xl xl:text-7xl lg:text-5xl md:text-3xl sm:text-[32px] text-[16px]">
            CAR GALLERIES
          </p>
        </div>
        <div className="flex justify-center items-center gap-x-2">
          <FilterAndSearch />
        </div>
      </div>
    </>
  );
}
