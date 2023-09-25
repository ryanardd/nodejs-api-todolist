import express from "express";
import { route } from "../router/api";
import { errorMiddleware } from "../error/error-middleware";

export const app = express();
app.use(express.json());

app.use(route);

app.use(errorMiddleware);
