import React from "react";
import { SiBloglovin } from "react-icons/si";
import { BsSearch } from "react-icons/bs";

function Navbar() {
  return (
    <div className=" w-screen shadow-md">
      <div className=" flex items-center w-[90%] m-auto justify-between py-4">
        <div className=" flex items-center gap-2 cursor-pointer">
          <SiBloglovin className="text-rose-500 text-3xl font-bold" />
          <h1 className=" text-xl font-semibold">Record : In & Out</h1>
        </div>
        <div className=" flex items-center ">
          <BsSearch className=" text-rose-500 font-semibold absolute ml-2 text-md z-10" />
          <input
            type="text"
            className=" relative px-8 py-3 w-[35rem] rounded-lg bg-gray-100"
            placeholder="Discover news, articles and more"
          />
        </div>
        <div className=" flex items-center gap-6 text-2xl">
          <i className="fa-brands fa-instagram cursor-pointer"></i>
          <i className="fa-brands fa-facebook-f cursor-pointer"></i>
          <i className="fa-brands fa-twitter cursor-pointer"></i>
          <i className="fa-brands fa-linkedin-in cursor-pointer"></i>
          <i className="fa-brands fa-github cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
