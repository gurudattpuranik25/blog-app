import React from "react";
import heroData from "./data";
import SliderBlogs from "./SliderBlogs";

function HeroSection({ filterBlogs }) {
  return (
    <div>
      <div className=" flex gap-4 justify-center py-14">
        {heroData.map((item) => (
          <div
            key={item.id}
            className=" w-[12rem] h-[5rem] bg-white flex flex-col gap-2 items-center justify-center rounded-lg cursor-pointer drop-shadow-xl hover:bg-gray-100 hover:drop-shadow-none animate-pulse hover:animate-none hover:transition-all hover:duration-200 hover:ease-in-out"
            onClick={() => filterBlogs(item.category)}
          >
            <span className=" text-2xl text-rose-500">{item.icon}</span>
            <p className=" font-semibold text-lg">{item.name}</p>
          </div>
        ))}
      </div>
      <SliderBlogs />
    </div>
  );
}

export default HeroSection;
