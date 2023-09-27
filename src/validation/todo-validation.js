import Joi from "joi";

export const createTodoValidation = Joi.object({
    title: Joi.string().min(1).optional(),
    task: Joi.string().min(1).required(),
});

export const updateTodoValidation = Joi.object({
    id: Joi.number().positive().required(),
    title: Joi.string().min(1).optional(),
    task: Joi.string().min(1).optional(),
});

export const getTodoValidation = Joi.number().required();
