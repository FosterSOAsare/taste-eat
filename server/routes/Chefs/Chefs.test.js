const { startMongoose, mongoose } = require("../../mongoose");
const path = require("path");

const request = require("supertest");
const app = require("../../app");

describe("Testing Chefs API", () => {
	beforeAll(async () => {
		await startMongoose();
	});
	afterAll(async () => {
		await mongoose.connection.close();
	});
	describe("GET /Chefs", () => {
		it("Should have a success header when getting all chefs", async () => {
			let response = await request(app)
				.get("/chefs")
				.expect(200)
				.expect("Content-Type", /application\/json/);
			response = JSON.parse(response.text);
			expect(response.nextpage).toBeFalsy();
		});
		describe("It should have limits setup", () => {
			it("Should return documents to be 2", async () => {
				let response = await request(app).get("/chefs?limit=2").expect(200);
				response = JSON.parse(response.text);
				expect(response.chefs.length).toBeLessThanOrEqual(2);
				// For when chefs are more than limits
				expect(response.nextpage).toBeTruthy();
			});
			it("Should return documents all documents", async () => {
				let response = await request(app).get("/chefs?limit=all").expect(200);
				response = JSON.parse(response.text);

				expect(response.nextpage).toBeFalsy();
			});
		});
	});

	describe("GET A Chef", () => {
		it("Should have a success header when getting a chef", async () => {
			let response = await request(app)
				.get("/chef/64146ea3a79a311b41c820ab")
				.expect(200)
				.expect("Content-Type", /application\/json/);
		});
		it("Should have an error status if chef does not exist ", async () => {
			let response = await request(app)
				// Entered an invalid blog Id
				.get("/chef/64146ea3a79a311b41c820ac")
				.expect(404)
				.expect("Content-Type", /application\/json/);

			response = JSON.parse(response.text);
			expect(response).toStrictEqual({ error: "No chef exists with the specified id" });
		});
	});

	describe("POST A Chef", () => {
		describe("Check for chef credentials", () => {
			it("Should return an error for invalid credentials", async () => {
				let response = await request(app).post("/chefs").send({}).expect(400);
				response = JSON.parse(response.text);
				expect(response).toStrictEqual({ error: "Please provide data for all fields" });
			});
			it("Should return an error for no uploaded files(lead image)", async () => {
				let response = await request(app)
					.post("/chefs")
					.send({
						name: "Asare Foster",
						position: "Senior chef",
						email: "evanmattew@mail.com",
						experience: "10",
						contact: "+1 (800)-234-5675",
						location: "Riverside 25, San Francisco, California",
						summary:
							"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divid with additional clickthroughs from Nanotechnology immersion along the information highway will close the loop on focusing solely the bottom line.",
					})
					.expect(400);
				response = JSON.parse(response.text);
				expect(response).toStrictEqual({ error: "No file was uploaded" });
			});
			// // Works but has been commented out to avoid too many creations
			it("should return success when all details are set", async () => {
				let response = await request(app)
					.post("/chefs")
					.field("name", "Asare Foster. TEst")
					.field("position", "Senior chef")
					.field("email", "evanmattew@mail.com")
					.field("experience", "10")
					.field("contact", "+1 (800)-234-5675")
					.field("location", "Riverside 25, San Francisco, California")
					.field(
						"summary",
						"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divid with additional clickthroughs from Nanotechnology immersion along the information highway will close the loop on focusing solely the bottom line."
					)
					.attach("image", path.join(__dirname, "../../../client/src/assets/blog2.png"))
					.expect(201);
			});
		});
	});
	describe("UPDATE A Chef", () => {
		describe("Check for route", () => {
			it("Should return an error for route", async () => {
				let response = await request(app).put("/chefs/641e2e9ecff558d79d0b5ec8").send({}).expect(404);
			});
		});
		describe("Check for chef credentials", () => {
			it("Should return an error for invalid blog credentials", async () => {
				let response = await request(app).put("/blog/641e2e9ecff558d79d0b5ec8").send({}).expect(400);
				response = JSON.parse(response.text);
				expect(response).toStrictEqual({ error: "Please provide data for all fields" });
			});
			it("Should return an error for no images", async () => {
				let response = await request(app)
					.post("/chefs")
					.send({
						name: "TEst Please",
						position: "Senior chef test",
						email: "tetstevanmattew@mail.com",
						experience: "10",
						contact: "+1 (800)-234-5675",
						location: "Riverside 25, San Francisco, California",
						summary:
							"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divid with additional clickthroughs from Nanotechnology immersion along the information highway will close the loop on focusing solely the bottom line.",
					})
					.expect(400);
				response = JSON.parse(response.text);
				expect(response).toStrictEqual({ error: "No file was uploaded" });
			});
			it("Should return an error when chefId is an invalid Hex value", async () => {
				let response = await request(app)
					.put("/chef/641f68844a93e60d4aff4etytr")
					.send({
						name: "TEst Please",
						position: "Senior chef test",
						email: "tetstevanmattew@mail.com",
						experience: "10",
						contact: "+1 (800)-234-5675",
						location: "Riverside 25, San Francisco, California",
						image: "http://localhost:8000/chefs/images/1679060643873Avroko.png",
						summary:
							"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divid with additional clickthroughs from Nanotechnology immersion along the information highway will close the loop on focusing solely the bottom line.",
					})
					.expect(404);

				response = JSON.parse(response.text);
				expect(response).toStrictEqual({ error: "No chef exists with the specified id" });
			});
			it("Should return a success when all data is valid", async () => {
				let lastChef = await request(app).get("/chefs?limit=1");
				lastChef = JSON.parse(lastChef.text);
				lastChef = lastChef.chefs[0];
				let response = await request(app)
					.put(`/chef/${lastChef._id}`)
					.send({
						name: "TEst Please",
						position: "Senior chef test",
						email: "tetstevanmattew@mail.com",
						experience: "10",
						contact: "+1 (800)-234-5675",
						location: "Riverside 25, San Francisco, California",
						image: "http://localhost:8000/chefs/images/1679060643873Avroko.png",
						summary:
							"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divid with additional clickthroughs from Nanotechnology immersion along the information highway will close the loop on focusing solely the bottom line.",
					})
					.expect(201);
			});
		});
	});

	describe("DELETE A Chef", () => {
		describe("Check for delete credentials", () => {
			it("Should return an error when chefId is invalid Hex value", async () => {
				let response = await request(app).delete("/chef/641f68844a93e60d4aff4esd").expect(404);
				response = JSON.parse(response.text);
				expect(response).toStrictEqual({ error: "No chef exists with the specified id" });
			});
			it("Should return a success when all data is valid", async () => {
				let lastChef = await request(app).get("/chefs?limit=1");
				lastChef = JSON.parse(lastChef.text);
				lastChef = lastChef.chefs[0];
				// Delete the just created blog
				let response = await request(app).delete(`/chef/${lastChef._id}`).expect(201);
			});
		});
	});
});
