const request = require("supertest");
const app = require("./app");

const agent = request.agent(app);
let auth = process.env.JWT_TOKEN;

agent.set("Authorization", auth);

module.exports = agent;
