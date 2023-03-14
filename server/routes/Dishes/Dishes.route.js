const express = require("express");
const { controllerGetDishes, controllerGetADish, controllerDeleteADish, controllerSaveDish } = require("./Dishes.controller");

const dishesRouter = express.Router();
dishesRouter.get("/dishes", controllerGetDishes);
dishesRouter.post("/dishes", controllerSaveDish);
dishesRouter.get("/dish/:dishId", controllerGetADish);
dishesRouter.delete("/dish/:dishId", controllerGetADish);

module.exports = dishesRouter;
