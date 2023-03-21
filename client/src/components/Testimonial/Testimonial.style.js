import { flex } from "../../app.styles";
const testimonialStyles = {
	testimonial: {
		height: "100%",
		width: { md: "33%", xs: "75%", xxs: "100%" },
		padding: { xxs: "30px", sm: "10px", md: "30px" },
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
		height: { xxs: "100px", sm: "150px", md: "130px", lg: "100px" },
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
