import { prismaClient } from "../app/database";
import { ResponseError } from "../error/response-error";

const create = async (request) => {
    if (request.title === "") {
        throw new ResponseError(401, "Input data");
    }

    const result = await prismaClient.todo.create({
        data: request,
        select: {
            id: true,
            title: true,
            task: true,
        },
    });

    return result;
};

export default {
    create,
};
