import { flex } from "../../app.styles";
const footerStyles = {
	footer: {
		width: "100%",
		paddingBlock: "70px 30px",
		height: "auto",
		backgroundColor: "red",
	},
	footer__socials: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "30px" },
	footer__newsletter: {
		width: "100%",
		fontSize: "12px",
		textAlign: "center",
		marginInline: "auto",
		...flex("center", "center", "column"),
	},
};

export default footerStyles;
