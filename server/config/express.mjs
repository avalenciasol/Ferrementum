import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import "express-async-errors";
import userRouter from "../routes/users.routes.mjs";

const app = express();

app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(express.json());


app.use("/users", userRouter);

export default app;