import Category from "../../models/Category.js";

class CategoryTableSeeder {
  static async seed() {
    const categories = [
      {
        name: "Technology",
      },
      {
        name: "Health",
      },
      {
        name: "Entertainment",
      },
      {
        name: "Finance",
      },
    ];

    categories.map(async (category) => {
      let findCategory = await Category.findOne({ name:category.name});
      if (!findCategory) {
        await Category.create(category);
        console.log(`Cat ${category.name} created`);
      }
    });
  }
}

export default CategoryTableSeeder;
