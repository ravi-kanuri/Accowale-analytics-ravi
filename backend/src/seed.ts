import Category from "./models/Category.model";

export const seedCategories = async () => {
  const categories = [
    "Product",
    "Service",
    "Support",
    "Billing",
    "Feature Request",
    "Other",
  ];

  for (const category of categories) {
    await Category.findOrCreate({
      where: {
        name: category,
      },
    });
  }

  console.log("Categories Seeded");
};