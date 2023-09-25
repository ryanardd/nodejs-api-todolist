import Joi from "joi";

export const createTodoValidation = Joi.object({
    title: Joi.string().min(1).optional(),
    task: Joi.string().min(1).required(),
});
