import { flex } from "../../app.styles";

import ReservationBackgroundImage from "../../assets/reservation-background.png";

const reservationStyle = {
	reservation: {
		width: "100%",
		height: "800px",
		...flex("center", "center", "column"),
		background: `url(${ReservationBackgroundImage})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	},
	reservation__container: {
		width: "50%",
		height: "65%",
		...flex("center", "center", "column"),
	},
	reservation__input: {
		borderRadius: "0 !important",
	},
};

export default reservationStyle;
