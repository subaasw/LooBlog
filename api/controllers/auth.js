import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../db.js";

export const register = (req, res) => {
  //check existing user
  const userEmail = req.body.email;
  const userName = req.body.username;
  const password = req.body.password;

  const query = "SELECT * FROM users WHERE email = ? or username = ?";
  db.query(query, [userEmail, userName], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists");

    // Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const insetQuery =
      "INSERT INTO users(username, email, password) VALUES (?)";

    const values = [userName, userEmail, hash];

    db.query(insetQuery, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req, res) => {
  // check user
  const userName = req.body.username;
  const userPassword = req.body.password;

  const query = "SELECT * from users WHERE username = ?";

  db.query(query, [userName], (err, data) => {
    if (err) return res.json(data);

    if (data.length === 0) return res.status(404).json("User not found!");

    // check password
    const isPasswordCorrect = bcrypt.compareSync(
      userPassword,
      data[0].password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json("Wrong username or password");
    }

    const { password, ...args } = data[0];

    const token = jwt.sign({ id: data[0].id }, "SuperSecretKey");
    return res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(args);
  });
};

export const logout = (req, res) => {
  return res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out.");
};
