import Image from "next/image";
import Link from "next/link";
import React from "react";
import FilterAndSearch from "./FilterAndSearch";

export default function GalleriesNavbar() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center p-[30px] h-[131px]">
        <div className="flex w-full md:w-4/6 justify-between items-center">
          {/* LOGO */}
          <div>
            <Link href={"/"}>
              <Image
                src="/nbm_white.png"
                width={96}
                height={79}
                alt="nbm_white.png"
                className="w-[40px] lg:w-[96px]"
              />
            </Link>
          </div>
          {/* TITLE */}
          <div className="mx-auto">
            <p className="font-extrabold uppercase 2xl:text-7xl xl:text-7xl lg:text-5xl md:text-4xl sm:text-[32px] text-[32px]">
              Eksplorasi Mobil Terbaik
            </p>
          </div>
        </div>
        <div className="flex md:w-2/6 w-full justify-between items-center gap-x-2">
          <FilterAndSearch />
        </div>
      </div>
    </>
  );
}
