import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import author from "../../images/author.png";
import HeroSection from "../HeroSection/HeroSection";

function Main() {
  var [blogs, setBlogs] = useState([]);
  const blogCollectionRef = collection(db, "BolgData");

  useEffect(() => {
    const getBlogs = async () => {
      const data = await getDocs(blogCollectionRef);
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBlogs();
    // eslint-disable-next-line
  }, []);

  const filterBlogs = async (category) => {
    const data = await getDocs(blogCollectionRef);

    category === "All"
      ? setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      : setBlogs(
          data.docs
            .map((doc) => ({ ...doc.data(), id: doc.id }))
            .filter((item) => item.category === category)
        );
  };

  return (
    <div>
      <HeroSection filterBlogs={filterBlogs} />
      <div className=" mt-12 grid grid-cols-4 gap-y-4 gap-3">
        {blogs.map((item) => (
          <div
            key={item.id}
            className=" flex flex-col bg-white rounded-xl h-[28rem] relative drop-shadow-lg "
          >
            <div className=" overflow-hidden rounded-t-xl">
              <img
                src={item.image}
                className=" w-full h-[12rem] rounded-t-xl cursor-pointer hover:scale-125 transition-all duration-500 "
                alt=""
              />
            </div>

            <div className=" flex flex-col gap-2 py-2 px-4">
              <span className=" text-xs text-rose-500 font-bold">
                {item.category}
              </span>
              <h1 className=" text-sm font-bold cursor-pointer hover:underline">
                {" "}
                {item.title.toUpperCase()}
              </h1>
              <p className=" text-sm">{item.description}</p>
              <div className=" flex  items-center absolute bottom-2">
                <img src={author} className=" w-14 h-13 rounded-full" alt="" />
                <span className=" text-sm font-semibold">{item.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
