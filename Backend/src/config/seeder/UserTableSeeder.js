import User from "../../models/UserModel.js";

class UserTableSeeder {
  static async seed() {
    const users = [
      {
        name: "admin",
        email: "admin@gmail.com",
        password: "admin002",
        gender: "male",
        address: "ktm",
        role: "admin",
        image: "",
      },
      {
        name: "ram",
        email: "ram@gmail.com",
        password: "ram002",
        gender: "male",
        address: "ktm",
        image: "",
      },
    ];

    users.map(async (user) => {
      let findUser = await User.findOne({ email: user.email });
      if (!findUser) {
        await User.create(user);
        console.log(`user ${user.name} created`);
      }
    });
  }
}

export default UserTableSeeder;
