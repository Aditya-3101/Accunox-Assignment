import React from "react";
import { IoIosAdd } from "react-icons/io";
import { SlRefresh } from "react-icons/sl";
import { IoMdMore } from "react-icons/io";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { IoChevronDownOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { showAddWidget } from "./actions";

export const SubHeader = () => {
  const dispath = useDispatch();
  return (
    <div className="b-w[90%]">
      <div className="w-full flex items-center justify-between py-4 px-2">
        <p className="font-poopins px-2 font-bold">CNAPP Dashboard</p>
        <div className="w-[40%] flex items-center justify-evenly">
          <div
            className="bg-white font-poopins flex items-center py-2 px-2 rounded cursor-pointer"
            onClick={() => dispath(showAddWidget())}
          >
            Add Widget <IoIosAdd className="text-xl" />
          </div>
          <div className="bg-white rounded p-2">
            <SlRefresh />
          </div>
          <div className="bg-white rounded p-2">
            <IoMdMore />
          </div>
          <div className="bg-white rounded p-2 flex items-center gap-2 hover:text-[#262687] border border-transparent hover:border hover:border-[#15157e] cursor-pointer focus-within:border focus-within:border-[#15157e] focus-within:text-[#262687]">
            <MdOutlineAccessTimeFilled className="border-r border-black p-[2px] text-xl hover:border-[#262687]" />
            <p className="font-poopins">Last 2 days</p>
            <IoChevronDownOutline />
          </div>
        </div>
      </div>
    </div>
  );
};
