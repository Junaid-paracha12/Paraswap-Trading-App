import React from "react";


const Footer = ({ footer }) => {
  return (
    <footer className="mt-12 border-t-2 border-blue-900">
      <div className="max-w-5xl mx-auto p-12">
        <div className="grid grid-cols-4 sm:grid-cols-2 justify-items-center gap-5 ">
          {footer?.map((v, i) => (
            <div className="grid items-start gap-5" key={i}>
              <div className="grid items-start gap-1">
                {v.list.map((l, i) => (
                  <div>
                    <p key={i} className="text-slate-400 text-sm lg:text-base">
                      {l.text}
                    </p>
                    <img src={l.icon} alt="" className="h-auto w-auto" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className=" border-t-2 border-slate-300/50 text-center my-3">
          <h1 className="text-blue-700 text-base md:text-sm sm:text-xs mt-2">
            © Copyright All Reserved Rights JSSTACK DEVELOPERS 2022
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
