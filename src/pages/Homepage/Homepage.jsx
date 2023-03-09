import React from "react";
import styles from "../../app.styles";
import { Box, Typography, Button, Container, Grid, TextField } from "@mui/material";
import HeroImage from "../../assets/hero-image.png";
import { useTheme } from "@mui/material/styles";

import Contact from "./Contact";
import Dishes from "./Dishes";
import Title from "../../components/Title/Title";
import Testimonial from "../../components/Testimonial/Testimonial";
import PopularDish from "./PopularDish";
import BlogItem from "../../components/BlogItem/BlogItem";
import Reservation from "../../components/Reservation/Reservation";

import foodDishes from "../../data/dishesData";
import testimonials from "../../data/testimonials";
import popularDishes from "../../data/popularDishes";
import blogs from "../../data/blogData";

import LocationImage from "../../assets/Location.svg";
import ReserveImage from "../../assets/Reserve.svg";
import OpenImage from "../../assets/Open.svg";
import StoryImage from "../../assets/story-image.png";
import Signature from "../../assets/signature.png";
import SpecialFoodImage from "../../assets/special-food.png";
import TestimonialImage from "../../assets/testimonial-image.png";
import ChickenBurgerImage from "../../assets/chicken-burger.png";
import ChickenPizzaImage from "../../assets/chicken-pizza.png";
import HomeDelivery from "../../assets/home-delivery.svg";
import SpecialMenus from "../../assets/menus.svg";
import Opened247 from "../../assets/opened.svg";

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
					<Box sx={{ width: "auto", height: "400px", marginTop: "auto", marginRight: "50px" }}>
						<img src={HeroImage} alt="" className="w-[400px] h-[100%] mt-[10px] " />
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
						<Title text="menu" />
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
				<Box sx={styles.testimonials__container}>
					<Title text="testimonials" />
					<Typography variant="h3" sx={{ ...styles.title, color: theme.palette.white.main, fontSize: "28px", marginBlock: "10px 0" }}>
						What our clients say
					</Typography>
					<Typography variant="p" sx={{ ...styles.desc, marginTop: "0" }} color="desc">
						We love to hear from customers, so please leave a comment or say hello in an email.
					</Typography>

					<Box sx={styles.testimonials__slider}>
						<Box sx={styles.testimonials__slider__content}>
							{testimonials.map((testimonial, index) => (
								<Testimonial key={index} {...testimonial} />
							))}
						</Box>
						<Box sx={styles.testimonials__slider__controls}>
							<Box sx={{ ...styles.testimonials__slider__dot, backgroundColor: theme.palette.white.main }}></Box>
							<Box sx={{ ...styles.testimonials__slider__dot, backgroundColor: theme.palette.desc.main }}></Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<img src={TestimonialImage} alt="" className="w-[100%] h-[300px]" />
			<Box className="offers" sx={{ marginTop: "100px" }}>
				<Container maxWidth="lg" sx={{ ...styles.offer__container }}>
					<Title text="offer" />
					<Typography variant="p" sx={{ ...styles.title, display: "block", fontWeight: "bold", fontSize: "20px", marginBottom: "10px" }}>
						Our special Offer dishes
					</Typography>
					<Typography variant="p" sx={{ ...styles.desc, width: "40%", fontWeight: "normal", fontSize: "12px", textAlign: "center" }}>
						Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making.
					</Typography>

					<Box sx={styles.offers__images__container}>
						<img src={ChickenBurgerImage} alt="" className="h-[100%] w-[50%]" />
						<img src={ChickenPizzaImage} alt="" className="h-[100%] w-[50%]" />
					</Box>
				</Container>
			</Box>
			<Box className="Menu" sx={{ marginBlock: "100px" }}>
				<Container maxWidth="lg" sx={{ ...styles.offer__container }}>
					<Title text="menu" />
					<Typography variant="p" sx={{ ...styles.title, display: "block", fontWeight: "bold", fontSize: "20px", marginBottom: "10px" }}>
						Popular Dishes
					</Typography>
					<Typography variant="p" sx={{ ...styles.desc, width: "40%", fontWeight: "normal", fontSize: "12px", textAlign: "center" }}>
						Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making.
					</Typography>

					<Box sx={styles.offers__images__container}>
						{popularDishes.map((dish, index) => (
							<PopularDish key={index} {...dish} />
						))}
					</Box>

					<Button variant="outlined" color="secondary" sx={{ ...styles.button, marginTop: "20px" }}>
						See all dishes
					</Button>
				</Container>
			</Box>
			<Box sx={{ width: "100%", height: "300px", background: theme.palette.primary.main }}>
				<Container maxWidth="lg" sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
					<Box sx={{ width: "25%" }}>
						<Title text="what we offer" sx={{ color: theme.palette.white.main }} />
						<Typography variant="p" sx={{ ...styles.title, display: "block", color: theme.palette.white.main, fontSize: "20px" }}>
							Our Great Services
						</Typography>
						<Typography variant="p" sx={{ ...styles.desc, display: "block", color: theme.palette.white.main, fontSize: "13px" }}>
							Lorem Ipsum is that it has a more-or-less normal distribution content making it look like readable English.{" "}
						</Typography>
					</Box>
					<Box sx={{ width: "60%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
						<Box sx={{ ...styles.offer__box, borderColor: theme.palette.background3.main }}>
							<img src={Opened247} alt="" className="w-[30px] block mx-[auto]" />
							<Typography variant="p" sx={{ ...styles.title, color: theme.palette.white.main, fontSize: "16px", marginTop: "5px" }}>
								Opened 24/7
							</Typography>
						</Box>
						<Box sx={{ ...styles.offer__box, borderColor: theme.palette.background3.main }}>
							<img src={Opened247} alt="" className="w-[30px] block mx-[auto]" />
							<Typography variant="p" sx={{ ...styles.title, color: theme.palette.white.main, fontSize: "16px", marginTop: "5px" }}>
								Special Menus
							</Typography>
						</Box>
						<Box sx={{ ...styles.offer__box, borderColor: theme.palette.background3.main }}>
							<img src={Opened247} alt="" className="w-[30px] block mx-[auto]" />
							<Typography variant="p" sx={{ ...styles.title, color: theme.palette.white.main, fontSize: "16px", marginTop: "5px" }}>
								Home Delivery
							</Typography>
						</Box>
					</Box>
				</Container>
			</Box>

			<Box className="blog" sx={styles.blog}>
				<Container maxWidth="lg" sx={{ ...styles.blogs__container }}>
					<Title text="blog" />
					<Typography variant="p" sx={{ ...styles.title, display: "block", fontWeight: "bold", fontSize: "20px", marginBottom: "10px" }}>
						Be First Who Read News
					</Typography>
					<Typography variant="p" sx={{ ...styles.desc, width: "40%", fontWeight: "normal", fontSize: "12px", textAlign: "center" }}>
						Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making.
					</Typography>

					<Grid container sx={{ marginTop: "20px", gap: "30px" }}>
						{blogs.map((blog, index) => {
							if (index < 2) {
								return <BlogItem {...blog} key={index} />;
							}
							return "";
						})}
					</Grid>
				</Container>
			</Box>

			<Reservation />
		</>
	);
};

export default Homepage;
