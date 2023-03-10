import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

import styles from "../../app.styles";

import PageDesc from "../../components/Header/PageDesc";

import Reservation from "../../components/Reservation/Reservation";
import { useTheme } from "@mui/material/styles";
import Title from "../../components/Title/Title";

import chefsData from "../../data/chefsData";

import PromoVideoImage from "../../assets/promo-video.png";
import { useParams } from "react-router-dom";
import SkillIcon from "../../components/SkillIcon/SkillIcon";

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
				<Container maxWidth="lg" sx={styles.chef__info__container}>
					<Box sx={{ backgroundColor: "yellow", width: "40%", height: "450px" }}>
						<img src={chefData.img} alt="" className="w-[100%] h-[100%]" />
					</Box>

					<Box className="story__text" sx={styles.homepage__story__text}>
						<Typography variant="h3" sx={{ ...styles.homepage__story__title, fontSize: "40px" }}>
							{chefData.name}
						</Typography>
						<Typography variant="p" sx={{ ...styles.homepage__story__desc, color: theme.palette.secondary.main, display: "block", marginBlock: "5px", fontSize: "25px" }}>
							{chefData.position}
						</Typography>
						<Typography variant="p" sx={{ ...styles.homepage__story__desc, fontSize: "16px", lineHeight: "10px" }}>
							{chefData.desc}
						</Typography>

						<Grid container sx={{ width: "100%", height: "auto", marginTop: "20px" }}>
							{[
								{ topic: " Experience", details: `${chefData["experience"]} Years of Experience`, icon: WorkOutlineOutlinedIcon },
								{ topic: "Mail", details: chefData["mail"], icon: MailOutlineIcon },
								{ topic: "Contact Us", details: chefData["contact"], icon: LocalPhoneOutlinedIcon },
								{ topic: "Locate Us", details: chefData["location"], icon: PlaceOutlinedIcon },
							].map((e, index) => {
								return (
									<Grid item md={6} sx={{ marginBottom: "20px" }} key={index}>
										<SkillIcon subject={e.topic} details={e.details}>
											{<e.icon sx={{ ...styles.icon__style, color: theme.palette.white.main }} />}
										</SkillIcon>
									</Grid>
								);
							})}
						</Grid>
						<Box>
							<InstagramIcon sx={{ ...styles.menu__icon, color: theme.palette.primary.main }} />
							<FacebookOutlinedIcon sx={{ ...styles.menu__icon, color: theme.palette.primary.main }} />
							<TwitterIcon sx={{ ...styles.menu__icon, color: theme.palette.primary.main }} />
							<PinterestIcon sx={{ ...styles.menu__icon, color: theme.palette.primary.main }} />
						</Box>
					</Box>
				</Container>
			</Box>

			<Box sx={{ ...styles.chef__promo, backgroundColor: theme.palette.primary.main }}>
				<Container
					maxWidth="lg"
					sx={{
						...styles.chef__promo__container,
						color: theme.palette.white.main,
					}}>
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
