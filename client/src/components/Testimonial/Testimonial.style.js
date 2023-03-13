import { flex } from "../../app.styles";
const testimonialStyles = {
	testimonial: {
		height: "100%",
		width: "33%",
		padding: "30px",
	},
	testimonial__top: {
		width: "100%",
		height: "auto",
		...flex("flex-start", "center"),
		paddingBottom: "15px",
		borderBottom: "1px solid #797E89",
	},
	testimonial__comment: {
		fontFamily: "'Cormorant Infant', serif !important",
		fontSize: "16px",
		marginTop: "10px",
		lineHeight: "30px",
	},
	testimonial_slider_dots: {
		position: "absolute",
		width: "20px",
		height: "20px",
		left: "935px",
		top: "605px",
	},
};

export default testimonialStyles;
