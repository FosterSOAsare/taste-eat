import { flex } from "../../app.styles";

import ReservationBackgroundImage from "../../assets/reservation-background.png";

const reservationStyle = {
	reservation: {
		width: "100%",
		height: "600px",
		...flex("center", "center", "column"),
		background: `url(${ReservationBackgroundImage})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	},
	reservation__container: {
		width: "60%",
		height: "60%",
		...flex("center", "center", "column"),
	},
	reservation__input: {
		borderRadius: "0 !important",
	},
};

export default reservationStyle;
