import express from "express";
import {
  getQuestions,
  postQuestion,
} from "../controllers/questions.controller.js";

const router = express.Router();
router.get("/questions", getQuestions);

router.post("/questions", postQuestion);

export default router;
