import Category from "../models/Category.js";

class categoryController {
  async index(req, res) {
    try {
      const catData = await Category.find({});
      return res.status(200).json(catData);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Internal server error", error: err.message });
    }
  }
  async update(req, res) {
    let catId = req.params.id;
    try {
      const category = await Category.findByIdAndUpdate(catId, ...req.body);
      return res.status(201).json(category);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Internal server error", error: err.message });
    }
  }

  async store(req, res) {
    try {
      const name = req.body.name;
      const category = await Category.create({ name });
      return res.status(201).json(category);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "internal server error", error: err.message });
    }
  }
  async show(req, res) {
    let catId = req.params.id;
    try {
      const category = await Category.findById(catId);
      return res.status(200).json(category);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Internal server error", error: err.me });
    }
  }

  async destroy(req, res) {
    let catId = req.params.id;
    try {
      const category = await Category.findByIdAndDelete(catId);
      if (!category) {
        return res.status(404).json({ message: "cat not found" });
      } else {
        return res.status(200).json({ message: "cat deleted successfully" });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ message: "internal server error", error: err.message });
    }
  }
}
export default categoryController;
