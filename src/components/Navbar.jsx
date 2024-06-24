import React, { useEffect, useState } from "react";
import menu from "../images/menu.svg";
import PopupModal from "./PopupModal";

const Navbar = ({ navlinks }) => {
  const [navState, setNavState] = useState(false);
  const [popupModalState, setPopupModalState] = useState(false);
  const onNavScroll = () => {
    if (window.scrollY > 100) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 opacity-100 z-40 ${
          navState
            ? "bg-blue-800/25 backdrop-blur-md top-0 py-2 border-b border-black/20"
            : "bg-transparent top-11"
        } transition-all duration-300`}
      >
        <nav className="flex items-center justify-between app-container bg-transparent">
          <a href="/" className="flex items-center bg-transparent">
            <img
              src="https://assets.website-files.com/617aa5e4225be2555942852c/6214d5c4db4ce4d976b5f1f9_logo_paraswap-handbook%20copy%201.svg"
              alt="logo/img"
              className="w-32 h-9 bg-transparent"
            />
          </a>
          <ul className="flex items-center lg:hidden gap-7 bg-transparent">
            {navlinks?.map((val, i) => (
              <li key={i} className="bg-transparent">
                <a to={"#"} className="text-sm text-white bg-transparent ">
                  {val.link}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex items-center lg:hidden bg-transparent">
            <li className="bg-transparent">
              <button
                type="button"
                className="button-blue px-7 text-base bg-transparent"
              >
                Launch App
              </button>
            </li>
          </ul>
          <ul className="hidden lg:flex items-center bg-transparent">
            <li className="bg-transparent grid items-center">
              <button
                className={`flex items-center gap-2 bg-transparent ${
                  navState ? "bg-transparent" : " bg-transparent"
                } p-1.5 rounded-full`}
                onClick={() => setPopupModalState(!popupModalState)}
              >
                <img
                  src={menu}
                  alt="menu/svg"
                  className={`  bg-transparent ${
                    navState ? "text-white" : "text-black"
                  }`}
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {popupModalState && <PopupModal navlinks={navlinks} />}
    </>
  );
};

export default Navbar;
