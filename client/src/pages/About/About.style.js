import { flex } from "../../app.styles";
import ReservationBackgroundImage from "../../assets/counts-background.png";
const aboutPageStyles = {
	about__section: {
		width: "100%",
		height: "auto",
		marginBlock: "80px",
		...flex("center", "center", "column"),
	},
	aboutpage__hero: {
		width: "100%",
		height: "auto",
		marginTop: "40px",
		...flex("space-between", "center"),
		flexDirection: { xxs: "column", sm: "row" },
		gap: "20px",
	},

	gallery__container: {
		width: "100%",
		height: "auto",
		display: "grid",
		gridTemplateColumns: { xxs: "1fr 1fr", md: "1fr 2fr 1fr" },
		gap: "10px",
		marginTop: "20px",
		justifyContent: "center",
	},
	row__span: {
		gridColumn: { xxs: "2/3" },
		gridRow: { xxs: "1/3" },
		// order: 2,
	},
	about__teams__container: {
		height: "auto",
		display: "grid",
		gridTemplateColumns: { xxs: "repeat(2 , 1fr)", sm: "repeat(4 , 1fr)" },
		gap: "10px",
		marginTop: "20px",
		width: "100%",
	},
	chef: {
		width: "100%",
		height: "auto",
		...flex("center", "center", "column"),
	},
	about__counts: {
		width: "100%",
		height: "auto",
		background: `url(${ReservationBackgroundImage})`,
		backgroundSize: "100% 100%",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		...flex("center", "center"),
		justifyContent: "space-between",
		paddingBlock: "60px",
	},
	about__counts__container: {
		height: "80%",
		...flex("space-between", "center"),
	},
	about__count: {
		width: "90%",
		height: "200px",
		...flex("center", "center", "column"),
		padding: "15px 0",
		height: "auto",
	},
	about__counts__text: {
		textAlign: "center",
		fontSize: "12px",
		width: "80%",
	},
	about__counts__title: {
		marginBlock: "10px",
		fontSize: "18px",
	},
	aboutpage__section: {
		width: "100%",
		height: "auto",
		marginBlock: { xxs: "30px", sm: "70px" },
	},
	aboutpage__container: {
		height: "auto",
		...flex("center", "center", "column"),
	},
	about__section: {
		width: "100%",
		height: "auto",
		paddingBlock: { sm: "70px", xxs: "20px" },
	},
	rating__card: {
		width: "300px",
		height: "200px",
		background: "white",
		boxShadow: "0px 4px 33px rgba(0, 0, 0, 0.1)",
		position: "absolute",
		left: { xxs: "18%", sm: "-150px" },
		bottom: "-50px",
		padding: "40px",
	},
	card__user__info: {
		width: "100%",
		height: "auto",
		...flex("flex-start", "center"),
		gap: "10px",
		marginBottom: "10px",
	},
	card__image: {
		borderRadius: "50%",
	},
	star: {
		marginRight: "5px",
		display: "inline",
	},
	about__slider: {
		width: "100%",
		height: "auto",
		position: "relative",
		overflow: "hidden",
	},
	slider__container: {
		height: "100%",
		...flex("flex-start", "center"),
	},
	about__testimonial: {
		height: "auto",
		paddingBlock: "20px",
		...flex("space-between", "center", "column"),
	},
	slider__control: {
		width: "10%",
		height: "100%",
		position: "absolute",
		top: "0",
		...flex("center", "flex-start"),
		paddingTop: "20px",
	},
};

export default aboutPageStyles;
