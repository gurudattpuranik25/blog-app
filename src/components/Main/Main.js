import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-config";
import author from "../../images/author.png";
import HeroSection from "../HeroSection/HeroSection";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import EmptyBlogList from "./EmptyBlogList";

function Main({ isAuth }) {
  var [blogs, setBlogs] = useState([]);
  const [filteredState, setFilteredState] = useState(true);
  const blogCollectionRef = collection(db, "BolgData");

  useEffect(() => {
    const getBlogs = async () => {
      const data = await getDocs(blogCollectionRef);
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBlogs();
    // eslint-disable-next-line
  }, []);

  const deleteBlog = async (id) => {
    const deleteData = doc(db, "BolgData", id);
    await deleteDoc(deleteData);
    window.location.reload();
  };

  const filterBlogs = async (category) => {
    const data = await getDocs(blogCollectionRef);

    // **************** original ************************
    // setBlogs(
    //   data.docs
    //     .map((doc) => ({ ...doc.data(), id: doc.id }))
    //     .filter((item) => item.category === category)
    // )
    // **************** original ************************

    if (category === "All") {
      setFilteredState(true);
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } else {
      if (
        data.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .map((item) => item.category)
          .includes(category)
      ) {
        setBlogs(
          data.docs
            .map((doc) => ({ ...doc.data(), id: doc.id }))
            .filter((item) => item.category === category),
          setFilteredState(true)
        );
      } else {
        setFilteredState(false);
      }
    }
  };

  //   category === "All"
  //     ? setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  //     : data.docs
  //         .map((doc) => ({ ...doc.data(), id: doc.id }))
  //         .map((item) => item.category)
  //         .includes(category)
  //     ? setBlogs(
  //         data.docs
  //           .map((doc) => ({ ...doc.data(), id: doc.id }))
  //           .filter((item) => item.category === category)
  //       )
  //     : setFilteredState((prev) => !prev);
  // };

  return (
    <div>
      <HeroSection filterBlogs={filterBlogs} />
      {filteredState ? (
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
                <div className=" flex justify-between">
                  <span className=" text-xs text-rose-500 font-bold">
                    {item.category}
                  </span>
                  {isAuth && (
                    <BsFillTrashFill
                      className=" cursor-pointer"
                      onClick={() => deleteBlog(item.id)}
                    />
                  )}
                </div>

                <Link
                  to={`/blogDetails/${item.id}`}
                  className=" text-sm font-bold cursor-pointer hover:underline"
                >
                  {" "}
                  {item.title}
                </Link>
                <p className=" text-sm">{item.description}</p>
                <div className=" flex justify-between items-center absolute bottom-3">
                  <div className=" flex items-center">
                    <img
                      src={author}
                      className=" w-14 h-13 rounded-full"
                      alt=""
                    />
                    <span className=" text-sm font-semibold">
                      {item.author}
                    </span>
                  </div>
                </div>
                <div className=" absolute bottom-[1.7rem] right-6">
                  <Link
                    to={`/blogDetails/${item.id}`}
                    className=" text-xs text-blue-600 cursor-pointer hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyBlogList isAuth={isAuth} />
      )}
    </div>
  );
}

export default Main;
