import { flex } from "../../app.styles";

import ReservationBackgroundImage from "../../assets/reservation-background.png";

const reservationStyle = {
	reservation: {
		width: "100%",
		height: "auto",
		paddingBlock: "70px",
		...flex("center", "center", "column"),
		background: `url(${ReservationBackgroundImage})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	},
	reservation__container: {
		width: { md: "50%", xxs: "90%" },
		height: "auto",
		paddingBlock: { xxs: "50px", md: "70px" },
		...flex("center", "center", "column"),
	},
	reservation__input: {
		borderRadius: "0 !important",
	},
};

export default reservationStyle;
