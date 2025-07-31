const supertest = require("supertest");
const app = require("./server");

jest.setTimeout(80 * 100)

let itemBot = {
    "bombs": 3,
    }

describe("GET /action", () => {

    describe("Quand le bot fait un mouvement", () => {
        it("et il a assez de bombe dans son inventaire", async () => {
            const response = await supertest(app).get("/action");
            expect(response.body).toHaveProperty("action");
            expect(response.body).toHaveProperty("move");
            if(response.body.action === "BOMB") {
                itemBot.bombs--;
                expect(itemBot.bombs).toBeLessThan(3);
            }
        });

        it("et que si le nombre de bombe dans l'inventaire est en dessous de 1", async () => {
            const response = await supertest(app).get("/action");
            if (itemBot.bombs < 1) {
                expect(response.body.action).not.toBe("BOMB");
            }
            expect(response.body).toHaveProperty("action");
            expect(response.body).toHaveProperty("move");
        });
    });
})