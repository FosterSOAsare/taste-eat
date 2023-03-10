import { flex } from "../../app.styles";

const chefPageStyles = {
	chef__promo: {
		width: "100%",
		height: "450px",
		position: "relative",
		paddingTop: "40px",
	},
	chef__promo__container: {
		...flex("flex-start", "center", "column"),
		height: "100%",
	},
	chef__info__container: {
		width: "80%",
		height: "auto",
		...flex("center", "flex-start"),
		gap: "40px",
	},

	chef__promo__image__container: { width: "80%", height: "400px", marginTop: "30px", zIndex: "4", position: "absolute", bottom: "-100px" },
};
export default chefPageStyles;
