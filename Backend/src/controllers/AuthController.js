import User from "../models/UserModel.js";
import TokenVerify from "../middleware/TokenVerify.js";

class AuthController {
  async login(req, res) {
    const { email, password } = req.body; // const password=req.body.password is same
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    } else {
      let pResponse = await user.checkPassword(password);
      if (!pResponse) {
        return res.status(404).json({ message: "password incorrect" });
      } else {
        const token = user.generateToken();
        return res.status(200).json({ token });
      }
    }
  }
  async authUser(req, res) {
    let token = req.headers.authorization;
    console.log(token);
    if (!token) {
      return res.status(404).json({ message: "Unauthorized user" });
    } else {
      let token1 = token.split(" ")[1]; // we need after "bearer"  so bearer is 0 and rest token is array 1
      let verify = TokenVerify.verifyToken(token1); //payload of object, where the verified person who is trying to access is here
      if (!verify) {
        return res
          .status(401)
          .json({ isLogin: false, message: "Invalid token accesss" });
      } else {
        let user = await User.findById(verify.user.id).select("-password");

        //here id is inside user in our jwt token so we used user.id
        if (!user) {
          return res
            .status(404)
            .json({ isLogin: false, message: "user not found" });
        } else {
          return res.status(200).json({ islogin: true, user });
        }
      }
    }
  }

  register(req, res) {
    const { email, password } = req.body;
    return res.send({ email, password });
  }
}

export default AuthController;
