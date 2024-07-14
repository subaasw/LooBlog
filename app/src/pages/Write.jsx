import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import ReactQuill from "react-quill";

import { addANewPost, updatePost } from "@/utils/api/posts";
import { useAuthContext } from "@/context/authContext";
import axios from "@/utils/axiosConfig";
import "react-quill/dist/quill.snow.css";

const categories = [
  "technology",
  "biography",
  "cinema",
  "design",
  "science",
  "food",
];

const FileUpload = ({ setFile }) => {
  return (
    <div>
      <h3 className="mb-3">Upload an image</h3>
      <input
        type="file"
        className="text-gray-500 font-medium mb-4 text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white"
        onChange={(e) => setFile(e.target.files[0])}
      />
    </div>
  );
};

const Categories = ({ cat, setCat }) => {
  return (
    <div className="w-64">
      <h2 className="mb-4">Choose Categories</h2>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <label
            key={category}
            htmlFor={`hs-radio-${category}`}
            className="flex p-3 w-full bg-white border border-gray-200 text-sm cursor-pointer focus:border-blue-500 focus:ring-blue-500"
          >
            <input
              type="radio"
              name="category"
              value={category}
              className="shrink-0 mt-0.5 border-gray-200-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              id={`hs-radio-${category}`}
              checked={cat === category}
              onChange={(e) => setCat(e.target.value)}
            />
            <span className="text-sm text-gray-500 ms-3">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default function Write() {
  const state = useLocation().state;
  const navigate = useNavigate();
  const { currentUser } = useAuthContext();

  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [cat, setCat] = useState(state?.cat || "");
  const [file, setFile] = useState(state?.img || null);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/uploads", formData);
      return res.data;
    } catch (error) {
      console.warn(error);
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    const imgUrl = await upload();

    try {
      if (state) {
        await updatePost(state.id, {
          title,
          desc: value,
          img: file ? imgUrl : "",
          cat,
        });
      } else {
        await addANewPost({
          title,
          desc: value,
          cat,
          img: file ? imgUrl : "",
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        });
      }
      navigate("/");
    } catch (error) {
      console.warn(error);
    }
  };

  if (!currentUser?.id) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="items-center 2xl:max-w-7xl max-w-6xl md:px-12 mx-auto px-8 pt-32">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-6">
          <div className="flex flex-col gap-4 flex-grow">
            <input
              name="title"
              type="text"
              value={title}
              placeholder="Title"
              className="block w-full appearance-none border border-transparent h-10 bg-wood-500  px-3 py-2 placeholder-mist-900 text-black focus:border-salmon-500 focus:outline-none focus:ring-salmon-500 sm:text-sm"
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <div className="min-h-[500px] overflow-auto quill-editor-wrapper">
              <ReactQuill
                className="h-full"
                value={value}
                onChange={setValue}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <FileUpload setFile={setFile} />
            <Categories cat={cat} setCat={setCat} />
            <button className="bg-wood-700 font-medium self-start py-2 px-4 cursor-pointer">
              Publish
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
