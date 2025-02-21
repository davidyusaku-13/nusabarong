"use client";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="absolute w-full flex items-center justify-center gap-x-4 sm:gap-x-24 my-6 text-white italic font-bold md:text-[25px]">
        <Link href={"/"}>HOME</Link>
        <Link href={"/galleries"}>GALLERIES</Link>
        <Link href={"/about"}>ABOUT</Link>
        <Link href={"/contact"}>CONTACT</Link>
      </nav>
    </>
  );
}
