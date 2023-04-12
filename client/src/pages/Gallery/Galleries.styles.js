import { flex } from "../../app.styles";
import GalleryReservationImage from "../../assets/gallery-reservation.png";

const galleriesPageStyles = {
	gallery__feature: {
		width: "100%",
		height: { xxs: "auto", sm: "400px", md: "450px", lg: "350px" },
		...flex("space-between", "center"),
		flexDirection: { xxs: "column", sm: "row" },
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
};
export default galleriesPageStyles;
