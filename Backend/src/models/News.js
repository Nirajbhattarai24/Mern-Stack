import mongoose, { version } from "mongoose";
import slugify from "slugify";
import dotenv from "dotenv";

dotenv.config();

const newsSchema = new mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

newsSchema.pre("save", async function (next) {
  if (!this.isModified("slug")) {
    next();
  }
  this.slug = slugify(this.title, { lower: true });
  next();
});

newsSchema.methods.toJSON = function () {
  const obj = this.toObject();
  if (obj.image) {
    obj.image = `${process.env.URL}:${process.env.PORT}/news/${obj.image}`;
  } else {
    obj.image = `${process.env.URL}:${process.env.PORT}/icons/not-found.png`;
  }
  return obj;
};

export default mongoose.model("News", newsSchema);
