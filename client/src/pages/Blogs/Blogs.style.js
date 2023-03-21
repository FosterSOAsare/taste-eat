import { flex } from "../../app.styles";
const blogStyles = {
	blog: {
		width: "100%",
		marginBlock: { xxs: "30px", sm: "100px" },
		height: "auto",
	},
	blogs__container: {
		...flex("center", "center", "column"),
	},
	blogpage__reservation: {
		width: "100%",
		height: "400px",
		...flex("center", "center", "column"),
	},
	blogpage__reservation__container: {
		height: "80%",
		...flex("center", "center", "column"),
		border: "1px solid transparent",
	},
	blogpage__stories: {
		width: "100%",
		height: "100%",
		...flex("center", "center", "column"),
		marginBlock: "70px",
	},
	new__blog: {
		width: "100%",
		height: "auto",
		marginBlock: "100px",
	},
	new__blog__container: {
		height: "auto",
		"& .MuiInputBase-root": { margin: "0px" },
	},
	new__blog__text__field: {
		width: "100%",
		marginBottom: "20px",
	},
	blog__summary__container: {
		width: "100%",
		marginTop: "20px",
		height: "auto",
		"& .MuiInputBase-root": {
			width: "100%",
			margin: "0",
			height: "auto",
			minHeight: "100px",
			alignItems: "flex-start",
			"&:focus": {
				color: "red",
				outline: "none",
			},
		},
	},
};
export default blogStyles;
