import TokenVerify from "./TokenVerify.js";

class AuthMiddleware {
  static check(req, res, next) {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(201).json({ message: "Unauthorized user" });
    } else {
      let token1 = token.split(" ")[1]; // we need after "bearer"  so bearer is 0 and rest token is array 1
      let verify = TokenVerify.verifyToken(token1);
      if (!verify) {
        return res.status(401).json({ message: "Unauthorised accesss" });
      } else {
        return res
          .status(200)
          .json({ message: "Authorised accesss", user: verify }); //comment out this for
      }
      next();
    }
  }
}

export default AuthMiddleware;
