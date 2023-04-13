const express = require("express");
const { controllerGetDishes, controllerGetADish, controllerDeleteADish, controllerSaveDish, controllerUpdateADish } = require("./Dishes.controller");
const admin = require("../../middlewares/admin.middleware");
const { uploadToCloudinary } = require("../../lib/multer");

const dishesRouter = express.Router();
dishesRouter.get("/dishes", controllerGetDishes);
dishesRouter.post("/dishes", admin, uploadToCloudinary.single("image"), controllerSaveDish);
dishesRouter.put("/dish/:dishId", admin, uploadToCloudinary.single("image"), controllerUpdateADish);
dishesRouter.get("/dish/:dishId", controllerGetADish);
dishesRouter.delete("/dish/:dishId", admin, controllerDeleteADish);
module.exports = dishesRouter;
