import { flex } from "../../app.styles";
const blogStyles = {
	blog: {
		width: "100%",
		marginBlock: "100px",
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
	
};
export default blogStyles;
