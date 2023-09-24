import express from "express";
import todoController from "../controller/todo-controller";

const route = new express.Router();

route.post("/api/todo/", todoController.create);

export { route };
