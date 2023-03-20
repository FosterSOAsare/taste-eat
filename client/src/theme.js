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
		footerBg: {
			main: "#1F242C",
		},
		error: {
			main: "#FF0000",
		},
		stroke: {
			main: "#E1B168",
		},
		protectedBg: {
			main: "#FFF8F5",
		},
	},
	breakpoints: {
		values: {
			xxs: 0,
			xs: 550,
			sm: 700,
			md: 900,
			lg: 1124,
			xl: 1536,
		},
	},
});

export default theme;
