const express = require("express");
const { controllerValidateAdmin, controllerRequestPasswordReset, controllerValidatePassword, controllerUpdatePassword } = require("./Users.controller");

const usersRouter = express.Router();
usersRouter.get("/users", controllerValidateAdmin);
usersRouter.route("/users/reset").get(controllerRequestPasswordReset).post(controllerValidatePassword).put(controllerUpdatePassword);

module.exports = usersRouter;
