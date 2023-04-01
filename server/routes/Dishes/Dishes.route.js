const express = require("express");
const { controllerGetDishes, controllerGetADish, controllerDeleteADish, controllerSaveDish, controllerUpdateADish } = require("./Dishes.controller");
const admin = require("../../middlewares/admin.middleware");
const createUpload = require("../../multer");
const dishesUpload = createUpload("dishes");

const dishesRouter = express.Router();
dishesRouter.get("/dishes", controllerGetDishes);
dishesRouter.post("/dishes", admin, dishesUpload.array("image"), controllerSaveDish);
dishesRouter.put("/dish/:dishId", admin, dishesUpload.array("image"), controllerUpdateADish);
dishesRouter.get("/dish/:dishId", controllerGetADish);
dishesRouter.delete("/dish/:dishId", admin, controllerDeleteADish);
module.exports = dishesRouter;
