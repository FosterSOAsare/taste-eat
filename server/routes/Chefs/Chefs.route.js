const express = require("express");
const { controllerGetChefs, controllerGetAChef, controllerDeleteAChef, controllerSaveChef, controllerUpdateAChef } = require("./Chefs.controller");
const { createUpload, createCloudinaryUpload } = require("../../lib/multer");
const admin = require("../../middlewares/admin.middleware");

const chefUpload = createUpload("chefs");

const chefsRouter = express.Router();
chefsRouter.get("/chefs", controllerGetChefs);
chefsRouter.post("/chefs", admin, chefUpload.array("image"), controllerSaveChef);
chefsRouter.get("/chef/:chefId", controllerGetAChef);
chefsRouter.put("/chef/:chefId", admin, chefUpload.array("image"), controllerUpdateAChef);
chefsRouter.delete("/chef/:chefId", admin, controllerDeleteAChef);

module.exports = chefsRouter;
