import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	// build: {
	// 	outDir: "../server/public",
	// 	emptyOutDir: true,
	// },
	define: {
		"process.env": process.env,
	},
	server: {
		host: "127.0.0.1",
		//  host: true
	},
});
