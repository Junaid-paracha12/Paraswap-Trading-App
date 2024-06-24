import React from "react";

const Blog = ({ blogpage: { title, btn, content } }) => {
  return (
    <>
      <div className="mt-12 ">
        <div className="app-container">
          <div className="flex items-center justify-between ">
            <h1 className="text-white text-2xl sm:text-xl font-bold">
              {title}
            </h1>
            <button type="button" className="button-light text-sm sm:text-xs">
              {btn}
            </button>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-5 ">
            {content?.map((v, i) => (
              <div key={i} className="relative ">
                <img
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2754%27%20height=%2754%27/%3e"
                  alt=""
                  className="w-full  h-[63vh] sm:h-auto box-light p-3"
                />
                <div className="absolute top-0  display-none">
                  <img
                    src={v.imgSrc}
                    alt=""
                    className=" bg-transparent w-full h-[40vh] lg:h-auto rounded-t-xl pt-1"
                  />

                  <p className="text-slate-300/100 text-sm md:text-xs bg-transparent  py-3 px-9 ">
                    {v.title}
                  </p>

                  <div className="flex items-center justify-between bg-transparent py-2 px-11">
                    <p className="text-white bg-transparent md:text-sm">
                      {v.time}
                    </p>
                    <p className="text-white bg-transparent text-base sm:text-sm">
                      {v.date}
                    </p>
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

export default Blog;
