import { flex } from "../../app.styles";
import titleStyles from "../../components/Title/Title.styles";
import testimonialStyles from "../../components/Testimonial/Testimonial.style";

const homepageStyles = {
	hero: {
		width: "100%",
		height: "350px",
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
		width: "55%",
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
		height: "auto",
		...flex("space-between", "flex-start"),
		gap: "30px",
	},
	homepage__dishes: {
		width: "60%",
		height: "auto",
	},
	testimonials: {
		width: "100%",
		color: "white !important",
		height: "auto",
		paddingBlock: "70px 40px",
	},
	testimonials__container: {
		width: "100%",
		height: "auto",
		gap: "30px",
		maxWidth: "calc(1124px + 7%)",
		marginLeft: "auto",
	},
	testimonials__slider: {
		width: "100%",
		height: "300px",
		marginTop: "20px",
	},
	testimonials__slider__content: {
		width: "100%",
		height: "80%",
		...flex("space-between", "center"),
		gap: "20px",
	},
	testimonials__slider__controls: {
		width: "100px",
		height: "30px",

		marginTop: "10px",
		marginInline: "auto",
		...flex("center", "center"),
		gap: "10px",
	},
	testimonials__slider__dot: {
		width: "10px",
		height: "10px",
		borderRadius: "50%",
	},
	offer__container: {
		...flex("center", "center", "column"),
	},
	offers__images__container: {
		...flex("space-between", "center"),
		gap: "20px",
		marginTop: "20px",
	},
	popular__dish: { width: "25%", height: "100%" },
	popular__dish__top: {
		...flex("space-between", "center"),
		paddingBlock: "5px",
		borderBottom: "1px solid #DCDCDC",
	},
	offer__box: {
		width: "170px",
		height: "150px",
		border: "10px solid white",
		...flex("center", "center", "column"),
	},

	...titleStyles,
	...testimonialStyles,
};
export default homepageStyles;
