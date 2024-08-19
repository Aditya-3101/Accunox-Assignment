import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiSquare } from "react-icons/fi";
import { remWidget, hideWidget } from "./actions";

export const Checker = ({ dashboard, options }) => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(false);

  console.log("Current dashboard:", dashboard);
  function removeDashboard(param) {
    console.log(param);
    setSelected(param);
    dispatch(hideWidget(param));
    return param;
  }

  return (
    <div>
      <section className="random">
        {dashboard && String(dashboard.headerOption).includes(options) && (
          <div className="w-full flex flex-col items-center justify-center gap-4">
            {dashboard.dataCollection && dashboard.dataCollection.length > 0 ? (
              dashboard.dataCollection.map((par, index) => (
                <div
                  key={index}
                  className="flex items-center w-[90%] border border-gray-300 p-2 cursor-pointer"
                  onClick={() => removeDashboard(par.title)}
                >
                  {par.removed === false ? (
                    selected !== par.title ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    ) : (
                      <FiSquare />
                    )
                  ) : par.removed === true ? (
                    selected !== par.title ? (
                      <FiSquare />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    )
                  ) : (
                    <FiSquare />
                  )}
                  <p className={`font-poopins px-2`}>{par.title}</p>
                </div>
              ))
            ) : (
              <p>No items available</p>
            )}
          </div>
        )}
      </section>
    </div>
  );
};
