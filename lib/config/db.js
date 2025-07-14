import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://chongyiming24680:Amaci1205!@cluster0.dyb7rgy.mongodb.net/portfolio-app"
  );
  console.log("DB connected");
};
