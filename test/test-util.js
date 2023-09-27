import { prismaClient } from "../src/app/database";

export const getTest = async () => {
    return prismaClient.todo.findFirst({
        where: {
            id: 1,
        },
    });
};
