import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Container, Typography, Grid, Button } from "@mui/material";

import styles from "../../app.styles";
import Title from "../../components/Title/Title";
import PageDesc from "../../components/Header/PageDesc";
import Reservation from "../../components/Reservation/Reservation";
import Chef from "./Chef";
import Testimonials from "../../components/Testimonials/Testimonials";
import Loading from "../../components/Loading/Loading";

// import chefsData from "../../data/chefsData";
import { httpFetchChefs } from "../../hooks/requests/request";
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
import { useMediaQuery } from "@mui/material";

const AboutPage = () => {
	const theme = useTheme();
	const [chefsData, setChefsData] = useState([]);
	const [loading, setLoading] = useState(true);
	const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));

	useEffect(() => {
		(async function () {
			try {
				let chefs = await httpFetchChefs(4);
				setChefsData(chefs.chefs);
				setLoading(false);
			} catch (e) {
				console.error(e);
			}
		})();
	}, []);

	return (
		<>
			<PageDesc content="About Us" />

			<Box className="about" sx={{ ...styles.about__section, paddingBlock: { xxs: "30px", sm: "70px 120px" } }}>
				<Container maxWidth="lg" sx={styles.aboutpage__container}>
					<Box sx={{ ...styles.aboutpage__hero, height: "auto", margin: 0 }}>
						<Box className="story__text" sx={{ ...styles.column__container, alignItems: "flex-start", width: { sm: "50%" }, order: { xxs: 2, sm: 1 } }}>
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
						<Box
							sx={{
								position: "relative",
								width: { xxs: "100%", sm: "45%" },
								display: "flex",
								justifyContent: { xxs: "center", xs: "flex-end", sm: "center" },
								order: { xxs: 1, sm: 2 },
								marginBottom: { sm: 0, xs: "70px", xxs: "30px" },
							}}>
							<img src={AboutHeroImage} alt="" className="w-[calc(50% - 30px)] h-[300px]" />
							{!isMobileScreen && (
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
							)}
						</Box>
					</Box>
				</Container>
			</Box>

			<Box className="counts" sx={styles.about__counts}>
				<Container maxWidth="lg" sx={styles.about__counts__container}>
					<Grid container>
						{countsData.map((count, index) => (
							<Grid
								item
								xxs={6}
								md={3}
								key={index}
								sx={{
									...styles.about__count,
									borderRight: { xxs: (index + 1) % 2 !== 0 ? "2px solid #d5d5d5" : "", md: index !== countsData.length - 1 ? "2px solid #d5d5d5" : "" },
									borderBottom: { xxs: index + 1 <= 2 ? "2px solid #d5d5d5" : "", md: "none" },
								}}>
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
			<Box sx={{ ...styles.aboutpage__section }} className="team">
				<Container maxWidth="md" sx={{ ...styles.aboutpage__container }}>
					{!loading && (
						<>
							<Title text="team" />
							<Typography variant="p" sx={{ ...styles.title, display: "block", fontWeight: "bold", fontSize: "20px", marginBottom: "10px" }}>
								Meet Our Professional Chefs
							</Typography>

							<Box className="about__teams__container" sx={styles.about__teams__container}>
								{chefsData.map((chef, index) => (
									<Chef key={index} {...chef} />
								))}
							</Box>

							<Button variant="outlined" color="secondary" sx={{ ...styles.button, marginTop: "30px" }} href="chefs">
								See More
							</Button>
						</>
					)}
					{loading && <Loading />}
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
						<img src={GalleryImage2} alt="" className="big-image w-full h-[250px] sm:h-[100%] " />
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
