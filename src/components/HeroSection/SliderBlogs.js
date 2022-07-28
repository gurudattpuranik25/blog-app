import React, { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./SliderBlogs.css";
import { Pagination } from "swiper";

function SliderBlogs() {
  const [sliderBlogs, setsliderBlogs] = useState([]);
  const blogCollectionRef = collection(db, "sliderBolgData");

  useState(() => {
    const getBlogs = async () => {
      const data = await getDocs(blogCollectionRef);
      setsliderBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBlogs();
  }, []);

  return (
    <div className=" h-[20rem] ">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {sliderBlogs.map((item) => (
          <SwiperSlide
            key={item.id}
            className=" flex items-center justify-start gap-8 rounded-lg w-full"
          >
            <div className=" flex flex-col gap-3 text-left">
              <span className=" tracking-wider text-rose-500 font-semibold animate-bounce ">
                {item.category}
              </span>
              <h1 className=" text-3xl font-bold">{item.title}</h1>
              <p>{item.body}</p>
            </div>
            <img
              src={item.image}
              className=" w-[40%] h-[90%] rounded-lg"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderBlogs;
