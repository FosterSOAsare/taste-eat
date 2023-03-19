const express = require("express");
const { controllerValidateAdmin } = require("./Users.controller");

const usersRouter = express.Router();
usersRouter.get("/users", controllerValidateAdmin);

module.exports = usersRouter;
