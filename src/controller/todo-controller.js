import todoService from "../service/todo-service.js";

const create = async (req, res, next) => {
    try {
        const request = req.body;
        const result = await todoService.create(request);
        res.status(200).json({
            data: result,
            message: "Created data todo",
        });
    } catch (error) {
        next(error);
    }
};

const get = async (req, res, next) => {
    try {
        const request = req.body;
        const result = await todoService.get(request);
        res.status(200).json({
            data: result,
            message: "All data",
        });
    } catch (error) {
        next(error);
    }
};

export default {
    create,
    get,
};
