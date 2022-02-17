import express from "express";
import {
  getQuestions,
  postQuestion,
} from "../controllers/questions.controller";

const router = express.Router();
router.get("/question", getQuestions);

router.post("/question", postQuestion);

export default router;
