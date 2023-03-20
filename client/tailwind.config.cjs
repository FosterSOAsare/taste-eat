module.exports = {
	content: ["./src/components/**/*.jsx", "./src/components/*.jsx", "./src/pages/**/*.jsx"],
	theme: {
		extend: {
			colors: {
				primary: "#292E36",
				secondary: "#E1B168",
				desc: "#555555",
				background2: "#FFF8F5",
				background3: "#343942",
				white: "#FFFFFF",
			},
			screens: {
				xxs: "0px",
				xs: "550px", // Add a new breakpoint
				sm: "700px",
				md: "900px",
				lg: "1124px",
				xl: "1536px",
			},
		},
	},
	plugins: [],
};
