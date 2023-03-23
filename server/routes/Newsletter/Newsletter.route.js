const { controllerInsertSubscription, controllerGetSubscriptions } = require("./Newsletter.controller");
const express = require("express");

const newsletterRouter = express.Router();

newsletterRouter.post("/newsletter", controllerInsertSubscription);
newsletterRouter.get("/newsletter", controllerGetSubscriptions);

module.exports = newsletterRouter;
