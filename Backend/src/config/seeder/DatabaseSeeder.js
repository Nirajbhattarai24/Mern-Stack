import UserTableSeeder from "../seeder/UserTableSeeder.js";
import CategoryTableSeeder from "./CategoryTableSeeder.js";

class DatabaseSeeder {
  static run() {
    UserTableSeeder.seed();
    CategoryTableSeeder.seed();
  }
}

export default DatabaseSeeder;
