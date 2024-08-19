import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { hideAddWidget, remWidget } from "./actions";
import { Checker } from "./Checker";

export const OverLay = () => {
  const toggle = useSelector((state) => state.toggleReducer);
  const dashboard = useSelector((state) => state.dashReducer);
  const selected = useSelector((state) => state.widgetReducer);
  const dispath = useDispatch();
  const options = ["CSPM", "CWPP", "Image", "Ticket"];

  const [def, setDef] = useState(options[0]);

  function defChange(param) {
    setDef(param);
  }
  function removeSelected() {
    dispath(remWidget(selected));
    dispath(hideAddWidget());
  }

  return (
    <div className="fixed w-full -top-0 -left-0 -right-0 bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 h-[100%] overflow-hidden">
      <div className="w-[45%] ml-auto bg-white h-[100vh] grid grid-cols-1 grid-rows-16 justify-center">
        <section className="bg-[#14147d] w-full flex items-center ">
          <p className=" w-full flex justify-between items-center text-white px-4">
            <span className="font-poopins">Add Widget</span>
            <RxCross2
              onClick={() => dispath(hideAddWidget())}
              className="cursor-pointer"
            />
          </p>
        </section>
        <section className="w-full">
          <p className="font-poopins text-left px-2 py-2">
            Personalise your dashboard by adding the following widget
          </p>
          <div className="flex border-b border-gray-200">
            {options.map((par) => {
              return (
                <div
                  key={par}
                  className={`px-4 py-1 border-b-2 ${
                    def === par ? "border-[#14147d]" : "border-transparent"
                  } cursor-pointer`}
                  onClick={() => defChange(par)}
                >
                  {par}
                </div>
              );
            })}
          </div>
        </section>
        <section className="">
          {dashboard &&
            dashboard.map((par, index) => {
              return <Checker key={index} dashboard={par} options={def} />;
            })}
        </section>
        <section className="w-full flex justify-end gap-4">
          <div
            className="font-poopins bg-white border border-[#14147d] px-4 py-1 rounded-lg min-h-8 max-h-12 cursor-pointer flex items-center"
            onClick={() => dispath(hideAddWidget())}
          >
            Cancel
          </div>
          <div
            className="font-poopins bg-[#14147d] border text-white px-4 py-1 rounded-lg min-h-8 cursor-pointer max-h-12 flex items-center"
            onClick={removeSelected}
          >
            Confirm
          </div>
        </section>
      </div>
    </div>
  );
};
