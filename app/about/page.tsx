import AboutCard from "@/components/AboutCard";

export default function About() {
  return (
    <>
      <section className="bg-[url(/bg_contact.png)] bg-center bg-cover w-full min-h-[94vh] flex flex-col justify-start items-center pt-[75px] text-white">
        <p className="font-extrabold 2xl:text-[96px] xl:text-[60px] md:text-[40px]">
          ABOUT US
        </p>
        <div className="my-auto flex gap-6">
          <AboutCard title={"Vision"} />
          <AboutCard title={"Mission"} />
          <AboutCard title={"Why Choose Us"} />
        </div>
      </section>
    </>
  );
}
