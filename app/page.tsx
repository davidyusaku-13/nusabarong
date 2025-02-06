import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen bg-[url(/bg_home.webp)] bg-cover">
        {/* DIMER - Dim only the background */}
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        {/* NAVBAR */}
        <nav className="absolute w-full z-10">
          <div className="relative flex text-white italic font-bold text-[25px] items-center justify-center gap-x-24 mx-[400px] my-6">
            <Link href={"/"}>HOME</Link>
            <Link href={"/galleries"}>GALLERIES</Link>
            <Link href={"/about"}>ABOUT</Link>
            <Link href={"/contact"}>CONTACT</Link>
          </div>
        </nav>

        {/* HERO - Positioned Middle-Left */}
        <section className="absolute left-[90px] top-1/2 transform -translate-y-1/2 z-10">
          <div className="text-white italic font-bold text-[80px]">
            WELCOME TO
          </div>
          {/* LOGO NUSABARONG */}
          <Image
            src={"/nbm_white.png"}
            width={406}
            height={325}
            alt="nbm_white_logo"
          />
        </section>
      </div>
    </>
  );
}
