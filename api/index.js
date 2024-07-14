import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";


import { upload } from "./controllers/uploader.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";

const corsOptions = {
  origin: true,
  credentials: true,
};

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

app.use("/images", express.static(uploadDir));

app.post("/api/uploads", upload.single("file"), (req, res) => {
  const file = req.file.filename;
  const url = "http://localhost:8800/images/" + file;

  return res.status(200).json(url);
});

app.use("/api/auth", authRoutes);
app.use("api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(8800, () => {
  console.log("Connected");
});
