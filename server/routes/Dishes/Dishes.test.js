const { startMongoose, mongoose } = require("../../mongoose");
const path = require("path");

const request = require("supertest");
const app = require("../../app");

describe("Testing Dishes API", () => {
	beforeAll(async () => {
		await startMongoose();
	});
	afterAll(async () => {
		await mongoose.connection.close();
	});
	describe("GET Dishes", () => {
		it("Should have a success header when getting all dishes", async () => {
			let response = await request(app)
				.get("/api/dishes")
				.expect(200)
				.expect("Content-Type", /application\/json/);
			response = JSON.parse(response.text);
			expect(response.type).toBeUndefined();
		});
		it("Should have type of dessert", async () => {
			let response = await request(app)
				.get("/api/dishes?type=dessert")
				.expect(200)
				.expect("Content-Type", /application\/json/);
			response = JSON.parse(response.text);
			expect(response.type).toBe("dessert");
		});
		it("Should have limit setup", async () => {
			let response = await request(app).get("/api/dishes?limit=2").expect(200);
			response = JSON.parse(response.text);
			expect(response.dishes.length).toBeLessThanOrEqual(2);
			expect(response.nextpage).toBeTruthy();
		});
		it("Skip set up", async () => {
			let total = await request(app).get("/api/dishes");
			total = JSON.parse(total.text);
			total = total.dishes.length;
			let response = await request(app).get("/api/dishes?skip=4").expect(200);
			response = JSON.parse(response.text);
			expect(response.dishes.length).toBe(total - 4);
		});
	});

	describe("GET A Dish", () => {
		it("Should have a success header when getting a dish", async () => {
			let response = await request(app)
				.get("/api/dish/641653ee2b704b165f326398")
				.expect(200)
				.expect("Content-Type", /application\/json/);
		});
		it("Should have an error status if dish does not exist ", async () => {
			let response = await request(app)
				// Entered an invalid blog Id
				.get("/api/dish/641653b32b7045165f326392")
				.expect(404)
				.expect("Content-Type", /application\/json/);

			response = JSON.parse(response.text);
			expect(response).toStrictEqual({ error: "No dish exists with the specified id" });
		});
	});

	describe("POST A Dish", () => {
		describe("Check for post credentials", () => {
			it("Should return an error for invalid credentials", async () => {
				let response = await request(app).post("/api/dishes").send({}).expect(400);
				response = JSON.parse(response.text);
				expect(response).toStrictEqual({ error: "Please provide data for all fields" });
			});
			it("Should return an error for no uploaded files(lead image)", async () => {
				let response = await request(app)
					.post("/api/dishes")
					.send({
						name: "This is a test title",
						summary: "This is a test summary",
						type: "Dessert",
						price: 20,
					})
					.expect(400);
				response = JSON.parse(response.text);
				expect(response).toStrictEqual({ error: "No file was uploaded" });
			});
			// Works but has been commented out to avoid too many creations
			it("should return success when all details are set", async () => {
				let response = await request(app)
					.post("/api/dishes")
					.field("name", "This is a test name")
					.field("summary", "This is a test summary")
					.field("type", "Dessert")
					.field("price", "20")
					.attach("image", path.join(__dirname, "../../../client/src/assets/blog2.png"))
					.expect(201);
				response = JSON.parse(response.text);
			});
		});
	});
	describe("UPDATE A Dish", () => {
		describe("Check for route", () => {
			it("Should return an error for route", async () => {
				let response = await request(app).put("/api/dishes/641e2e9ecff558d79d0b5ec8").send({}).expect(404);
			});
		});
		describe("Check for post credentials", () => {
			it("Should return an error for invalid dish credentials", async () => {
				let response = await request(app).put("/api/dish/641e2e9ecff558d79d0b5ec8").send({}).expect(400);
				response = JSON.parse(response.text);
				expect(response).toStrictEqual({ error: "Please provide data for all fields" });
			});
			it("Should return an error for no images", async () => {
				let response = await request(app)
					.post("/api/dishes")
					.send({
						name: "This is a test title",
						summary: "This is a test summary",
						type: "Dessert",
						price: 20,
					})
					.expect(400);
				response = JSON.parse(response.text);
				expect(response).toStrictEqual({ error: "No file was uploaded" });
			});
			it("Should return an error when dishId is invalid", async () => {
				let response = await request(app)
					.put("/api/dish/641f68844a93e60d4aff4esd")
					.send({
						name: "This is a test title",
						summary: "This is a test summary",
						type: "Dessert",
						price: 20,
						imageUrl: "https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
					})
					.expect(404);
				response = JSON.parse(response.text);
				expect(response).toStrictEqual({ error: "No dish exists with the specified id" });
			});
			it("Should return a success when all data is valid", async () => {
				let lastDish = await request(app).get("/api/dishes?limit=1");
				lastDish = JSON.parse(lastDish.text);

				lastDish = lastDish.dishes[0];
				let response = await request(app)
					.put(`/api/dish/${lastDish._id}`)
					.send({
						name: "This is a test title update",
						summary: "This is a test summary",
						type: "Dessert",
						price: 20,
						imageUrl: "https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
					})
					.expect(201);
			});
		});
	});
	describe("DELETE A Dish", () => {
		describe("Check for delete credentials", () => {
			it("Should return an error when dishId is invalid Hex value", async () => {
				let response = await request(app).delete("/api/dish/641f68844a93e60d4aff4esd").expect(404);
				response = JSON.parse(response.text);
				expect(response).toStrictEqual({ error: "No dish exists with the specified id" });
			});
			it("Should return a success when all data is valid", async () => {
				let lastDish = await request(app).get("/api/dishes?limit=1");
				lastDish = JSON.parse(lastDish.text);

				lastDish = lastDish.dishes[0];
				// Delete the just created blog
				let response = await request(app).delete(`/api/dish/${lastDish._id}`).expect(201);
			});
		});
	});
});
