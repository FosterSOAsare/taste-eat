import { flex } from "../../app.styles";
const SkillIcon = {
	icon__container: {
		gap: "10px",
		width: "389px",
		...flex("flex-start", "flex-start"),
	},
	icon__style: {
		fontSize: "25px",
	},
	icon__wrapper: {
		width: "40px",
		height: "40px",
		...flex("center", "center"),
		borderRadius: "50%",
	},
	icon__name: {
		fontFamily: "'Cormorant Infant', serif !important",
		fontWeight: "bold",
		fontSize: "22px",
		height: "auto",
		lineHeight: "23px",
	},
	icon__details: {
		fontFamily: "Josefin Sans",
		fontStyle: "normal",
		fontWeight: 400,
		fontSize: "18px",
		lineHeight: "126.5%",
	},
};
export default SkillIcon;
