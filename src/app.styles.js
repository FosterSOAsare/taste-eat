import headerStyles from "./components/Header/Header.styles";
import footerStyles from "./components/Footer/Footer.styles";
import homepageStyles from "./pages/Homepage/Homepage.styles";
import blogStyles from "./pages/Blog/Blog.style";

export function flex(justify, align, direction = "row") {
	return {
		display: "flex",
		justifyContent: justify,
		alignItems: align,
		flexDirection: direction,
	};
}
const styles = {
	container: {
		height: "auto",
		paddingBlock: "30px",
	},
	button: {
		textTransform: "none",
		borderRadius: "0px",
	},
	icon: {
		marginRight: "20px",
	},
	desc: {
		display: "block",
	},
	title: {
		fontFamily: "'Cormorant Infant', serif !important",
		fontWeight: "bold",
		display: "block",
	},
	...headerStyles,
	...homepageStyles,
	...blogStyles,
	...footerStyles,
};

export default styles;
