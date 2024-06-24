import React from "react";

const Echosystem = ({ echosystempage: { title, text, content } }) => {
  return (
    <>
      <div className="mt-12 ">
        <div className="app-container">
          <div className="flex justify-center flex-col gap-3 text-center">
            <h1 className="text-white text-2xl md:text-xl font-bold">{title}</h1>
            <div className="flex justify-center">
              <p className="text-slate-300/50 max-w-xl text-sm md:text-xs">{text}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-5 mt-5 ">
            {content?.map((v, i) => (
              <div key={i} className="relative">
                <img
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2754%27%20height=%2754%27/%3e"
                  alt=""
                  className="w-full  h-auto lg:h-[38vh]  box-light "
                />
                <div className="absolute top-0  display-none h-auto w-full p-5">
                  <div className="flex items-center gap-6 display-none">
                    {" "}
                    <img
                      src={v.imgSrc}
                      alt=""
                      className=" bg-transparent h-10 w-auto"
                    />
                    <div className="flex flex-col display-none">
                      <h1 className="text-slate-300/100 font-semibold bg-transparent text-xl mt-2">
                        {v.title}
                      </h1>
                      <h1 className="text-white bg-transparent">
                        {v.subTitle}
                      </h1>
                    </div>
                  </div>
                  <p className="bg-transparent text-slate-300/50 text-sm md:text-xs py-5">
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

export default Echosystem;
