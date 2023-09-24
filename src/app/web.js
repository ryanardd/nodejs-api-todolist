import express from "express";
import { route } from "../router/api";

export const app = express();
app.use(express.json());

app.use(route);
