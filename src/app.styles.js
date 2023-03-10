import headerStyles from "./components/Header/Header.styles";
import footerStyles from "./components/Footer/Footer.styles";
import homepageStyles from "./pages/Homepage/Homepage.styles";
import blogStyles from "./pages/Blog/Blog.style";
import reservationStyle from "./components/Reservation/Reservation.style";
import aboutPageStyles from "./pages/About/About.style";
import chefpageStyles from "./pages/Chefs/Chefs.style";
import menuPageStyles from "./pages/Menu/Menu.styles";
import chefPageStyles from "./pages/Chef/Chef.style";
import SkillIconStyles from "./components/SkillIcon/SkillIcon.style";
import galleriesPageStyles from "./pages/Gallery/Galleries.styles";
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
	container: {
		height: "auto",
		...flex("center", "center", "column"),
	},

	...headerStyles,
	...reservationStyle,
	...homepageStyles,
	...blogStyles,
	...footerStyles,
	...aboutPageStyles,
	...chefpageStyles,
	...menuPageStyles,
	...chefPageStyles,
	...SkillIconStyles,
	...galleriesPageStyles,

};

export default styles;
