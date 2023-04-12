import React, { useEffect } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useTheme } from "@emotion/react";

import styles from "../../app.styles";
import PageDesc from "../../components/Header/PageDesc";
import Feature from "./Feature";
import Title from "../../components/Title/Title";

import FeatureImage1 from "../../assets/feature-image1.png";
import FeatureImage2 from "../../assets/feature-image2.png";
import GalleryImage1 from "../../assets/gallery_image1.png";
import GalleryImage2 from "../../assets/gallery_image2.png";
import GalleryImage3 from "../../assets/gallery_image3.png";
import GalleryImage4 from "../../assets/gallery_image4.png";
import GalleryImage5 from "../../assets/gallery_image5.png";
import GalleryImage6 from "../../assets/gallery_image6.png";

const GalleryCollection = () => {
	const theme = useTheme();
	useEffect(() => {
		document.title = "Restaurante - Our Gallery Collection";
	}, []);
	return (
		<>
			<PageDesc content="Gallery" />

			<Box className="gallery" sx={{ marginBlock: { xxs: "30px 70px", md: "120px" }, height: "auto" }}>
				<Container maxWidth="lg" sx={{ width: "100%", height: "auto", display: "flex", flexDirection: "column" }}>
					<div style={{ gap: "20px", justifyContent: "space-between", display: "grid" }} className="grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
						<img src={GalleryImage1} alt="" className="gallery-span1 md:h-[300px] h-[180px] w-full"></img>
						<img src={GalleryImage3} alt="" className=" h-[180px] md:h-[300px] w-full"></img>
						<img src={GalleryImage2} alt="" className=" h-[180px] md:h-[300px] w-full"></img>
						<img src={GalleryImage4} alt="" className=" h-[180px] md:h-[300px] w-full"></img>
						<img src={GalleryImage5} alt="" className=" h-[180px] md:h-[300px] w-full"></img>
						<img src={GalleryImage6} alt="" className="gallery-span2 md:h-[300px]  h-[180px] w-full"></img>
					</div>

					<Button variant="outlined" sx={{ ...styles.button, marginTop: "50px", marginInline: "auto", display: "inline-block" }} color="secondary" href="/dishes">
						See all dishes
					</Button>
				</Container>
			</Box>

			<Box sx={styles.gallery__reservation}>
				<Container maxWidth="lg" sx={styles.gallery__reservation__container}>
					<Box sx={{ width: { md: "40%" } }}>
						<Title text="reservation" sx={{ color: theme.palette.white.main }}></Title>

						<Typography variant="h3" sx={{ ...styles.title, width: "80%", marginTop: "10px", fontSize: "50px", color: theme.palette.white.main }}>
							This evening will be great!
						</Typography>
						<Typography variant="p" sx={{ ...styles.desc, fontSize: "14px", width: "60%", marginBlock: "20px", color: theme.palette.white.main }}>
							Lorem Ipsum is that it has a more-or-less normal look like readable English.
						</Typography>
						<Box>
							<Button variant="outlined" color="secondary" sx={{ ...styles.button }} href="/reserve">
								Book a Table
							</Button>
							<Button variant="text" color="white" sx={{ ...styles.button, marginLeft: "30px" }} href="/contact">
								Get in Touch
							</Button>
						</Box>
					</Box>
				</Container>
			</Box>
			<Box className="features" sx={{ marginBlock: { xxs: "30px", sm: "100px" } }}>
				<Container maxWidth="lg" sx={{ ...styles.column__container }}>
					<Feature
						title="Always fresh ingredients"
						desc="The people, food and the prime locations make Rodich the perfect place good friends & family to come together and have great time."
						link=""
						order={2}
						img={FeatureImage1}
					/>
					<Feature
						title="We invite you to visit our restaurant "
						desc="Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area."
						link=""
						order={1}
						img={FeatureImage2}
					/>
				</Container>
			</Box>
		</>
	);
};

export default GalleryCollection;
