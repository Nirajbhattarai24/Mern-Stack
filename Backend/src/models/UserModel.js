import mongoose, { version } from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "others"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    image: {
      type: String,
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

userSchema.pre("save", async function (next) {
  //save garnu bhanda agadi document ko pre save run huncha ani Ismodified is also predefined.
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  if (obj.image) {
    obj.image = `${process.env.URL}:${process.env.PORT}/users/${obj.image}`;
  } else {
    obj.image = `${process.env.URL}:${process.env.PORT}/icons/not-found.png`;
  }
  delete obj.password;
  return obj;
};
userSchema.methods.checkPassword = function (password) {
  return bcrypt.compare(password, this.password);
};
userSchema.methods.generateToken = function () {
  let jwt_secretkey = process.env.SECRET_KEY || "@#$%HWDJWE";
  let exp_time = process.env.JWT_EXPIRATION || "1D";
  let user = {
    id: this._id, // we used _id because thats what stored in mongodb/its primary key
    role: this.role,
  };
  return jwt.sign({ user }, jwt_secretkey, {
    expiresIn: exp_time,
  });
};

export default mongoose.model("User", userSchema);
