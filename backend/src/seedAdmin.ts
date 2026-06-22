import bcrypt from "bcryptjs";
import Admin from "./models/Admin.model";

export const seedAdmin = async () => {
  const admin = await Admin.findOne({
    where: {
      email: "admin@acowale.com",
    },
  });

  if (!admin) {
    const hashedPassword =
      await bcrypt.hash("Admin@123", 10);

    await Admin.create({
      email: "admin@acowale.com",
      password: hashedPassword,
    });

    console.log("Admin Seeded");
  }
};