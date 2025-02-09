import AboutCard from "@/components/AboutCard";

export default function About() {
  return (
    <>
      <section className="bg-[url(/bg_contact.png)] bg-center bg-cover w-full min-h-[94vh] flex flex-col justify-start items-center sm:pt-32 pt-[75px] text-white">
        <p className="font-extrabold 2xl:text-[96px] xl:text-[60px] sm:text-[40px] text-4xl">
          ABOUT US
        </p>
        <div className="my-auto flex flex-wrap lg:flex-col xl:flex-row justify-center items-center sm:gap-6 gap-2">
          <AboutCard title={"Vision"} />
          <AboutCard title={"Mission"} />
          <AboutCard title={"Why Choose Us"} />
        </div>
      </section>
    </>
  );
}
