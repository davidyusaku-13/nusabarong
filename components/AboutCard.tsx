import React from "react";

interface AboutCardProps {
  title: string;
}

export default function AboutCard({ title }: AboutCardProps) {
  return (
    <>
      <div className="sm:w-[500px] w-[300px] bg-white text-black flex flex-col my-6">
        <p className="text-center font-bold text-2xl my-6 sm:text-5xl italic">
          {title}
        </p>
        <p className="mx-8 mb-8 text-justify">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </>
  );
}
