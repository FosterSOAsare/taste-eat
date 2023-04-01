const express = require("express");
const admin = require("../../middlewares/admin.middleware");
const { controllerValidateAdmin, controllerRequestPasswordReset, controllerLogInAdmin, controllerValidatePassword, controllerUpdatePassword } = require("./Users.controller");

const usersRouter = express.Router();
usersRouter.route("/users").get(admin, controllerValidateAdmin).post(controllerLogInAdmin);
usersRouter.route("/users/reset").get(controllerRequestPasswordReset).post(controllerValidatePassword).put(controllerUpdatePassword);

module.exports = usersRouter;
