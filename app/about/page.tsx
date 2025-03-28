import AboutMission from "@/components/AboutMission";
import AboutNavbar from "@/components/AboutNavbar";
import AboutVission from "@/components/AboutVission";
import AboutWhy from "@/components/AboutWhy";

export default function About() {
  return (
    <>
      <div className="relative bg-[url(/bg_contact.png)] bg-center bg-cover w-full min-h-[94vh]">
        <AboutNavbar />
        <section className="mt-6 w-full px-[80px] flex justify-center items-start gap-x-16">
          <div className="w-1/2 h-full flex flex-col flex-grow gap-y-8">
            <AboutVission />
            <AboutMission />
          </div>
          <div className="w-1/2 h-full">
            <AboutWhy />
          </div>
        </section>
      </div>
    </>
  );
}
