const express = require("express");
const { controllerGetChefs, controllerGetAChef, controllerDeleteAChef, controllerSaveChef, controllerUpdateAChef } = require("./Chefs.controller");
const { uploadToCloudinary } = require("../../lib/multer");
const admin = require("../../middlewares/admin.middleware");

const chefsRouter = express.Router();
chefsRouter.get("/chefs", controllerGetChefs);
chefsRouter.post("/chefs", admin, uploadToCloudinary.single("image"), controllerSaveChef);
chefsRouter.get("/chef/:chefId", controllerGetAChef);
chefsRouter.put("/chef/:chefId", admin, uploadToCloudinary.single("image"), controllerUpdateAChef);
chefsRouter.delete("/chef/:chefId", admin, controllerDeleteAChef);

module.exports = chefsRouter;
