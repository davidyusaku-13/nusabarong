import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function FilterAndSearch() {
  return (
    <>
      {/* FILTER */}
      <div>
        <select
          id="filter"
          className="bg-transparent text-white text-[20px] border border-white text-sm rounded-lg 2xl:w-[230px] md:w-[120px] p-1"
          defaultValue={"Filter"}
        >
          <option disabled>Filter</option>
          <option value="SUV">SUV</option>
        </select>
      </div>

      {/* SEARCH */}
      <div className="relative">
        <div className="absolute inset-y-0 end-2 flex items-center ps-3 pointer-events-none">
          <FontAwesomeIcon className="w-4 h-4" icon={faMagnifyingGlass} />
        </div>
        <input
          type="text"
          name="search"
          id="search"
          className="bg-transparent text-white placeholder:text-white text-[20px] border border-white text-sm rounded-lg 2xl:w-[230px] md:w-[120px] w-[80px] p-1"
          placeholder="Search"
        />
      </div>
    </>
  );
}
