import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutNavbar() {
  return (
    <>
      <section className="w-full pt-[12vh] md:pt-[15vh] lg:pt-[12vh] flex justify-center items-end">
        <Link href={"/"} className="absolute left-8">
          <Image
            src="/nbm_white.png"
            width={96}
            height={79}
            alt="nbm_white.png"
            className="w-10 md:w-14 lg:w-16"
          />
        </Link>
        <h1 className="font-extrabold text-lg md:text-2xl lg:text-3xl">
          TENTANG KAMI
        </h1>
      </section>
    </>
  );
}
