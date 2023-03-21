import React from "react";
import { Box, Container, Typography, Grid, TextField, Button } from "@mui/material";
import { useTheme } from "@emotion/react";

import styles from "../../app.styles";
import PageDesc from "../../components/Header/PageDesc";
import Title from "../../components/Title/Title";

import FreshFoodImage from "../../assets/fresh-food.svg";
import FastDeliveryImage from "../../assets/fast-delivery.svg";
import QualityMaintainImage from "../../assets/quality-maintain.svg";
import Service247 from "../../assets/service-247.svg";
import WhyChooseUsImage from "../../assets/why-choose-us.png";
import ReservedImage from "../../assets/reserved-image.jpg";
const ReservationPage = () => {
	const theme = useTheme();
	return (
		<>
			<PageDesc content="Booking Page"></PageDesc>
			<Box sx={{ marginBlock: { xxs: "30px", sm: "100px" } }}>
				<Container maxWidth="lg" sx={{ ...styles.reservation__page__container, alignItems: "center" }}>
					<Box className="story__text" sx={{ ...styles.homepage__story__text, width: { sm: "50%", xxs: "100%" }, order: { xxs: 2, sm: 1 } }}>
						<Title text="reservation" />
						<Typography variant="h3" sx={{ ...styles.homepage__story__title, fontSize: "40px", marginBlock: "5px" }}>
							Book your table now
						</Typography>

						<Typography variant="p" sx={{ ...styles.homepage__story__desc, fontSize: "16px", lineHeight: "10px" }}>
							The people, food and the prime locations make Rodich the perfect place good friends & family to come together and have great time.
						</Typography>

						<Grid container sx={{ width: "100%", height: "auto", marginTop: "20px" }}>
							{[{ text: "Name" }, { text: "Email" }, { text: "Phone" }, { text: "Date" }, { text: "Time" }, { text: "Person" }].map((e, index) => {
								return (
									<Grid item key={index} xxs={12} xs={6} sx={{ height: "auto", marginBottom: "20px" }}>
										<input style={{ ...styles.choose__us__reason }} className="focus:outline-none" placeholder={e.text} aria-label={e.text}></input>
									</Grid>
								);
							})}
						</Grid>

						<Button variant="outlined" color="secondary" sx={{ ...styles.button, marginTop: "20px" }}>
							Book a Table
						</Button>
					</Box>

					<Box sx={{ backgroundColor: "yellow", width: { sm: "40%", xxs: "100%" }, height: { sm: "450px", xxs: "350px" }, order: { xxs: 1, sm: 2 } }}>
						<img src={ReservedImage} alt="" className="w-[100%] h-[100%]" />
					</Box>
				</Container>
			</Box>

			<Box sx={{ marginBlock: { xxs: "30px", sm: "100px" } }}>
				<Container maxWidth="lg" sx={{ ...styles.reservation__page__container, alignItems: "center" }}>
					<Box sx={{ width: { xxs: "100%", sm: "40%" }, height: { sm: "450px", xxs: "350px" } }}>
						<img src={WhyChooseUsImage} alt="" className="w-[100%] h-[100%]" />
					</Box>

					<Box className="story__text" sx={{ ...styles.homepage__story__text, width: { sm: "50%", xxs: "100%" } }}>
						<Title text="Why choose us" />
						<Typography variant="h3" sx={{ ...styles.homepage__story__title, fontSize: "40px", marginBlock: "5px" }}>
							Why We Are The Best?
						</Typography>

						<Typography variant="p" sx={{ ...styles.homepage__story__desc, fontSize: "16px", lineHeight: "10px" }}>
							Bring the table winwin survival strateges ensure proactive the domination the end of the day going forward new normal that has evolved froms generation on the runway
							heading towards streamlined cloud solution generated content in real times will have multiple touchpoints.
						</Typography>

						<Grid container sx={{ width: "100%", height: "auto", marginTop: "20px" }}>
							{[
								{ text: "Fresh Food", icon: FreshFoodImage },
								{ text: "Fast Delivery", icon: FastDeliveryImage },
								{ text: "Quality Maintain", icon: QualityMaintainImage },
								{ text: "24/7 Service", icon: Service247 },
							].map((e, index) => {
								return (
									<Grid item key={index} xxs={12} xs={6} sx={{ height: "auto", marginBottom: "20px", width: "100%" }}>
										<Box sx={styles.choose__us__reason}>
											<img src={e.icon} alt="Why choose us" className="w-[30px] h-[25px] mr-[10px]" />
											<Typography variant="p"> {e.text}</Typography>
										</Box>
									</Grid>
								);
							})}
						</Grid>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default ReservationPage;
