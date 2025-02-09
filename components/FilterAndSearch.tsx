import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function FilterAndSearch() {
  return (
    <>
      {/* FILTER */}
      <div className="w-1/2">
        <select
          id="filter"
          className="bg-transparent text-white text-[20px] border border-white text-sm rounded-lg 2xl:w-[230px] w-full p-1"
          defaultValue={"Filter"}
        >
          <option disabled>Filter</option>
          <option value="SUV">SUV</option>
        </select>
      </div>

      {/* SEARCH */}
      <div className="relative w-1/2">
        <div className="absolute inset-y-0 end-2 flex items-center ps-3 pointer-events-none">
          <FontAwesomeIcon className="w-4 h-4" icon={faMagnifyingGlass} />
        </div>
        <input
          type="text"
          name="search"
          id="search"
          className="bg-transparent text-white placeholder:text-white text-[20px] border border-white text-sm rounded-lg 2xl:w-[230px] w-full p-1"
          placeholder="Search"
        />
      </div>
    </>
  );
}
