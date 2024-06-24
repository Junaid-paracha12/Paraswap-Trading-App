import React from "react";

const Hero = ({ hero: { title, subtitle, text, btn1, btn2, img } }) => {
  return (
    <>
      <div className="mt-24">
        <div className="app-container">
          <div className="flex flex-col justify-center text-center gap-5">
            <h1 className="text-white text-5xl lg:text-4xl md:text-3xl sm:2xl font-bold">
              {title}
            </h1>
            <h1 className="text-blue-600 text-5xl lg:text-4xl
            md:text-3xl sm:text-2xl font-bold">
              {subtitle}
            </h1>
            <div className="flex justify-center text-center">
              <p className="text-slate-300/50  max-w-xl text-xs ">{text}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center my-3">
            <button type="button" className="button-blue text-sm lg:text-xs">
              {btn1}
            </button>
            <button type="button" className="button-light text-sm lg:text-xs">
              {btn2}
            </button>
          </div>
          <img src={img} alt="img" className="h-auto w-auto object-cover" />
        </div>
      </div>
    </>
  );
};

export default Hero;
