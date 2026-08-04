import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		// MUI v5 icons resolve to a CJS build at their deep paths, and Vite 8's
		// Rolldown pre-bundler hands back the whole `exports` object instead of
		// `exports.default` — so every icon renders as an object, not a component.
		// Point the deep imports at the package's ESM build to skip CJS interop.
		alias: [
			{
				find: /^@mui\/icons-material\/(?!esm\/)(.+)$/,
				replacement: "@mui/icons-material/esm/$1",
			},
		],
	},
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
