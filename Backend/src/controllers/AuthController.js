import User from "../models/UserModel.js";

class AuthController {
  async login(req, res) {
    const { email, password } = req.body; // const password=req.body.password is same
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    } else {
      let pResponse = await user.checkPassword(password);
      if (!pResponse) {
        return res.status(201).json({ message: "password incorrect" });
      } else {
        const token = user.generateToken();
        return res.status(200).json({ token });
      }
    }
  }

  register(req, res) {
    const { email, password } = req.body;
    return res.send({ email, password });
  }
}

export default AuthController;
