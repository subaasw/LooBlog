import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { useAuthContext } from "@/context/authContext";
import axios from "@/utils/axiosConfig";
import Menu from "@/components/Menu";

import EditIcon from "@/assets/edit.png";
import TrashIcon from "@/assets/delete.png";

export default function Single() {
  const [post, setPost] = useState({});
  const { currentUser } = useAuthContext();
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const postId = pathname.split("/")[2];

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (error) {
        console.warn(error);
      }
    };
    fetchData();
  }, [postId]);

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt={post?.title} />
        <div className="user">
          {post?.userImg && <img src={post.userImg} alt={post.uId} />}

          <div className="info">
            <span>{post?.username}</span>
            <p>posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.id === post?.uid && (
            <div className="edit">
              <Link to={`/write/?edit=2`} state={post}>
                <img src={EditIcon} alt="" />
              </Link>

              <img onClick={handleDelete} src={TrashIcon} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: post.desc }}></p>
      </div>
      <Menu cat={post?.cat} />
    </div>
  );
}
