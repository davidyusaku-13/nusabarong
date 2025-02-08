import React from "react";

export default function GalleriesPagination() {
  return (
    <>
      <div className="flex justify-center items-center gap-x-2 pb-[30px] font-semibold">
        <button className="rounded-md border border-white px-[10px] py-[3px] ">
          1
        </button>
        <button className="rounded-md border border-white px-[10px] py-[3px]">
          2
        </button>
        <button className="rounded-md border border-white px-[10px] py-[3px]">
          Next
        </button>
      </div>
    </>
  );
}
