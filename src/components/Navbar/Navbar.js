import React, { useState } from "react";
import { SiBloglovin } from "react-icons/si";
import { BsSearch } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import avatar from "../../images/avatar.png";
import "./Navbar.css";

function Navbar({ signInWithGoogle, isAuth, signUserOut }) {
  const [searchFilter, setSearchFilter] = useState("");

  const searchHandler = (e) => {
    setSearchFilter(e.target.value);
  };

  return (
    <div className=" nav__container w-screen drop-shadow-md bg-white ">
      <div className=" navbar flex items-center w-[90%] m-auto justify-between py-4">
        <Link to="/">
          <div className=" logo flex items-center gap-2 cursor-pointer">
            <SiBloglovin className="text-rose-500 text-3xl font-bold" />
            <h1 className=" text-xl font-semibold">Record : In & Out</h1>
          </div>
        </Link>
        <div className="search flex items-center ">
          <BsSearch className=" text-rose-500 font-semibold absolute ml-2 text-md z-10" />
          <input
            type="text"
            className=" relative px-8 py-3 w-[35rem] rounded-lg bg-gray-100"
            value={searchFilter}
            onChange={searchHandler}
            placeholder="Discover news, articles and more"
          />
        </div>
        <div className="auth__links flex items-center gap-6 text-md">
          <Link
            to={`/${isAuth ? "create" : "login"}`}
            className=" flex items-center gap-2 border-2 px-4 py-1 rounded-lg "
          >
            <AiOutlinePlus />
            Create New Post
          </Link>
          {isAuth ? (
            <div className="flex items-center gap-2">
              {/* <h1>Hi, {auth.currentUser.email}</h1> */}
              <button
                className="flex gap-2 items-center border-2 px-4 py-1 rounded-lg "
                onClick={signUserOut}
              >
                {" "}
                <RiLogoutCircleRLine /> Logout
              </button>
              <img src={avatar} className=" w-12 h-12 rounded-full" alt="" />
            </div>
          ) : (
            <div>
              <Link
                to=""
                className="flex gap-2 items-center border-2 px-4 py-1 rounded-lg "
                onClick={signInWithGoogle}
              >
                {" "}
                <FcGoogle /> Sign in with Google
              </Link>
            </div>
          )}
        </div>
        <div className="menu__btn text-2xl">
          <i className="fa fa-bars" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
