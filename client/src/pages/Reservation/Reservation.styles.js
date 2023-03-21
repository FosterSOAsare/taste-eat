import { flex } from "../../app.styles";

const reservationPageStyles = {
	choose__us__reason: {
		width: "calc(100% - 20px )",
		height: "50px",
		border: "1px solid #555555 ",
		...flex("flex-start", "center"),
		paddingInline: "10px",
	},
	reservation__page__container: {
		width: { md: "80%", xxs: "100%" },
		height: "auto",
		...flex("center", "flex-start"),
		gap: "40px",
		position: "relative",
		flexDirection: { xxs: "column", md: "row" },
	},
};
export default reservationPageStyles;
