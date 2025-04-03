"use client";

import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClickBurger = (e) => {
    setOpen(!open);
  };

  return (
    <>
      <header className="p-2 bg-no-repeat bg-cover bg-center relative">
        <div className="p-2 bg-no-repeat bg-cover bg-center w-full h-[80vh] flex justify-around">
          <div className="w-48 h-2">
            <span className="--font-nunito text-white font-bold">
              ELECTRICITY BUSINESS
            </span>
          </div>
          <div className=" ml-auto block cursor-pointer md:hidden h-2">
            <button
              className="group peer cursor-pointer"
              onClick={(e) => handleClickBurger(e)}
            >
              <div className="relative top-0 h-1 w-8 rounded-full bg-white transition-all group-open:rotate-45"></div>
              <div className="mt-1 h-1 w-8 rounded-full bg-white opacity-100 transition-all group-open:opacity-0"></div>
              <div className="relative top-0 mt-1 h-1 w-8 rounded-full bg-white transition-all group-open:-rotate-45"></div>
            </button>
          </div>
        </div>
        <h1 className="text-white font-semibold text-4xl absolute top-3/5">
          <p>sharing power.</p>
          <p>transforming</p>
          <p>communities.</p>
        </h1>
        {open && (
          <div className="w-11/12 bg-secondary text-black/70 absolute top-36 ml-2.5">
            <div className="flex h-full cursor-pointer items-center justify-center  text-black/70 p-4 font-bold transition-colors hover:bg-white/10 hover:text-zinc-200">
              <span>EFV Home</span>
            </div>
            <div className="flex h-full cursor-pointer items-center justify-center  text-black/70 p-4 font-bold transition-colors hover:bg-white/10 hover:text-zinc-200">
              <span>Just Charge</span>
            </div>
            <div className="flex h-full cursor-pointer items-center justify-center  text-black/70 p-4 font-bold transition-colors hover:bg-white/10 hover:text-zinc-200">
              <span>FleetCharge</span>
            </div>
            <div className="flex h-full cursor-pointer items-center justify-center  text-black/70 p-4 font-bold transition-colors hover:bg-white/10 hover:text-zinc-200">
              <span>EEV Rewards</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
