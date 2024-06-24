import React from "react";

const About = ({ aboutpage: { title, text, content } }) => {
  return (
    <>
      <div className="mt-12 ">
        <div className="app-container">
          <div className="flex justify-center flex-col gap-3 text-center">
            <h1 className="text-white text-3xl font-bold">{title}</h1>
            <div className="flex justify-center">
              <p className="text-slate-300/50 max-w-xl text-sm lg:text-xs">
                {text}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-5 mt-5 ">
            {content?.map((v, i) => (
              <div key={i} className="relative">
                <img
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2754%27%20height=%2754%27/%3e"
                  alt=""
                  className="w-full  h-auto lg:h-[38vh] box-light p-3"
                />
                <div className="absolute top-0 left-0  px-5 display-none flex flex-col items-start w-full h-auto py-3">
                  {" "}
                  <img
                    src={v.imgSrc}
                    alt=""
                    className=" bg-transparent h-14 w-auto"
                  />
                  <h1 className="text-slate-300/100 font-semibold bg-transparent text-xl md:text-lg mt-3">
                    {v.title}
                  </h1>
                  <p className="bg-transparent text-slate-300/50 text-sm md:text-xs py-2">
                    {v.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
