import React from "react";

const Statistics = ({ statistics: { title, text, content } }) => {
  return (
    <>
      <div className="mt-12 ">
        <div className="app-container">
          <div className="flex justify-center flex-col gap-3 text-center">
            <h1 className="text-white text-3xl lg:text-2xl sm:text-xl xsm:text-lg font-bold">
              {title}
            </h1>
            <div className="flex justify-center">
              <p className="text-slate-300/50 max-w-xl text-sm sm:text-xs">
                {text}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4  md:grid-cols-2  gap-5 mt-5 ">
            {content?.map((v, i) => (
              <div key={i} className="relative">
                <img
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2754%27%20height=%2754%27/%3e"
                  alt=""
                  className="w-full  h-auto md:h-[25vh]  box-light p-2"
                />
                <div className="absolute top-0 display-none grid justify-items-center py-14 md:py-5 text-center  w-full h-auto">
                  <div className="flex items-center bg-transparent">
                    <h1 className="text-slate-300/100 font-semibold bg-transparent text-4xl lg:text-3xl sm:text-2xl">
                      {v.number}
                    </h1>
                    <h1 className=" bg-transparent text-blue-700 text-5xl lg:text-4xl sm:text-3xl font-bold">
                      +
                    </h1>
                  </div>
                  <p className="bg-transparent text-slate-300/50 text-sm">
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

export default Statistics;
