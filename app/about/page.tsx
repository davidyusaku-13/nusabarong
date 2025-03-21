import AboutMission from "@/components/AboutMission";
import AboutNavbar from "@/components/AboutNavbar";
import AboutVission from "@/components/AboutVission";
import AboutWhy from "@/components/AboutWhy";

export default function About() {
  return (
    <>
      <div className="absolute -z-10 bg-[url(/bg_contact.png)] bg-center bg-cover w-full h-screen sm:pl-[90px] pl-8"></div>
      <AboutNavbar />
      <section className="flex min-h-[74vh] justify-center items-center gap-16 w-full">
        <div className="flex flex-col max-w-[850px] gap-6">
          <AboutVission />
          <AboutMission />
        </div>
        <div className="max-w-[850px] min-h-[651px]">
          <AboutWhy />
        </div>
      </section>
    </>
  );
}
