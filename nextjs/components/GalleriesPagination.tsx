import React from "react";

export default function GalleriesPagination() {
  const PAGINATION_LABELS = ["1", "2", "Next"];

  return (
    <div className="flex justify-center items-center gap-x-2 pb-[30px] font-semibold">
      {PAGINATION_LABELS.map((label, index) => (
        <button
          key={index}
          className="rounded-md border border-white px-2 min-w-6 xs:min-w-8 h-6 xs:h-8 flex-shrink-0 text-sm xs:text-base"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
