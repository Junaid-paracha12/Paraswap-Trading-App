import React from "react";

const PopupModal = ({ navlinks }) => {
  return (
    <>
      <nav className=" fixed top-9 right-14 bg-transparent bg-opacity-70 opacity-100 z-50 backdrop-filter backdrop-blur-md rounded-lg w-40 h-auto py-5 px-6 transition-transform duration-300">
        <ul className="flex items-start flex-col gap-3 text-white bg-transparent">
          {navlinks?.map((val, i) => (
            <li key={i} className="bg-transparent">
              <a to={"#"} className="text-sm text-white bg-transparent">
                <u className=" bg-transparent"> {val.link}</u>
              </a>
            </li>
          ))}
          <li className="bg-transparent">
            <button
              type="button"
              className="button-blue  shadow-slate-300 rounded-xs text-sm text-center bg-transparent"
            >
              <u className=" bg-transparent"> lounch app</u>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PopupModal;
