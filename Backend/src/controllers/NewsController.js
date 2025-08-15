import News from "../models/News.js";
import fs from "fs";

class NewsController {
  constructor() {
    this.deleteFile = this.deleteFile.bind(this);
    this.update = this.update.bind(this);
    this.destroy = this.destroy.bind(this);
  }
  async deleteFile(id) {
    //     let user = await User.findById(id);
    //     if (user.image) {
    //       let imagepath = "public/users/" + user.image;
    //       if (fs.existsSync(imagepath)) {
    //         await fs.unlinkSync(imagepath);
    //         return true;
    //       } else {
    //         return true;
    //       }
    //     } else {
    //       return true;
    //     }
  }
  async update(req, res) {
    //     let userId = req.params.id;
    //     try {
    //       let image = (await User.findById(userId).image) ?? "";
    //       if (req.file) {
    //         this.deleteFile(userId);
    //         image = req.file.filename;
    //         console.log("image updated", image);
    //       }
    //       const user = await User.findByIdAndUpdate(userId, { ...req.body, image });
    //       return res.status(201).json(user);
    //     } catch (err) {
    //       return res
    //         .status(500)
    //         .json({ message: "Internal server error", error: err.message });
    //     }
  }
  async index(req, res) {
    try {
      const newsData = await News.find({})
        .populate("categoryId", "name")
        .populate("userId", "name");
      return res.status(200).json(newsData);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Internal server error", error: err.me });
    }
  }
  async store(req, res) {
    try {
      let image = "";
      if (req.file) {
        image = req.file.filename;
      }
      let userId = req.body.userId;
      const news = await News.create({
        ...req.body,
        image,
        userId,
      });
      return res.status(201).json(news);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "internal server error", error: err.message });
    }
  }
  async show(req, res) {
    //     let userId = req.params.id;
    //     try {
    //       const usersData = await User.findById(userId);
    //       return res.status(200).json(usersData);
    //     } catch (err) {
    //       return res
    //         .status(500)
    //         .json({ message: "Internal server error", error: err.me });
    //     }
  }

  async destroy(req, res) {
    //     let userId = req.params.id;
    //     try {
    //       await this.deleteFile(userId);
    //       const user = await User.findByIdAndDelete(userId);
    //       if (!user) {
    //         return res.status(404).json({ message: "user not found" });
    //       } else {
    //         return res.status(200).json({ message: "user deleted successfully" });
    //       }
    //     } catch (err) {
    //       return res
    //         .status(500)
    //         .json({ message: "internal server error", error: err.message });
    //     }
  }
}
export default NewsController;
