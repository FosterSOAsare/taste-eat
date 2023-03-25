import { flex } from "../../app.styles";
const menuPageStyles = {
	dishes__container: {
		height: "auto",
		minHeight: { sm: "250px" },
		...flex("flex-start", "flex-start"),
		gap: "40px",
		flexDirection: { xxs: "column", sm: "row" },
	},
};

export default menuPageStyles;
