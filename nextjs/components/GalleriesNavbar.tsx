import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
              className="w-[96px] h-[79px]"
            />
          </Link>
          {/* TITLE */}
          <p className="font-extrabold text-[80px] uppercase text-center md:mx-auto">
            Eksplorasi Mobil Terbaik
          </p>
        </div>

        <div className="flex md:w-2/6 w-full justify-between items-center gap-x-2">
          {/* FILTER */}
          <div className="w-[230px] h-[40px]">
            <select
              id="filter"
              className="bg-transparent text-white text-[20px] border border-white text-sm rounded-lg w-full h-full p-2"
              defaultValue={"Filter"}
            >
              <option disabled>Filter</option>
              <option value="SUV">SUV</option>
            </select>
          </div>

          {/* SEARCH */}
          <div className="relative w-[230px] h-[40px]">
            <div className="absolute inset-y-0 end-3 flex items-center ps-3 pointer-events-none">
              <FontAwesomeIcon className="w-4 h-4" icon={faMagnifyingGlass} />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="bg-transparent text-white placeholder:text-white text-[20px] border border-white text-sm rounded-lg w-full h-full p-2"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </>
  );
}
