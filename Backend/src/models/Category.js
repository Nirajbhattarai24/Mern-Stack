import mongoose from "mongoose";
import slugify from "slugify";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      unique: true,
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

categorySchema.pre("save", async function (next) {
  if (!this.isModified("slug")) {
    next();
  }
  this.slug = slugify(this.name, { lower: true });
  next();
});

export default mongoose.model("Category", categorySchema);
