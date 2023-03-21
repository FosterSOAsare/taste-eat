import { flex } from "../../app.styles";

const reservationPageStyles = {
	choose__us__reason: {
		width: "calc(100% - 10px )",
		height: "50px",
		border: "1px solid #555555 ",
		...flex("flex-start", "center"),
		paddingInline: "10px",
	},
	reservation__page__container: {
		width: { sm: "80%", xxs: "100%" },
		height: "auto",
		...flex("center", "flex-start"),
		gap: "40px",
		position: "relative",
		flexDirection: { xxs: "column", sm: "row" },
	},
};
export default reservationPageStyles;
