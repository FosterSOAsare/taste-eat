const express = require("express");
const { controllerGetChefs, controllerGetAChef, controllerDeleteAChef, controllerSaveChef } = require("./Chefs.controller");

const chefsRouter = express.Router();
chefsRouter.get("/chefs", controllerGetChefs);
chefsRouter.post("/chefs", controllerSaveChef);
chefsRouter.get("/chef/:chefId", controllerGetAChef);
chefsRouter.delete("/chef/:chefId", controllerGetAChef);

module.exports = chefsRouter;
