import Image from "next/image";
import Link from "next/link";
import React from "react";
import FilterAndSearch from "./FilterAndSearch";

export default function GalleriesNavbar() {
  return (
    <>
      <div className="flex flex-col gap-1 xs:gap-2 md:flex-row md:justify-between justify-center items-center p-[30px] h-[131px]">
        <div className="flex w-full justify-between items-center">
          {/* LOGO */}
          <Link href={"/"}>
            <Image
              src="/nbm_white.png"
              width={96}
              height={79}
              alt="nbm_white.png"
              className="w-12 lg:w-16"
            />
          </Link>
          {/* TITLE */}
          <p className="font-extrabold uppercase text-center xs:text-lg md:text-2xl lg:text-3xl md:mx-auto">
            Eksplorasi Mobil Terbaik
          </p>
        </div>

        <div className="flex md:w-3/6 w-full justify-between items-center gap-x-2">
          <FilterAndSearch />
        </div>
      </div>
    </>
  );
}
