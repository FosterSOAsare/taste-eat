import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Container, Typography, Grid, Button } from "@mui/material";

import styles from "../../app.styles";
import Title from "../../components/Title/Title";
import PageDesc from "../../components/Header/PageDesc";
import Reservation from "../../components/Reservation/Reservation";
import Chef from "./Chef";
import Testimonials from "../../components/Testimonials/Testimonials";

import chefsData from "../../data/chefsData";
import countsData from "../../data/countsData";

import AboutHeroImage from "../../assets/about-hero.png";
import Signature from "../../assets/signature.png";
import GalleryImage1 from "../../assets/GalleryImage1.png";
import GalleryImage2 from "../../assets/GalleryImage2.png";
import GalleryImage3 from "../../assets/GalleryImage3.png";
import GalleryImage4 from "../../assets/GalleryImage4.png";
import GalleryImage5 from "../../assets/GalleryImage5.png";
import JosefineImage from "../../assets/josefine.png";
import StarImage from "../../assets/star.png";

const AboutPage = () => {
	const theme = useTheme();

	return (
		<>
			<PageDesc content="About Us" />

			<Box className="about" sx={{ ...styles.about__section, marginBlock: "80px 100px" }}>
				<Container maxWidth="lg" sx={styles.aboutpage__container}>
					<Box sx={styles.homepage__story}>
						<Box className="story__text" sx={styles.homepage__story__text}>
							<Title text="about us" />
							<Typography variant="h3" sx={{ ...styles.homepage__story__title, marginBlock: "5px 10px" }}>
								Quality and Tradition
							</Typography>
							<Typography variant="p" sx={styles.homepage__story__desc}>
								Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content gfshere making look like readable English. Many
								desktop publishing packages.
							</Typography>

							<Box className="signature" sx={{ marginTop: "20px" }}>
								<Typography variant="p" sx={styles.homepage__story__desc}>
									JOSEFINE
								</Typography>
								<img src={Signature} alt="" className="w-[70px] mt-[10px] block" />
							</Box>

							<Button variant="outlined" color="secondary" sx={{ ...styles.button, marginTop: "30px" }}>
								See More
							</Button>
						</Box>
						<Box sx={{ position: "relative" }}>
							<img src={AboutHeroImage} alt="" className="w-[calc(50% - 30px)] h-[300px]" />
							<Box sx={{ ...styles.rating__card }}>
								<Box sx={styles.card__user__info}>
									<img src={JosefineImage} alt="" className="w-[50px] h-[50px] " style={styles.card__image} />
									<Box>
										<Typography variant="h3" sx={{ ...styles.title, fontSize: "16px" }}>
											Josefine
										</Typography>
										<Typography variant="p" sx={{ ...styles.desc, fontSize: "12px" }}>
											CEO & Founder
										</Typography>
									</Box>
								</Box>
								<Typography variant="p" sx={{ ...styles.desc, fontSize: "12px", marginBottom: "10px" }}>
									Capitalize on low hanging fruit to identify a ballpark
								</Typography>

								{[1, 2, 3, 4, 5].map((count) => (
									<img src={StarImage} alt="" key={count} style={styles.star} />
								))}
							</Box>
						</Box>
					</Box>
				</Container>
			</Box>

			<Box className="counts" sx={styles.about__counts}>
				<Container maxWidth="lg" sx={styles.about__counts__container}>
					<Grid container>
						{countsData.map((count, index) => (
							<Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ ...styles.about__count, borderRight: index !== countsData.length - 1 ? "2px solid #d5d5d5" : "" }}>
								<img src={GalleryImage1} alt="" className="w-[50px] h-[50px] block " />
								<Typography variant="h6" component="h2" sx={{ ...styles.about__counts__title, ...styles.title, color: theme.palette.white.main }}>
									{count.title}
								</Typography>
								<Typography variant="body1" component="p" sx={{ ...styles.about__counts__text, ...styles.desc, color: theme.palette.white.main }}>
									{count.desc}
								</Typography>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
			<Box sx={styles.aboutpage__section} className="team">
				<Container maxWidth="md" sx={{ ...styles.aboutpage__container }}>
					<Title text="team" />
					<Typography variant="p" sx={{ ...styles.title, display: "block", fontWeight: "bold", fontSize: "20px", marginBottom: "10px" }}>
						Meet Our Professional Chefs
					</Typography>

					<Box className="about__teams__container" sx={styles.about__teams__container}>
						{chefsData.map((chef, index) => {
							if (index < 4) {
								return <Chef key={index} {...chef} />;
							}
							return;
						})}
					</Box>

					<Button variant="outlined" color="secondary" sx={{ ...styles.button, marginTop: "30px" }} href="chefs">
						See More
					</Button>
				</Container>
			</Box>
			<Testimonials />

			<Box sx={styles.aboutpage__section} className="gallery">
				<Container maxWidth="lg" sx={{ ...styles.aboutpage__container }}>
					<Title text="gallery" />
					<Typography variant="p" sx={{ ...styles.title, display: "block", fontWeight: "bold", fontSize: "20px", marginBottom: "10px" }}>
						What We Make
					</Typography>

					<Box className="gallery__container" sx={styles.gallery__container}>
						<img src={GalleryImage1} alt="" className="w-full h-[200px]" />
						<img src={GalleryImage2} alt="" className="bigImage w-full h-[100%]" style={styles.row__span} />
						<img src={GalleryImage4} alt="" className="w-full h-[200px]" />
						<img src={GalleryImage3} alt="" className="w-full h-[200px]" />
						<img src={GalleryImage5} alt="" className="w-full h-[200px]" />
					</Box>
				</Container>
			</Box>
			<Reservation />
		</>
	);
};

export default AboutPage;
