const http = require("http");
const app = require("./app");

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

const { startMongoose } = require("./lib/mongoose");

async function startServer() {
	await startMongoose();
	server.listen(PORT, () => {
		console.log(`Listening on PORT ${PORT}...`);
	});
}

startServer();
