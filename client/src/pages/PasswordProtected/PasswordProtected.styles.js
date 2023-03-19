import { flex } from "../../app.styles";
const passwordProtectedPageStyles = {
	padlock__container: {
		...flex("center", "center"),
		width: "80px",
		height: "80px",
		borderRadius: "50%",
		marginBottom: "20px",
	},
	passwordpage__container: {
		...flex("center", "center", "column"),
		padding: "70px 40px",
		borderRadius: "5px",
	},
};
export default passwordProtectedPageStyles;
