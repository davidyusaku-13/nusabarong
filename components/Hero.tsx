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
      <section className="bg-[url(/bg_home.png)] bg-center bg-cover w-full h-screen flex flex-col justify-center items-start pl-[90px]">
        <p className="text-white italic font-bold text-[80px]">{heroTxt}</p>
        {isHome && (
          <Image
            src="/nbm_white.png"
            width={406}
            height={325}
            alt="nbm_white.png"
          />
        )}
      </section>
    </>
  );
}
