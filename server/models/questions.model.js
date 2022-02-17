import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  category: { type: String, required: true },
  question: { type: String, required: true },
  answers: { type: Array, required: true },
});

const Question = mongoose.model("trivia_questions", questionSchema);

export default Question;
