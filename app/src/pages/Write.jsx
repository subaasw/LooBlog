import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import moment from "moment";
import "react-quill/dist/quill.snow.css";
import axios from "@/utils/axiosConfig";

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
  console.log(cat);
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
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    const imgUrl = await upload();

    try {
      if (state) {
        await axios.put(`/posts/${state.id}`, {
          title,
          desc: value,
          img: file ? imgUrl : "",
          cat,
        });
      } else {
        await axios.post(`/posts`, {
          title,
          desc: value,
          cat,
          img: file ? imgUrl : "",
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        });
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
            <button className="bg-wood-700 font-medium self-start py-2 px-4 cursor-pointer">Publish</button>
          </div>
        </div>
      </form>
    </section>
    // <div className="add">
    //   <div className="content">
    //     <input
    //       type="text"
    //       placeholder="title"
    //       value={title}
    //       onChange={(e) => setTitle(e.target.value)}
    //     />
    //     <div className="editorContainer">
    //       <ReactQuill className="editor" value={value} onChange={setValue} />
    //     </div>
    //   </div>
    //   <div className="menu">
    //     <div className="item">
    //       <h1>Publish</h1>
    //       <span>
    //         <b>Status:</b> Draft
    //       </span>
    //       <span>
    //         <b>Visibility:</b> Public
    //       </span>
    //       <input
    //         style={{
    //           display: "none",
    //         }}
    //         type="file"
    //         name=""
    //         id="file"
    //         onChange={(e) => setFile(e.target.files[0])}
    //       />
    //       <label className="file" htmlFor="file">
    //         Upload Image
    //       </label>
    //       <div className="buttons">
    //         <button>Save as a draft</button>
    //         <button onClick={handleSubmit}>Publish</button>
    //       </div>
    //     </div>
    //     <div className="item">
    //       <h1>Category</h1>
    //       <input
    //         type="radio"
    //         name="cat"
    //         value="art"
    //         id="art"
    //         checked={cat === "art"}
    //         onChange={(e) => setCat(e.target.value)}
    //       />
    //       <label htmlFor="art">Art</label>

    //       <input
    //         type="radio"
    //         name="cat"
    //         value="science"
    //         id="science"
    //         checked={cat === "science"}
    //         onChange={(e) => setCat(e.target.value)}
    //       />
    //       <label htmlFor="science">Science</label>

    //       <input
    //         type="radio"
    //         name="cat"
    //         value="technology"
    //         id="technology"
    //         checked={cat === "technology"}
    //         onChange={(e) => setCat(e.target.value)}
    //       />
    //       <label htmlFor="technology">Technology</label>

    //       <input
    //         type="radio"
    //         name="cat"
    //         value="cinema"
    //         id="cinema"
    //         checked={cat === "cinema"}
    //         onChange={(e) => setCat(e.target.value)}
    //       />
    //       <label htmlFor="cinema">Cinema</label>

    //       <input
    //         type="radio"
    //         name="cat"
    //         value="design"
    //         id="design"
    //         checked={cat === "design"}
    //         onChange={(e) => setCat(e.target.value)}
    //       />
    //       <label htmlFor="design">Design</label>

    //       <input
    //         type="radio"
    //         name="cat"
    //         value="food"
    //         id="food"
    //         checked={cat === "food"}
    //         onChange={(e) => setCat(e.target.value)}
    //       />
    //       <label htmlFor="food">Food</label>
    //     </div>
    //   </div>
    // </div>
  );
}
