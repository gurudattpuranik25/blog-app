import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./BlogDetails.css";
import { Link } from "react-router-dom";

function BlogDetails() {
  const [myData, setMyData] = useState([]);

  const blogCollectionRef = collection(db, "BolgData");
  const { blogId } = useParams();

  const readMore = async () => {
    const data = await getDocs(blogCollectionRef);
    const selectedBlog = data.docs
      .map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      .find((item) => item.id === blogId);
    setMyData(selectedBlog);
  };

  readMore();

  return (
    <div>
      <div className=" blog__details w-[80%] m-auto my-12 ">
        <h1 className=" blog__heading text-center text-3xl font-semibold ">
          {myData.title}
        </h1>
        <img
          src={myData.image}
          className="w-[70%] m-auto h-[30rem] my-8 rounded-xl drop-shadow-xl"
          alt=""
        />
        <p className=" text-lg text-justify leading-8">{myData.body}</p>
        <div className=" mt-8 flex justify-between">
          <cite className="inline-block text-xl font-bold">
            {" "}
            {myData.author}
          </cite>
          <Link
            to="/"
            className=" flex items-center gap-2 border-2 px-4 py-1 rounded-lg bg-rose-500 text-white font-semibold "
          >
            <AiOutlineArrowLeft />
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
