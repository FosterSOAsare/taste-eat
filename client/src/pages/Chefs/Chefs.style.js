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
	chefs__teams__container: {
		height: "auto",
		display: "grid",
		gridTemplateColumns: "1fr 1fr 1fr",
		gap: "10px",
		marginTop: "20px",
	},
};
export default chefpageStyles;
