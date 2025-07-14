import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  bgImage: { type: String, required: true },
  link: { type: String, required: true },
});

const WorkModel = mongoose.models.work || mongoose.model("work", Schema);

export default WorkModel;
