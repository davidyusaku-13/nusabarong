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
        <p className="mx-8 mb-8 text-justify overflow-hidden text-ellipsis text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          convallis dolor in augue sagittis, eget laoreet odio viverra. Donec
          luctus purus dignissim turpis placerat feugiat. Proin ac luctus felis.
          Morbi facilisis tellus nec turpis placerat, et egestas massa
          facilisis. Quisque cursus urna vitae dapibus iaculis. Duis sit amet
          posuere libero. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Mauris convallis dolor in augue sagittis, eget laoreet odio
          viverra. Donec luctus purus dignissim turpis placerat feugiat. Proin
          ac luctus felis. Morbi facilisis tellus nec turpis placerat, et
          egestas massa facilisis. Quisque cursus urna vitae dapibus iaculis.
          Duis sit amet posuere libero.
        </p>
      </div>
    </>
  );
}
