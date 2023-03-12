import { flex } from "../../app.styles";
import GalleryReservationImage from "../../assets/gallery-reservation.png";

const galleriesPageStyles = {
	gallery__feature: {
		width: "100%",
		height: "auto",
		...flex("space-between", "center"),
	},
	gallery__reservation: {
		width: "100%",
		height: "400px",
		background: `url(${GalleryReservationImage})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	},
	gallery__reservation__container: {
		height: "100%",
		...flex("space-between", "center"),
	},
	gallery__item: { width: "100%", height: "350px" },
};
export default galleriesPageStyles;
