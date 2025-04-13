import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutNavbar() {
  return (
    <>
      <section className="pt-[80px] w-full px-[80px] flex justify-center items-center">
        <div className="relative w-full flex justify-center items-center">
          <Link href={"/"} className="absolute left-0 w-[96px] h-[79px]">
            <Image
              src="/nbm_white.png"
              width={96}
              height={79}
              alt="nbm_white.png"
              className="w-full h-full"
            />
          </Link>
          <h1 className="font-extrabold text-[96px]">TENTANG KAMI</h1>
        </div>
      </section>
    </>
  );
}
