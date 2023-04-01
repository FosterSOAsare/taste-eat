const request = require("supertest");
const app = require("../../app");
const { startMongoose, mongoose } = require("../../mongoose");

describe("Test the Newsletter Collection", () => {
	beforeAll(async () => {
		await startMongoose();
	});
	afterAll(async () => {
		await mongoose.connection.close();
	});
	describe("GET subscriptions", () => {
		it("should return success", async () => {
			let response = await request(app).get("/api/newsletter").expect(200);
		});
		// Removed because public will have all 404 routes
		// it("should return 404 when route is wrong", async () => {
		// 	let response = await request(app).get("/api/newsletters");
		// 	console.log(response.text);
		// });
	});
	describe("POST subscription", () => {
		it("should return an error when no email is set", async () => {
			let response = await request(app).post("/api/newsletter").expect(400);
			response = JSON.parse(response.text);
			expect(response).toStrictEqual({ error: "Please provide all needed data" });
		});
		it("should return an error when email is already registered", async () => {
			let response = await request(app)
				.post("/api/newsletter")
				.send({
					email: "asare4ster@gmail.com",
				})
				.expect(404);
			response = JSON.parse(response.text);
			expect(response).toStrictEqual({ error: "Email has already been added to the subscription list" });
		});
		it("should return success", async () => {
			let alp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
			let ext = "";
			for (let i = 0; i < 6; i++) {
				let rand = Math.floor(Math.random() * alp.length);
				ext += rand;
			}

			let response = await request(app)
				.post("/api/newsletter")
				.send({
					email: `asare4ster${ext}@gmail.com`,
				})
				.expect(201);
		});
	});
});
