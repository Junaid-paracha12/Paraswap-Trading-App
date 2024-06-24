import React from "react";

const Institutional = ({ institutional: { title, text, content } }) => {
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
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-5 mt-5 ">
            {content?.map((v, i) => (
              <div key={i} className="relative">
                <img
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2754%27%20height=%2754%27/%3e"
                  alt=""
                  className="w-full  h-[25vh]  box-light "
                />
                <div className="absolute top-0 p-5 display-none h-auto w-full grid  ">
                  <div className="flex items-center gap-6 display-none">
                    {" "}
                    <img
                      src={v.imgSrc}
                      alt="icon"
                      className=" bg-transparent"
                    />
                    <div className="flex flex-col display-none">
                      <h1 className="text-slate-300/100 font-semibold bg-transparent text-xl mt-3">
                        {v.title}
                      </h1>
                      <p className="bg-transparent text-slate-300/50 text-sm">
                        {v.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Institutional;
