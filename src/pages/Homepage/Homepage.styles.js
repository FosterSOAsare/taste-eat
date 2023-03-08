import { flex } from "../../app.styles";

const homepageStyles = {
	hero: {
		width: "100%",
		height: "350px",
		backgroundColor: "red",
	},
	hero__container: {
		height: "100%",
		width: "100%",
		...flex("space-between", "center"),
	},
	hero__title: {
		fontFamily: "'Cormorant Infant', serif !important",
		fontSize: "56px",
		lineHeight: "50px",
		marginBottom: "20px",
	},
	hero__desc: {
		fontSize: "24px",
		lineHeight: "28px",
	},
	homepage__about: {
		width: "100%",
		height: "auto",
	},
	homepage__about__container: {
		height: "100%",
		paddingBlock: "70px",
	},
	homepage__about__contacts: {
		width: "100%",
		height: "70px",
		...flex("space-between", "center"),
	},
	homepage__about__contact: {
		...flex("space-between", "center"),
		gap: "10px",
	},
	homepage__contact__icon: { width: "30px", height: "30px", borderRadius: "50%", ...flex("center", "center") },
	homepage__contact__title: {
		fontSize: "18px",
		fontFamily: "'Cormorant Infant', serif !important",
		fontWeight: "bold",
	},
	homepage__contact__desc: {
		fontSize: "13px",
		fontFamily: "'Cormorant Infant', serif !important",
		marginTop: "-3px",
		display: "block",
	},
	homepage__story: {
		width: "100%",
		height: "auto",
		marginTop: "40px",
		...flex("space-between", "center"),
	},
	homepage__story__text: {
		width: "calc(50% - 3px)",
		height: "auto",
	},
	homepage__story__title: {
		fontSize: "18px",
		fontWeight: "bold",
		fontFamily: "'Cormorant Infant', serif !important",
	},
	homepage__story__desc: {
		fontSize: "14px",
		fontWeight: "normal",
		fontFamily: "'Cormorant Infant', serif !important",
	},
	homepage__menu: {
		width: "100%",
		height: "auto",
		paddingBlock: "50px",
	},
	homepage__menu__container: {
		height: "900px",
		...flex("space-between", "flex-start"),
		gap: "30px",
	},
	homepage__dishes: {
		width: "60%",
		height: "auto",
	},
};
export default homepageStyles;
