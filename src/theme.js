import { createTheme } from "@mui/material/styles";
const theme = createTheme({
	palette: {
		primary: {
			main: "#292E36",
		},
		secondary: {
			main: "#E1B168",
		},
		desc: {
			main: "#555555",
		},
		background2: {
			main: "#FFF8F5",
		},
		background3: {
			main: "#343942",
		},
		white: {
			main: "#FFFFFF",
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1124,
			xl: 1536,
		},
	},
});

export default theme;
