import express from "express";
import cors from "cors";
import "express-async-errors";
import userRouter from "../routes/users.routes.mjs";
import authRouter from "../routes/auth.routes.mjs";

const app = express();

app.use(cors());
app.use(express.json());

// Load the /users routes
app.use("/users", { userRouter, authRouter });

export default app;