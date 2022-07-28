import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useHistory } from "react-router-dom";

function CreateBlog() {
  const history = useHistory();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    body: "",
    image: "",
    author: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const blogCollectionRef = collection(db, "BolgData");

  const addBlog = async (e) => {
    e.preventDefault();
    await addDoc(blogCollectionRef, {
      title: formData.title,
      description: formData.description,
      category: formData.category,
      body: formData.body,
      image: formData.image,
      author: formData.author,
    });

    // toast.success("New blog post added successfully", {
    //   position: "top-center",
    // });

    alert("New blog post added successfully");

    history.goBack();
  };

  return (
    <div className=" h-screen">
      <form action="" onSubmit={addBlog}>
        <div className=" w-[50%] flex flex-col gap-2 m-auto text-center">
          <h1 className=" text-3xl font-semibold py-6">Create New Post</h1>
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            name="title"
            onChange={handleChange}
            required
            className=" h-14 px-4 text-md rounded-xl"
          />
          <input
            type="text"
            placeholder="Description (Not more than 25 words)"
            value={formData.description}
            name="description"
            onChange={handleChange}
            required
            className=" h-14 px-4 text-md rounded-xl"
          />

          <textarea
            type="text"
            placeholder="Your blog here..."
            value={formData.body}
            name="body"
            onChange={handleChange}
            required
            className=" resize-none h-32 px-4 py-4 text-md rounded-xl"
          />
          <select
            id="category"
            value={formData.category}
            name="category"
            onChange={handleChange}
            required
            className=" h-14 px-4 text-md rounded-xl"
          >
            <option value="">Category</option>
            <option value="Travel">Travel</option>
            <option value="Fashion">Fashion</option>
            <option value="Fitness">Fitness</option>
            <option value="Sports">Sports</option>
            <option value="Food">Food</option>
            <option value="Technology">Technology</option>
          </select>
          <input
            type="text"
            placeholder="Cover image URL"
            value={formData.image}
            name="image"
            onChange={handleChange}
            required
            className=" h-14 px-4 text-md rounded-xl"
          />

          <input
            type="text"
            placeholder="Author"
            value={formData.author}
            name="author"
            onChange={handleChange}
            required
            className=" h-14 px-4 text-md rounded-xl"
          />

          <button
            type="submit"
            className=" w-full bg-rose-500 rounded-xl h-14 text-2xl text-white tracking-wider"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateBlog;
