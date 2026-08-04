/*
Prints a bcrypt hash for an admin password.

There is no signup route — the `users` collection holds a single admin document
whose `password` field is what `controllerLogInAdmin` compares against. Use this
to generate that value when seeding or resetting the admin by hand.

  npm run hash            (prompts, input hidden)
  npm run hash -- secret  (non-interactive; lands in shell history)
*/

const bcrypt = require("bcrypt");
const readline = require("readline");

// Matches the cost factor used in controllerUpdatePassword.
const SALT_ROUNDS = 10;

function promptHidden(question) {
	return new Promise((resolve) => {
		const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
		// Swallow the echoed characters so the password never renders.
		const onWrite = (chunk, encoding, callback) => {
			if (chunk.toString() !== question) process.stdout.write("*", encoding);
			callback && callback();
		};
		rl._writeToOutput = onWrite;
		rl.question(question, (answer) => {
			rl.close();
			process.stdout.write("\n");
			resolve(answer);
		});
	});
}

async function main() {
	const password = process.argv[2] || (await promptHidden("Admin password: "));

	if (!password) {
		console.error("No password given.");
		process.exit(1);
	}

	const hash = await bcrypt.hash(password, SALT_ROUNDS);

	console.log("\nHash:\n" + hash);
	console.log("\nSeed a fresh admin (mongosh):");
	console.log(`  db.users.insertOne({ password: ${JSON.stringify(hash)} })`);
	console.log("\nOr update the existing one:");
	console.log(`  db.users.updateOne({}, { $set: { password: ${JSON.stringify(hash)} } })`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
