import axios from "@/utils/axiosConfig";

const getAllPosts = async () => {
  return await axios.get("/posts");
};

const getPostsByCategory = async (cat) => {
  return await axios.get(`/posts${cat}`);
};

const getPostById = async (id) => {
  return await axios.get(`/posts/${id}`);
};

const addANewPost = async (data) => {
  return await axios.post(`/posts`, data);
};

const updatePost = async (id, data) => {
  return await axios.put(`/posts/${id}`, data);
};

const removePost = async (id) => {
  return await axios.delete(`/posts/${id}`);
};

export {
  getAllPosts,
  getPostById,
  getPostsByCategory,
  addANewPost,
  updatePost,
  removePost,
};
