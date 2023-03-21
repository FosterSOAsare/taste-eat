import headerStyles from "./components/Header/Header.styles";
import footerStyles from "./components/Footer/Footer.styles";
import homepageStyles from "./pages/Homepage/Homepage.styles";
import blogStyles from "./pages/Blogs/Blogs.style";
import reservationStyle from "./components/Reservation/Reservation.style";
import aboutPageStyles from "./pages/About/About.style";
import chefpageStyles from "./pages/Chefs/Chefs.style";
import menuPageStyles from "./pages/Menu/Menu.styles";
import SkillIconStyles from "./components/SkillIcon/SkillIcon.style";
import galleriesPageStyles from "./pages/Gallery/Galleries.styles";
import reservationPageStyles from "./pages/Reservation/Reservation.styles";
import loadingStyles from "./components/Loading/Loading.styles";
import dishPageStyles from "./pages/Dish/Dish.styles";
import passwordProtectedPageStyles from "./pages/PasswordProtected/PasswordProtected.styles";
export function flex(justify, align, direction = "row") {
	return {
		display: "flex",
		justifyContent: justify,
		alignItems: align,
		flexDirection: direction ,
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
	container: {
		height: "auto",
		...flex("center", "center", "column"),
	},
	popper__container: {
		// width: "90%",
		height: "auto",
		// // position: "absolute",
		// // top: "0",
		// // left: "0",
		backgroundColor: "white",
		padding: "20px",
	},

	...headerStyles,
	...reservationStyle,
	...homepageStyles,
	...blogStyles,
	...footerStyles,
	...aboutPageStyles,
	...chefpageStyles,
	...menuPageStyles,
	...SkillIconStyles,
	...galleriesPageStyles,
	...reservationPageStyles,
	...loadingStyles,
	...dishPageStyles,
	...passwordProtectedPageStyles,
};

export default styles;
