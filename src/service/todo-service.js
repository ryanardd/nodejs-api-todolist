import { prismaClient } from "../app/database";
import { ResponseError } from "../error/response-error";
import { createTodoValidation } from "../validation/todo-validation";
import { validate } from "../validation/validation";

const create = async (request) => {
    request = validate(createTodoValidation, request);

    // if (request.title === null) {
    //     throw new ResponseError(401, "Input data");
    // }

    return prismaClient.todo.create({
        data: request,
        select: {
            id: true,
            title: true,
            task: true,
        },
    });
};

export default {
    create,
};
