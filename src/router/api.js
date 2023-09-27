import express from "express";
import todoController from "../controller/todo-controller.js";

const route = new express.Router();

route.post("/api/todo/", todoController.create);
route.get("/api/todo/", todoController.get);
route.patch("/api/todo/:id", todoController.update);
route.delete("/api/todo/:id", todoController.remove);

export { route };
