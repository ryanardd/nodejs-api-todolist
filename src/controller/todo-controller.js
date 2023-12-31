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

const update = async (req, res, next) => {
    try {
        const contactId = req.params.id;
        const request = req.body;
        request.id = contactId;

        const result = await todoService.update(request);
        res.status(200).json({
            data: result,
            message: "Data Updated",
        });
    } catch (error) {
        next(error);
    }
};

const remove = async (req, res, next) => {
    try {
        const requestId = req.params.id;
        await todoService.remove(requestId);
        res.status(200).json({
            message: "Deleted Successfuly",
        });
    } catch (error) {
        next(error);
    }
};

export default {
    create,
    get,
    update,
    remove,
};
