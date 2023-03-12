import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@emotion/react";

import styles from "../../app.styles";
import PageDesc from "../../components/Header/PageDesc";
import Title from "../../components/Title/Title";
import Chef from "../About/Chef";
import Reservation from "../../components/Reservation/Reservation";
import Testimonials from "../../components/Testimonials/Testimonials";
import Skill from "../../components/Skill";

import chefsData from "../../data/chefsData";

import ExperiencedChefImage from "../../assets/experienced-chef.png";

const ChefsPage = () => {
	const theme = useTheme();
	return (
		<>
			<PageDesc content="About Us" />
			<Box sx={styles.chefspage__section} className="team">
				<Container maxWidth="lg" sx={{ ...styles.chefpage__container }}>
					<Title text="team" />
					<Typography variant="p" sx={{ ...styles.title, display: "block", fontWeight: "bold", fontSize: "20px", marginBottom: "10px" }}>
						Meet Our Professional Chefs
					</Typography>

					<Box className="about__teams__container" sx={styles.chefs__teams__container}>
						{chefsData.map((chef, index) => (
							<Chef key={index} {...chef} index={index} />
						))}
					</Box>
				</Container>
			</Box>
			<Testimonials />
			<Box className="hero" sx={{ ...styles.hero, marginBlock: "100px", height: "auto" }}>
				<Container maxWidth="lg" sx={styles.hero__container}>
					<Box sx={{ width: "40%", height: "auto" }}>
						<Title text="best chefs" />
						<Typography variant="h3" sx={{ ...styles.title, fontSize: "22px", marginBlock: "5px 10px" }}>
							Only Skilled Team
						</Typography>
						<Typography variant="p" color="desc" sx={{ ...styles.desc, fontSize: "14px" }}>
							Bring tothe table survival strategies to ensured proactived domination At the end of the day, going forward, a new normal that has evolved from generation X is on the
							runway heading towards a streamlined touchpoints for offshoring.
						</Typography>
						<Box sx={{ width: "100%", height: "120px", display: "flex", flexDirection: "column", justifyContent: "space-between", marginBlock: "30px" }}>
							<Skill title="Experienced" value="95" />
							<Skill title="Professionalism" value="85" />
							<Skill title="Creative" value="88" />
						</Box>
						<Button variant="outlined" color="secondary" sx={{ ...styles.button, marginTop: "20px" }}>
							See all dishes
						</Button>
					</Box>
					<Box sx={{ width: "auto", height: "100%", marginTop: "auto", marginRight: "50px" }}>
						<img src={ExperiencedChefImage} alt="" className="w-[400px] h-[100%]  " />
					</Box>
				</Container>
			</Box>
			<Reservation />
		</>
	);
};

export default ChefsPage;
