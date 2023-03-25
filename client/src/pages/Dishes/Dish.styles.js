import { flex } from "../../app.styles";
const dishPageStyles = {
	new__dish: {
		width: "100%",
		height: "auto",
		marginBlock: "100px",
	},
	new__dish__container: {
		height: "auto",
		"& .MuiInputBase-root": { margin: "0px" },
	},
	new__dish__text__field: {
		width: "100%",
		marginBottom: "20px",
	},
	dish__desc__container: {
		width: "100%",
		marginTop: "20px",
		height: "auto",
		"& .MuiInputBase-root": {
			width: "100%",
			margin: "0",
			height: "auto",
			minHeight: { xxs: "200px", sm: "100px" },
			alignItems: "flex-start",
			"&:focus": {
				color: "red",
				outline: "none",
			},
		},
	},
	single__dish__detail: {
		...flex("flex-start", "flex-start"),
		flexDirection: { xxs: "column", sm: "row" },
		height: { sm: "470px" },
		width: "100%",
		gap: "20px",
	},
};

export default dishPageStyles;
