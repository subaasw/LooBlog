import jwt from "jsonwebtoken";
import { db } from "../db.js";

export const getPosts = (req, res) => {
  const category = req.params.cat;
  const query = category
    ? "SELECT * FROM posts WHERE cat = ?"
    : "SELECT * FROM posts";

  db.query(query, [category], (err, data) => {
    if (err) return res.send(err);
    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const postId = req.params.id;
  const query =
    "SELECT p.id, username, title, `desc`, p.img, u.img AS userImg, cat, date, uid from users u JOIN posts p ON u.id = p.uid where p.id = ?";

  db.query(query, [postId], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.access_token;

  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "SuperSecretKey", (err, userInfo) => {
    if (err) return res.status(403).json("Invalid Token!");

    const insetQuery =
      "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`, `uid` ) VALUES (?, ?, ?, ?, ?, ?)";

    const { title, desc, img, cat, date } = req.body;

    console.log({title, desc, img, cat, date});

    db.query(insetQuery, [title, desc, img, cat, date, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Post has been created!");
    });
  });
};

export const updatePost = (req, res) => {
  const token = req.cookies.access_token;
  const postId = req.params.id;

  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "SuperSecretKey", (err, userInfo) => {
    if (err) return res.status(403).json("Invalid Token!");

    const insetQuery =
      "UPDATE posts SET `title`=?, `desc`=?, `img`=?, `cat`=? WHERE `id` = ? AND `uid` = ?";

    const { title, desc, img, cat } = req.body;

    db.query(insetQuery, [title, desc, img, cat, postId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Post has been updated!");
    });
  });
};

export const removePost = (req, res) => {
  const token = req.cookies.access_token;

  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "SuperSecretKey", (err, userInfo) => {
    if (err) return res.status(403).json("Invalid Token!");

    const postId = req.params.id;
    const query = "DELETE FROM posts WHERE id = ? AND uid = ?";

    db.query(query, [postId, userInfo.id], (err, data) => {
      if (err) res.status(403).json("Unauthorized access to delete the post");

      return res.status(200).json("Deleted Successfully!");
    });
  });
};
