"use client";
import AboutCard from "@/components/AboutCard";

export default function About() {
  return (
    <>
      <section className="bg-[url(/bg_contact.png)] bg-center bg-cover w-full min-h-[94vh] flex flex-col justify-start items-center pt-[105px] text-white">
        <p className="font-extrabold 2xl:text-8xl xl:text-7xl lg:text-5xl md:text-4xl sm:text-[32px] text-[32px]">
          ABOUT US
        </p>
        <div className="mt-6 flex flex-wrap lg:flex-col xl:flex-row justify-center items-center xl:gap-6 gap-2 mb-6">
          <AboutCard title={"Vision"} />
          <AboutCard title={"Mission"} />
          <AboutCard title={"Why Choose Us?"} />
        </div>
      </section>
    </>
  );
}
