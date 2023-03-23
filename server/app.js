const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const dishesRouter = require("./routes/Dishes/Dishes.route");
const blogsRouter = require("./routes/Blogs/Blogs.route");
const chefsRouter = require("./routes/Chefs/Chefs.route");
const usersRouter = require("./routes/Users/Users.route");
const newsletterRouter = require("./routes/Newsletter/Newsletter.route");

const app = express();

app.use(morgan("combined"));
app.use(
	cors({
		origin: "*",
	})
);

app.use(express.json());
app.use(dishesRouter);
app.use(blogsRouter);
app.use(chefsRouter);
app.use(usersRouter);
app.use(newsletterRouter);

// For  images

app.use("/photos", express.static("uploads"));

module.exports = app;
