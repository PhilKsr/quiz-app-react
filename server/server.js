import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import questionsRoutes from "./routes/questions.routes.js";

dotenv.config();
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const serverPort = process.env.PORT || 4000;

mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`
);

const server = express();

server.use(cors());
server.use(express.json());

const db = mongoose.connection;
db.on("error", console.log.bind(console, "Mongodb connection error"));
db.once("open", function (callback) {
  console.log("Mongodb connection succeeded");
});

server.use("/api", questionsRoutes);

server.listen(serverPort, () =>
  console.log(`Server is up and running on port ${serverPort}`)
);
