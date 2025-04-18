"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export default function Hero() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const heroTxt = isHome
    ? "WELCOME TO"
    : pathname.split("/").pop()?.toUpperCase();
  return (
    <>
      <div className="bg-[url(/bg_home.png)] bg-center bg-cover w-full h-screen sm:pl-[90px] pl-8">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>
      <section className="absolute h-screen inset-y-0 left-[90px] flex flex-col justify-center">
        <p className="text-white italic font-bold text-[80px]">{heroTxt}</p>
        {isHome && (
          <Image
            src="/nbm_white.png"
            width={406}
            height={325}
            alt="nbm_white.png"
            className="w-[406px]"
          />
        )}
      </section>
    </>
  );
}
