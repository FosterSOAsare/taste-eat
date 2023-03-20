import { flex } from "../../app.styles";
const footerStyles = {
	footer: {
		width: "100%",
		paddingBlock: { xxs: "30px", md: "70px 30px" },
		height: "auto",
	},
	footer__socials: {
		display: "flex",
		alignItems: "center",
		marginBottom: "30px",
		justifyContent: { xxs: "flex-end", md: "center" },
		width: "auto",
	},
	footer__newsletter: {
		width: "100%",
		fontSize: "12px",
		textAlign: "center",
		marginInline: "auto",
		...flex("center", "center", "column"),
		backgroudColor: "red !important",
		gridColumn: "1 / 4",
		gridRowStart: "2",
		gridRowEnd: "3",
	},
};

export default footerStyles;
