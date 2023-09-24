import supertest from "supertest";
import { app } from "../src/app/web";
import { logger } from "../src/app/logging";

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
        console.info(result);

        expect(result.status).toBe(401);
    });
});