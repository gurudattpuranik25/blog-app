import React from "react";
import emptyBlogList from "../../images/emptyBlogList.png";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

function EmptyBlogList({ isAuth }) {
  return (
    <div className=" flex justify-center items-center gap-8 mt-8">
      <img
        src={emptyBlogList}
        className="w-[14rem] h-[14rem] rounded-xl "
        alt=""
      />
      <div className=" flex flex-col gap-4 items-center">
        <h1 className=" text-2xl font-semibold">
          Oops !! No blogs under this category at the moment.
        </h1>
        <Link
          to={`/${isAuth ? "create" : "login"}`}
          className=" flex items-center bg-white gap-2 border-2 px-4 py-1 rounded-lg "
        >
          <AiOutlinePlus />
          Create New Post
        </Link>
      </div>
    </div>
  );
}

export default EmptyBlogList;
