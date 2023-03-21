import { flex } from "../../app.styles";
const chefpageStyles = {
	chefspage__section: {
		width: "100%",
		height: "auto",
		marginBlock: "70px",
	},
	chefpage__container: {
		height: "100%",
		...flex("center", "center", "column"),
	},
	best__chefs__container: {
		height: "100%",
		width: "100%",
		...flex("space-between", "center"),
		justifyContent: { xxs: "flex-start", sm: "space-between" },
		flexDirection: { xxs: "column", sm: "row" },
	},
	chefs__teams__container: {
		height: "auto",
		display: "grid",
		gridTemplateColumns: { xxs: "1fr 1fr", xs: "1fr 1fr 1fr" },
		gap: "10px",
		marginTop: "20px",
	},
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
		position: "relative",
	},

	chef__promo__image__container: {
		width: "80%",
		height: "400px",
		marginTop: "30px",
		zIndex: "4",
		position: "absolute",
		bottom: "-100px",
	},

	chef__textarea__container: {
		...flex("space-between", "center"),
		gap: "20px",
		marginBottom: "20px",
	},
};
export default chefpageStyles;
