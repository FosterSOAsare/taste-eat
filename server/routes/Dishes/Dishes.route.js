const express = require("express");
const { controllerGetDishes, controllerGetADish, controllerDeleteADish, controllerSaveDish, controllerUpdateADish } = require("./Dishes.controller");

const createUpload = require("../../multer");
const dishesUpload = createUpload("dishes");

const dishesRouter = express.Router();
dishesRouter.get("/dishes", controllerGetDishes);
dishesRouter.post("/dishes", dishesUpload.array("image"), controllerSaveDish);
dishesRouter.put("/dish/:dishId", dishesUpload.array("image"), controllerUpdateADish);
dishesRouter.get("/dish/:dishId", controllerGetADish);
dishesRouter.delete("/dish/:dishId", controllerDeleteADish);
module.exports = dishesRouter;
