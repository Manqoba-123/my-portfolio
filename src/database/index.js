import mongoose, { mongo } from "mongoose";

export default async function connectToDatabase() {
  try {
    await mongoose.connect(
      ""
    );
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
}
