import supertest from "supertest";
import { app } from "../src/app/web";
import { logger } from "../src/app/logging";
import { getTest } from "./test-util";

describe("POST /api/todo/", () => {
    it("should can create todolist", async () => {
        const result = await supertest(app).post("/api/todo/").send({
            title: "Belajar",
            task: "Belajar Coding",
        });

        logger.info(result.body);

        expect(result.status).toBe(200);
        expect(result.body.data.title).toBe("Belajar");
    });

    it("should reject if request invalid", async () => {
        const result = await supertest(app).post("/api/todo/").send({
            title: "",
            task: "",
        });

        logger.info(result.body);

        expect(result.status).toBe(400);
    });

    it("should reject if request title invalid", async () => {
        const result = await supertest(app).post("/api/todo/").send({
            title: "",
            task: "Belajar",
        });

        logger.info(result.body);

        expect(result.status).toBe(400);
    });

    it("should reject if request task invalid", async () => {
        const result = await supertest(app).post("/api/todo/").send({
            title: "Belajar",
            task: "",
        });

        logger.info(result.body);

        expect(result.status).toBe(400);
    });
});

describe("GET /api/todo/", () => {
    it("should can get all data", async () => {
        const result = await supertest(app).get("/api/todo/");

        logger.info(result.body);

        expect(result.status).toBe(200);
    });
});

describe("PATCH /api/todo/:id", () => {
    it("should can data updated", async () => {
        // get data test
        const testId = await getTest();

        const result = await supertest(app)
            .patch("/api/todo/" + testId.id)
            .send({
                title: "Rahasia",
                task: "Jangan Dibuka",
            });

        logger.info(result.body);
        expect(result.status).toBe(200);
        expect(result.body.data.title).toBe("Rahasia");
        expect(result.body.data.task).toBe("Jangan Dibuka");
    });

    it("should can data title updated", async () => {
        // get data test
        const testId = await getTest();

        const result = await supertest(app)
            .patch("/api/todo/" + testId.id)
            .send({
                title: "Rahasia Lagi",
            });

        logger.info(result.body);
        expect(result.status).toBe(200);
        expect(result.body.data.title).toBe("Rahasia Lagi");
    });

    it("should reject request id", async () => {
        // get data test
        const testId = await getTest();

        const result = await supertest(app)
            .patch("/api/todo/" + (testId.id + 99))
            .send({
                title: "Rahasia",
                task: "Jangan Dibuka",
            });

        logger.info(result.body);
        expect(result.status).toBe(404);
    });
});

describe("DELETE /api/todo/:id", () => {
    it("should can data deleted", async () => {
        const testId = await getTest();

        const result = await supertest(app).delete("/api/todo/" + testId.id);

        logger.info(result.body);

        expect(result.status).toBe(200);
        expect(result.body.message).toBe("Deleted Successfuly");
    });

    it("should reject if request deleted invalid", async () => {
        const testId = await getTest();

        const result = await supertest(app).delete("/api/todo/" + (testId.id + 99));

        logger.info(result.body);

        expect(result.status).toBe(404);
    });
});
