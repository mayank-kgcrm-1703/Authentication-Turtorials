import express from "express";
import morgan from "morgan";
import authR

const app = express();
app.use(express.json());
app.use(morgan("dev"));

export default app;

