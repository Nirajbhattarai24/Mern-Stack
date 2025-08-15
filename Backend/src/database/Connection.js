import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

class connection {
  static index() {
    const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/mern";
    try {
      mongoose.connect(dbUrl).then((res) => {
        console.log("db connected");
      });
    } catch (err) {
      console.log("database connection error:", err);
    }
  }
}
export default connection;

// let obj= new connection();
// console.log(obj.index())
//static we can directly do connection.index()
