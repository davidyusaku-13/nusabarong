"use client";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="absolute z-10 w-full flex items-center justify-center gap-x-4 md:gap-x-16 lg:gap-x-28 text-sm xs:text-base sm:text-lg md:text-2xl my-6 text-white italic font-bold">
        <Link href={"/"}>BERANDA</Link>
        <Link href={"/galleries"}>GALERI</Link>
        <Link href={"/about"}>TENTANG KAMI</Link>
      </nav>
    </>
  );
}
