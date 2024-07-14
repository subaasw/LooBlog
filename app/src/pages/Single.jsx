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
      console.warn(err);
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
    <>
      <section>
        <div className="mx-auto 2xl:max-w-screen-2xl md:px-12 px-8 grid py-12 space-y-6">
          <img
            className="w-full h-96 object-cover"
            src={post?.img}
            alt={post?.title}
          />
        </div>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl px-8 md:px-12  mx-auto  pb-24">
        <section className="relative bg-wood-100 lg:-mt-72 lg:p-8 overflow-hidden lg:col-span-9 ">
          <div className="grid grid-cols-1 gap-10 xl:gap-24">
            <div className="bg-wood-100">
              <div>
                <h1 className="text-black font-serif font-bold lg:text-4xl text-xl uppercase">
                  {post?.title}
                </h1>
              </div>
              <div className=" inline-flex mt-10">
                <div className=" inline-flex space-x-1">
                  <p className="font-medium text-gray-900 text-sm">
                    {post?.username}
                  </p>
                  <span aria-hidden="true">·</span>
                  <div className="flex text-gray-500 text-sm">
                    <time dateTime={moment(post.date).fromNow()}>
                      {moment(post.date).fromNow()}
                    </time>
                  </div>
                </div>
              </div>
              {currentUser?.id === post?.uid && (
                <div className="flex gap-3 h-8">
                  <Link className="h-8" to={`/create/?edit=${post.id}`} state={post}>
                    <img className="h-full " src={EditIcon} alt="" />
                  </Link>

                  <img className="cursor-pointer" onClick={handleDelete} src={TrashIcon} alt="" />
                </div>
              )}
              <div className="flex gap-3 mt-6">
                <span className="bg-wood-500  px-3 py-1.5 text-xs h-8 text-black flex">
                  {post?.cat}
                </span>
              </div>
            </div>

            <div>
              <div className="prose-styles leading-8">
                <p dangerouslySetInnerHTML={{ __html: post.desc }}></p>
              </div>
            </div>
          </div>
        </section>
        <div className="lg:col-span-3 hidden lg:block">
          <div id="table-of-contents" className="sticky top-24">
            <h3 className="font-bold text-xl mb-4">Recent Posts</h3>
            <Menu cat={post?.cat} />
          </div>
        </div>
      </div>
    </>
  );
}
