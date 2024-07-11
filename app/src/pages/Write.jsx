import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "@/utils/axiosConfig";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

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
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill className="editor" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input
            style={{
              display: "none",
            }}
            type="file"
            name=""
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input
            type="radio"
            name="cat"
            value="art"
            id="art"
            checked={cat === "art"}
            onChange={(e) => setCat(e.target.value)}
          />
          <label htmlFor="art">Art</label>

          <input
            type="radio"
            name="cat"
            value="science"
            id="science"
            checked={cat === "science"}
            onChange={(e) => setCat(e.target.value)}
          />
          <label htmlFor="science">Science</label>

          <input
            type="radio"
            name="cat"
            value="technology"
            id="technology"
            checked={cat === "technology"}
            onChange={(e) => setCat(e.target.value)}
          />
          <label htmlFor="technology">Technology</label>

          <input
            type="radio"
            name="cat"
            value="cinema"
            id="cinema"
            checked={cat === "cinema"}
            onChange={(e) => setCat(e.target.value)}
          />
          <label htmlFor="cinema">Cinema</label>

          <input
            type="radio"
            name="cat"
            value="design"
            id="design"
            checked={cat === "design"}
            onChange={(e) => setCat(e.target.value)}
          />
          <label htmlFor="design">Design</label>

          <input
            type="radio"
            name="cat"
            value="food"
            id="food"
            checked={cat === "food"}
            onChange={(e) => setCat(e.target.value)}
          />
          <label htmlFor="food">Food</label>
        </div>
      </div>
    </div>
  );
}
