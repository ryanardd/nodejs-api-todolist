import { prismaClient } from "../app/database.js";
import { ResponseError } from "../error/response-error.js";
import { createTodoValidation } from "../validation/todo-validation.js";
import { validate } from "../validation/validation.js";

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

const get = async (request) => {
    const data = await prismaClient.todo.findMany({
        where: request,
    });

    if (!data) {
        throw new ResponseError(404, "Data is not found");
    }

    return prismaClient.todo.findMany({
        where: request,
        select: {
            id: true,
            title: true,
            task: true,
        },
    });
};

export default {
    create,
    get,
};
