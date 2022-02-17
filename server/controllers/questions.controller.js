import Question from "../models/questions.model.js";

const getQuestions = async (req, res) => {
  const results = await Question.find();
  res.json(results);
};

const postQuestion = async (req, res) => {
  const question = new Question({
    ...req.body,
  });
  try {
    const result = await question.save();
    res.json({
      newQuestion: result,
    });
  } catch (error) {
    res.json(error);
  }
};

export { getQuestions, postQuestion };
