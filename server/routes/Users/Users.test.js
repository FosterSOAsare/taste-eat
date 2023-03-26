const app = require("../../app");
const request = require("supertest");
require("dotenv").config();
const { startMongoose, mongoose } = require("../../mongoose");

describe("Test Users endpoint", () => {
	beforeAll(async () => {
		await startMongoose();
	});
	afterAll(async () => {
		await mongoose.connection.close();
	});
	describe("GET Admin user", () => {
		it("should return an error if there is no set password", async () => {
			let response = await request(app).get("/users").expect(400);
			response = JSON.parse(response.text);
			expect(response).toStrictEqual({ error: "Please provide valid credentials" });
		});
		it("should return an error if there is no set type", async () => {
			let response = await request(app).get("/users").expect(400);
			response = JSON.parse(response.text);
			expect(response).toStrictEqual({ error: "Please provide valid credentials" });
		});
		it("should return an error if password is invalid", async () => {
			let response = await request(app).get("/users?type=password&value=24567828290p2").expect(404);
			response = JSON.parse(response.text);
			expect(response).toStrictEqual({ error: "Invalid admin password" });
		});
		it("should return success", async () => {
			console.log(process.env.ADMIN_PASSWORD);
			let response = await request(app).get(`/users?type=password&value=${process.env.ADMIN_PASSWORD}`).expect(200);
			response = JSON.parse(response.text);
		});
	});
});
