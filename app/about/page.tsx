import AboutMission from "@/components/AboutMission";
import AboutNavbar from "@/components/AboutNavbar";
import AboutVission from "@/components/AboutVission";
import AboutWhy from "@/components/AboutWhy";

export default function About() {
  return (
    <>
      <div className="absolute -z-10 bg-[url(/bg_contact.png)] bg-center bg-cover w-full h-screen sm:pl-[90px] pl-8"></div>
      <AboutNavbar />
      <section className="my-4 flex flex-col lg:flex-row justify-center items-stretch gap-4 lg:gap-0 w-full">
        <div className="flex flex-col max-w-[850px] lg:w-1/2 gap-4 flex-grow">
          <AboutVission />
          <AboutMission />
        </div>

        <div className="max-w-[850px] lg:w-1/2 flex-grow">
          <AboutWhy />
        </div>
      </section>
    </>
  );
}
