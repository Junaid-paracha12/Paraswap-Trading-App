import React from "react";

const Advertise = ({ advertise: { title, text, imgSrc, btn } }) => {
  return (
    <>
      <div className="my-14">
        <div className="app-container">
          <div className="relative">
            <img src={imgSrc} alt="" className="w-full h-[40vh] box-light" />
            <div className="absolute top-0 flex justify-center flex-col w-full bg-transparent  h-[40vh] text-center gap-2">
              <h1 className=" bg-transparent text-white text-4xl lg:text-3xl md:text-2xl font-bold">
                {title}
              </h1>
              <p className=" bg-transparent text-slate-300/50 text-sm md:text-xs">
                {text}
              </p>
              <div className=" flex justify-center w-full bg-transparent">
                <button className=" bg-transparent  button-blue">{btn}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advertise;
