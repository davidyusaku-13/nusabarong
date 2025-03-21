import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutNavbar() {
  return (
    <>
      <section className="w-full h-[20vh] flex justify-center items-end">
        <Link href={"/"} className="absolute left-16">
          <Image
            src="/nbm_white.png"
            width={96}
            height={79}
            alt="nbm_white.png"
            className="w-[40px] lg:w-[96px]"
          />
        </Link>
        <h1 className="font-extrabold text-8xl">TENTANG KAMI</h1>
      </section>
    </>
  );
}
