import { flex } from "../../app.styles";
import titleStyles from "../../components/Title/Title.styles";
import testimonialStyles from "../../components/Testimonial/Testimonial.style";

const homepageStyles = {
	hero: {
		width: "100%",
		height: { xxs: "auto", sm: "350px" },
	},
	hero__container: {
		height: "100%",
		width: "100%",
		...flex("space-between", "center"),
		justifyContent: { xxs: "center", sm: "space-between" },
		flexDirection: { xxs: "column", sm: "row" },
		paddingBlock: { xxs: "30px", sm: 0 },
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
		height: { sm: "70px" },
		...flex("space-between", "center"),
		flexDirection: { xxs: "column", sm: "row" },
		gap: { xxs: "20px", sm: 0 },
	},
	homepage__about__contact: {
		...flex("flex-start", "center"),
		flexDirection: "row",
		gap: "10px",
		width: "100%",
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
		flexDirection: { xxs: "column", xs: "row" },
		gap: "20px",
	},
	homepage__story__text: {
		width: { sm: "55%" },
		height: "auto",
		position: "relative",
	},
	homepage__story__title: {
		fontSize: "18px",
		fontWeight: "bold",
		fontFamily: "'Cormorant Infant', serif !important",
	},
	homepage__story__desc: {
		fontSize: "14px",
		fontWeight: "normal",
		opacity: "0.7",
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
		flexDirection: { xxs: "column", sm: "row" },
	},
	homepage__dishes: {
		width: { xxs: "100%", md: "65%" },
		height: "auto",
	},
	testimonials: {
		width: "100%",
		color: "white !important",
		height: "auto",
		paddingBlock: "70px 40px",
		paddingInline: { xxs: "20px", lg: 0 },
	},
	testimonials__container: {
		width: "100%",
		height: "auto",
		maxWidth: "calc(((100% - 1124px ) / 2) + 1124px)",
		marginLeft: "auto",
		...flex("center", "center", "column"),
		alignItems: { xxs: "center", sm: "flex-start" },
	},
	testimonials__slider: {
		width: "100%",
		height: "auto",
		marginTop: "20px",
	},
	testimonials__slider__content: {
		width: "100%",
		height: "80%",
		...flex("space-between", "center"),
		flexDirection: { xxs: "column", sm: "row" },
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
		flexDirection: { xxs: "column", sm: "row" },
		width: "100%",
	},
	popular__dish: {
		width: { xxs: "100%", sm: "25%" },
		height: "100%",
		border: { xxs: "1px solid #C4C4C4", sm: "none" },
		paddingBottom: "20px",
		maxWidth: { xxs: "300px", sm: "none" },
	},
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
