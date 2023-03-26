const { startMongoose, mongoose } = require("../../mongoose");
const path = require("path");

const request = require("supertest");
const app = require("../../app");

describe("Testing Blogs API", () => {
	beforeAll(async () => {
		await startMongoose();
	});
	afterAll(async () => {
		await mongoose.connection.close();
	});
	describe("GET /Blogs", () => {
		it("Should have a success header when getting all blogs", async () => {
			let response = await request(app)
				.get("/blogs")
				.expect(200)
				.expect("Content-Type", /application\/json/);
		});
		it("Should have limit setup", async () => {
			let response = await request(app).get("/blogs?limit=2").expect(200);
			response = JSON.parse(response.text);
			expect(response.blogs.length).toBeLessThanOrEqual(2);
			expect(response.nextpage).toBeTruthy();
		});
		it("Skip set up", async () => {
			let total = await request(app).get("/blogs");
			total = JSON.parse(total.text);
			total = total.blogs.length;
			let response = await request(app).get("/blogs?skip=4").expect(200);
			// Total blogs is 11 at the moment hence this should work
			response = JSON.parse(response.text);
			expect(response.blogs.length).toBe(total - 4);
		});
	});

	describe("GET A Blog", () => {
		it("Should have a success header when getting a blog", async () => {
			let response = await request(app)
				.get("/blog/641e2e9ecff558d79d0b5ec8")
				.expect(200)
				.expect("Content-Type", /application\/json/);
		});
		it("Should have an error status if blog does not exist ", async () => {
			let response = await request(app)
				// Entered an invalid blog Id
				.get("/blog/641e2e9ecff558d79d0b5sd8")
				.expect(404)
				.expect("Content-Type", /application\/json/);

			response = JSON.parse(response.text);
			expect(response).toStrictEqual({ error: "No blog exists with the specified id" });
		});
	});

	describe("POST A Blog", () => {
		describe("Check for post credentials", () => {
			it("Should return an error for invalid credentials", async () => {
				let response = await request(app).post("/blogs").send({}).expect(400);
				response = JSON.parse(response.text);
				expect(response).toStrictEqual({ error: "Please provide data for all fields" });
			});
			it("Should return an error for no uploaded files(lead image)", async () => {
				let response = await request(app)
					.post("/blogs")
					.send({
						title: "This is a test title",
						summary: "This is a test summary",
						tag: "Recipes",
						content: "This is a test content ",
					})
					.expect(400);
				response = JSON.parse(response.text);
				expect(response).toStrictEqual({ error: "No file was uploaded" });
			});
			// Works but has been commented out to avoid too many creations
			it("should return success when all details are set", async () => {
				let response = await request(app)
					.post("/blogs")
					.field("title", "This is a test title")
					.field("summary", "This is a test summary")
					.field("tag", "Recipes")
					.field("content", "This is a test content ")
					.attach("image", path.join(__dirname, "../../../client/src/assets/blog2.png"))
					.expect(201);
				response = JSON.parse(response.text);
			});
		});
	});
	describe("UPDATE A Blog", () => {
		describe("Check for route", () => {
			it("Should return an error for route", async () => {
				let response = await request(app).put("/blogs/641e2e9ecff558d79d0b5ec8").send({}).expect(404);
			});
		});
		describe("Check for post credentials", () => {
			it("Should return an error for invalid blog credentials", async () => {
				let response = await request(app).put("/blog/641e2e9ecff558d79d0b5ec8").send({}).expect(400);
				response = JSON.parse(response.text);
				expect(response).toStrictEqual({ error: "Please provide data for all fields" });
			});
			it("Should return an error for no images", async () => {
				let response = await request(app)
					.post("/blogs")
					.send({
						title: "This is a test title",
						summary: "This is a test summary",
						tag: "Recipes",
						content: "This is a test content ",
					})
					.expect(400);
				response = JSON.parse(response.text);
				expect(response).toStrictEqual({ error: "No file was uploaded" });
			});
			it("Should return an error when blogId is an invalid Hex value", async () => {
				let response = await request(app)
					.put("/blog/641f68844a93e60d4aff4esd")
					.send({
						title: "This is a test title",
						summary: "This is a test summary",
						tag: "Recipes",
						imageUrl: "https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
						content: "This is a test content ",
					})
					.expect(404);

				response = JSON.parse(response.text);
				expect(response).toStrictEqual({ error: "No blog exists with the specified id" });
			});
			it("Should return a success when all data is valid", async () => {
				let response = await request(app)
					.put("/blog/641e2e9ecff558d79d0b5ec8")
					.send({
						title: "Elegant Dessert: 10 Tips How to Make It at Home. Blog 1",
						summary:
							"Enthusiastically mesh long-term high-impact infrastructures vis efficient customer service professionally fashion wireless rather than prospective experiences nergistically myocardinate clicks procedures whereas manufactured products.",
						tag: "Food",
						imageUrl:
							"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885__480.jpg&tbnid=9SPhZ2nyEGps3M&vet=12ahUKEwiL6KKS0Pn9AhUmpicCHfV7CIIQMygCegUIARDBAQ..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&docid=Ba_eiczVaD9-zM&w=771&h=480&q=image&ved=2ahUKEwiL6KKS0Pn9AhUmpicCHfV7CIIQMygCegUIARDBAQ",
						content:
							"<p>Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.</p><p>&nbsp;</p><h3>Perfect Food for all Hungry Livings</h3><p>Objectively integrate enterprise-wide strategic theme areas with functionalized infrastructures ipsum Interactively productized premium technologies where as interdependent quality vectors rapaciously utilize enterprise experiences via 24/7 markets.</p><ul><li>Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor&nbsp;</li><li>Adipiscing elit ut aliquam purus sit amet viverra suspendisse potent&nbsp;</li><li>Mauris commodo quis imperdiet massa tincidunt nunc pulvinar</li></ul><blockquote><p>The ultimate learn-how-to-cook book filled with 100+ amazing,<br>easy-to-follow recipes for every occasion plus helpful<br>kitchen tricks to inspire young cooks</p></blockquote><p>&nbsp;</p><h3>What burger recipes exist you can follow?</h3><p>At risus viverra adipiscing at tellus integer feugiat pretium fusce id velit ut tortor sagittis scelerisque purus semper eget lectus urna duis convallis porta nibh venenatis crase sed felis egets neque laoreet aliquam nunc lobortis mattis aliquam faucibus purus in.</p><p>&nbsp;</p><ol><li>Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor&nbsp;</li><li>Adipiscing elit ut aliquam purus sit amet viverra suspendisse potent</li><li>Mauris commodo quis imperdiet massa tincidunt nunc pulvinar&nbsp;</li></ol>",
					})
					.expect(201);
			});
		});
	});
	describe("DELETE A Blog", () => {
		describe("Check for delete credentials", () => {
			it("Should return an error when blogId is invalid Hex value", async () => {
				let response = await request(app).delete("/blog/641f68844a93e60d4aff4esd").expect(404);
				response = JSON.parse(response.text);
				expect(response).toStrictEqual({ error: "No blog exists with the specified id" });
			});
			it("Should return a success when all data is valid", async () => {
				let lastBlog = await request(app).get("/blogs?limit=1&order=desc");
				lastBlog = JSON.parse(lastBlog.text);
				lastBlog = lastBlog.blogs[0];
				// Delete the just created blog
				let response = await request(app).delete(`/blog/${lastBlog._id}`).expect(201);
			});
		});
	});
});
