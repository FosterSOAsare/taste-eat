import React from "react";
import styles from "../../app.styles";
import { Box, Typography, Button, Container } from "@mui/material";
import PageDescription from "../../components/Header/PageDesc";
import HeroImage from "../../assets/hero-image.png";
import { useTheme } from "@mui/material/styles";
import Contact from "./Contact";
import Dishes from "./Dishes";

import foodDishes from "./dishesData";

import LocationImage from "../../assets/Location.svg";
import ReserveImage from "../../assets/Reserve.svg";
import OpenImage from "../../assets/Open.svg";
import StoryImage from "../../assets/story-image.png";
import Signature from "../../assets/signature.png";
import SpecialFoodImage from "../../assets/special-food.png";

const Homepage = () => {
	const theme = useTheme();
	return (
		<>
			<Box className="hero" sx={{ ...styles.hero, backgroundColor: theme.palette.primary.main }}>
				<Container maxWidth="lg" sx={styles.hero__container}>
					<Box sx={{ width: "50%", height: "auto" }}>
						<Typography variant="h1" color="#FFFFFF" sx={styles.hero__title}>
							Welcome to Restaurantate
						</Typography>
						<Typography variant="p" color="desc" sx={{ ...styles.desc, color: theme.palette.white.main }}>
							Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy .
						</Typography>
						<Button variant="outlined" color="secondary" sx={{ ...styles.button, marginTop: "20px" }}>
							View Menu
						</Button>
					</Box>
					<Box>
						<img src={HeroImage} alt="" className="w-[400px] h-[420px] mt-[100px] block " />
					</Box>
				</Container>
			</Box>

			<Box className="about" sx={{ ...styles.homepage__about, backgroundColor: theme.palette.background2.main }}>
				<Container maxWidth="lg" sx={styles.homepage__about__container}>
					<Box sx={styles.homepage__about__contacts} className="contacts">
						<Contact title="Locate Us" desc="Riverside 25, San Francisco, California" img={LocationImage} />
						<Contact title="Open Hours" desc="Mon To Fri 9:00 AM - 9:00 PM" img={OpenImage} />
						<Contact title="Reservation" desc="dummyemail@gmail.com" img={ReserveImage} />
					</Box>

					<Box sx={styles.homepage__story}>
						<img src={StoryImage} alt="" className="w-[calc(50% - 30px)] h-[300px]" />
						<Box className="line" sx={{ width: "1px", height: "300px", background: "#B29A90" }}></Box>
						<Box className="story__text" sx={styles.homepage__story__text}>
							<Typography variant="h3" sx={styles.homepage__story__title}>
								The Story
							</Typography>
							<Typography variant="p" sx={styles.homepage__story__desc}>
								Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content gfshere', makinlook like readable English. Many
								desktop publishing packages.
							</Typography>
							<Box sx={{ display: "flex", marginTop: "10px" }}>
								<Box>
									<Typography variant="h3" sx={styles.homepage__story__title}>
										1996
									</Typography>
									<Typography variant="p" sx={styles.homepage__story__desc}>
										Lorem Ipsum is that it has a more-or-less normal distribution
									</Typography>
								</Box>
								<Box>
									<Typography variant="h3" sx={styles.homepage__story__title}>
										2023
									</Typography>
									<Typography variant="p" sx={styles.homepage__story__desc}>
										Lorem Ipsum is that it has a more-or-less normal Content content
									</Typography>
								</Box>
							</Box>

							<Box className="signature" sx={{ marginTop: "20px" }}>
								<Typography variant="p" sx={styles.homepage__story__desc}>
									JOSEFINE
								</Typography>
								<img src={Signature} alt="" className="w-[70px] mt-[10px] block" />
							</Box>
						</Box>
					</Box>
				</Container>
			</Box>

			<Box className="menu" sx={styles.homepage__menu}>
				<Container maxWidth="lg" sx={styles.homepage__menu__container}>
					<Box sx={{ width: "25%" }} className="special__offer">
						<Typography variant="p" sx={{ ...styles.desc, fontSize: "12px", borderBlock: `2px solid ${theme.palette.secondary.main}`, display: "inline-block" }}>
							MENU
						</Typography>
						<Typography variant="h3" sx={{ ...styles.title, fontSize: "26px" }}>
							Try Our Special Offers
						</Typography>
						<Typography variant="p" sx={{ ...styles.desc, fontSize: "14px" }}>
							Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making it look like readable English.{" "}
						</Typography>
						<img src={SpecialFoodImage} alt="" className="h-[400px] my-[20px] w-[100%]" />
						<Button variant="outlined" color="secondary" sx={styles.button}>
							See all dishes
						</Button>
					</Box>
					<Box className="dishes" sx={styles.homepage__dishes}>
						{foodDishes.map((dish, index) => (
							<Dishes key={index} {...dish} />
						))}
					</Box>
				</Container>
			</Box>

			<Box className="testimonials" sx={{ ...styles.testimonials, background: theme.palette.primary.main }}>
				<Typography variant="h3">TESTIMONIAL</Typography>
				<Typography variant="h3">What our clients say</Typography>
				<Typography variant="p">We love to hear from customers, so please leave a comment or say hello in an email.</Typography>

				<Box>
					<Box></Box>
					<Box></Box>
				</Box>
			</Box>

			<img src="" alt="" />
		</>
	);
};

export default Homepage;
