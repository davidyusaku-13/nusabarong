"use client";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="absolute z-10 w-full flex items-center justify-center gap-x-4 sm:gap-x-24 my-6 text-white italic font-bold md:text-[25px]">
        <Link href={"/"}>BERANDA</Link>
        <Link href={"/galleries"}>GALERI</Link>
        <Link href={"/about"}>TENTANG KAMI</Link>
      </nav>
    </>
  );
}
