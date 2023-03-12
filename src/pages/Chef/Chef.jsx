import React, { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import styles from "../../app.styles";
import PageDesc from "../../components/Header/PageDesc";

import Reservation from "../../components/Reservation/Reservation";
import { useTheme } from "@mui/material/styles";
import Title from "../../components/Title/Title";

import chefsData from "../../data/chefsData";

import PromoVideoImage from "../../assets/promo-video.png";
import { useParams } from "react-router-dom";
import StoryImage from "../../assets/story-image.png";
import Signature from "../../assets/signature.png";
const Chef = () => {
	const [chefData, setChefData] = useState({});
	const theme = useTheme();
	const { chefId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (chefsData[chefId]) {
			setChefData(chefsData[chefId]);
			return;
		}
		navigate("/404");
	}, [chefId]);
	return (
		<>
			<PageDesc content="Chefs Single" />

			<Box sx={{ marginBlock: "70px" }}>
				<Container maxWidth="lg">
					<Box sx={{ ...styles.homepage__story, justifyContent: "flex-start", gap: "40px", width: "80%", marginInline: "auto", alignItems: "flex-start" }}>
						<img src={chefData.img} alt="" className="w-[calc(50% - 30px)] h-[300px]" />

						<Box className="story__text" sx={styles.homepage__story__text}>
							<Typography variant="h3" sx={{ ...styles.homepage__story__title, fontSize: "40px" }}>
								{chefData.name}
							</Typography>
							<Typography variant="p" sx={{ ...styles.homepage__story__desc, color: theme.palette.secondary.main, display: "block", marginBlock: "5px" }}>
								{chefData.position}
							</Typography>
							<Typography variant="p" sx={styles.homepage__story__desc}>
								{chefData.desc}
							</Typography>
						</Box>
					</Box>
				</Container>
			</Box>

			<Box sx={{ ...styles.chef__promo, backgroundColor: theme.palette.primary.main }}>
				<Container maxWidth="lg" sx={{ ...styles.chef__promo__container, color: theme.palette.white.main }}>
					<Title text="promo" />
					<Typography variant="h3" sx={{ ...styles.title, fontSize: "24px", marginBlock: "19px" }}>
						My Promo Video
					</Typography>

					<Box sx={styles.chef__promo__image__container}>
						<img src={PromoVideoImage} alt="" className="h-[100%] w-[100%]" />
					</Box>
				</Container>
			</Box>
			<Box sx={{ marginTop: "200px" }}></Box>
			<Reservation />
		</>
	);
};

export default Chef;
