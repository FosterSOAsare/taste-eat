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
import dishPageStyles from "./pages/Dishes/Dish.styles";
import passwordProtectedPageStyles from "./pages/PasswordProtected/PasswordProtected.styles";
import snackbarStyles from "./components/Snackbar/Snackbar.styles";
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
	column__container: {
		...flex("center", "center", "column"),
	},
	icon: {
		marginRight: "20px",
	},
	input__field: {
		height: "50px",
		border: "1px solid #555555 ",
		...flex("flex-start", "center"),
		paddingInline: "10px",
	},
	desc: {
		display: "block",
		opacity: "0.7",
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
	divider: {
		border: "1px dashed #C4C4C4",
		height: "2px",
		marginBlock: "20px",
		position: "relative",
		width: "99%",
		marginInline: "auto",
		"&::before": {
			content: "''",
			position: "absolute",
			width: "5px",
			height: "5px",
			backgroundColor: "#c4c4c4",
			left: "-8px",
			top: "-2px",
			zIndex: 5,
			borderRadius: "50%",
		},
		"&::after": {
			content: "''",
			position: "absolute",
			width: "5px",
			height: "5px",
			backgroundColor: "#c4c4c4",
			right: "-8px",
			top: "-2px",
			zIndex: 5,
			borderRadius: "50%",
		},
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
	...snackbarStyles,
};

export default styles;
