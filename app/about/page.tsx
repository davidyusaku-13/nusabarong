import AboutMission from "@/components/AboutMission";
import AboutNavbar from "@/components/AboutNavbar";
import AboutVission from "@/components/AboutVission";
import AboutWhy from "@/components/AboutWhy";

export default function About() {
  return (
    <>
      <div className="relative bg-[url(/bg_contact.png)] bg-center bg-cover w-full min-h-[94vh]">
        <AboutNavbar />
        {/* Content Grid */}
        <div className="mt-4 grid md:grid-cols-2 gap-8 mx-20">
          {/* Left Column - Vision & Mission */}
          <div className="flex flex-col gap-6 h-full me-2">
            <AboutVission />
            <AboutMission />
          </div>
          {/* Right Column - Why Choose Us */}
          <AboutWhy />
        </div>
      </div>
    </>
  );
}
