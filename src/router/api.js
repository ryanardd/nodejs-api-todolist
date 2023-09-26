import express from "express";
import todoController from "../controller/todo-controller.js";

const route = new express.Router();

route.post("/api/todo/", todoController.create);
route.get("/api/todo/", todoController.get);

export { route };
