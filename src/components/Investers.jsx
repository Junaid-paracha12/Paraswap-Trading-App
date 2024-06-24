import React from "react";

const Investers = ({ investers: { title, text, content } }) => {
  return (
    <>
      <div className="mt-12 ">
        <div className="app-container grid gap-6">
          <div className="flex justify-center flex-col gap-3 text-center">
            <h1 className="text-white text-2xl md:text-xl font-bold">
              {title}
            </h1>
            <div className="flex justify-center">
              <p className="text-slate-300/50 max-w-2xl text-sm">{text}</p>
            </div>
          </div>
          <div className="relative ">
            <img
              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2754%27%20height=%2754%27/%3e"
              alt=""
              className="w-full  h-[50vh] md:h-[65vh] opacity-70   shadow-2xl bg-slate-300/5 rounded-xl "
            />
            <div className="absolute top-2 grid grid-cols-3 md:grid-cols-2 gap-6 bg-transparent h-auto w-full p-7">
              {content?.map((v, i) => (
                <div key={i} className="bg-transparent">
                  <div className="bg-transparent py-2 px-4">
                    <img
                      src={v.imgSrc}
                      alt=""
                      className="w-auto h-16 bg-transparent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investers;
