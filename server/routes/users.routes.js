import express from "express";
import {
  getUser,
  postLogin,
  postRegister,
} from "../controllers/users.controller.js";

const router = express.Router();

router.get("/login", getUser);
router.post("/login", postLogin);
router.post("/register", postRegister);

export default router;
