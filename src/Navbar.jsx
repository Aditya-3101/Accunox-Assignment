import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { LuBellRing } from "react-icons/lu";
import { MdAccountCircle } from "react-icons/md";

export const Navbar = () => {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <div className="relative">
      <nav className=" top-0 left-0 right-0 grid grid-cols-2 items-center justify-between p-4">
        <div>
          <p className="flex gap-1 items-center font-bold">
            <span className="font-poopins text-slate-500">Home</span>
            <span>
              <FaAngleRight />
            </span>
            <span className="text-[#4e6e8a] font-poopins">Dashboard V2</span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-[50%] flex items-center gap-2 bg-[#f0f5fa] p-1">
            <IoSearch />
            <input
              value={search}
              placeholder="Search anything..."
              className="h-7 bg-transparent flex-1 focus:outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <details open style={{ direction: "rtl" }}>
              <summary className="font-poopins">Username</summary>
            </details>
          </div>
          <LuBellRing className="text-slate-400 text-2xl" />
          <MdAccountCircle className="text-slate-600 text-3xl" />
        </div>
      </nav>
    </div>
  );
};
