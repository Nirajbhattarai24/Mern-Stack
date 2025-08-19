import express from "express";
import dotenv from "dotenv";
import webRoute from "./routes/web.js";
import connection from "./database/Connection.js";
import multer from "multer";
import DatabaseSeeder from "./config/seeder/DatabaseSeeder.js";
import cors from "cors";

dotenv.config();
DatabaseSeeder.run();
connection.index();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/", webRoute);

const URL = process.env.URL;
app.listen(PORT, () => {
  console.log(`port running on  ${URL}:${PORT}`);
});
