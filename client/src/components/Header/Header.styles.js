import { flex } from "../../app.styles";
const headerStyles = {
	header: {
		height: "auto",
		width: "100%",
	},
	logo__section: {
		width: "100%",
		height: "auto",
		...flex("space-between", "center"),
		justifyContent: { xxs: "space-between", xs: "center", md: "space-between" },
		marginBlock: "20px",
	},
	menu: {
		width: "100%",
		height: "50px",
		marginTop: "30px",
		borderBlock: "1px solid #5C6168",
	},
	menu__container: {
		...flex("space-between", "center"),
		height: "100%",
	},
	menu__icon: {
		marginRight: "5px",
		"&:hover": {
			cursor: "pointer",
			color: "#E1B168 !important",
		},
	},
	page__desc: {
		width: "100%",
		height: { xxs: "90px", xs: "120px", sm: "150px" },
		...flex("center", "center"),
	},
	desc__container: {
		width: "auto",
		height: "40px",
		borderBlock: "1px solid transparent",
		paddingInline: "5px",
		...flex("center", "center"),
	},
	desc__text: {
		...flex("center", "center"),
		height: "100%",
		width: "100%",
		margin: 0,
		padding: 0,
		fontSize: "24px",
		fontFamily: "'Cormorant Infant', serif !important",
		fontWeight: "bold",
	},
	phone__menu: {
		width: "100%",
		height: "100vh",
		position: "fixed",
		top: 0,
		left: "-100%",
		zIndex: 2,
		transition: "all 0.5s ease-in-out",
	},
};

export default headerStyles;
