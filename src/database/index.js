import mongoose, { mongo } from "mongoose";

export default async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://mlangenimanqoba:Mlangeni@081079@cluster0.sey5nub.mongodb.net/"
    );
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
}
