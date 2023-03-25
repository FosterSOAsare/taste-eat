import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@emotion/react";

import styles from "../../app.styles";
import { httpFetchChefs } from "../../hooks/requests/request";
import { useAdminContext } from "../../context/AdminContext";

import PageDesc from "../../components/Header/PageDesc";
import Title from "../../components/Title/Title";
import Chef from "../About/Chef";
import Reservation from "../../components/Reservation/Reservation";
import Testimonials from "../../components/Testimonials/Testimonials";
import Skill from "../../components/Skill";
import Loading from "../../components/Loading/Loading";

// import chefsData from "../../data/chefsData";

import ExperiencedChefImage from "../../assets/experienced-chef.png";

const ChefsPage = () => {
	const theme = useTheme();
	const [chefsData, setChefsData] = useState([]);
	const [loading, setLoading] = useState(true);
	const { isAdmin } = useAdminContext();
	useEffect(() => {
		(async function () {
			let result = await httpFetchChefs();
			setChefsData(result);
			setLoading(false);
		})();
	}, []);
	return (
		<>
			<PageDesc content="Our Chefs" />
			<Box sx={styles.chefspage__section} className="team">
				<Container maxWidth="lg" sx={{ ...styles.chefpage__container }}>
					{!loading && (
						<>
							<Title text="team" />
							<Typography variant="p" sx={{ ...styles.title, display: "block", fontWeight: "bold", fontSize: "20px", marginBottom: "10px" }}>
								Meet Our Professional Chefs
							</Typography>

							<Box className="about__teams__container" sx={styles.chefs__teams__container}>
								{chefsData.map((chef) => (
									<Chef key={chef._id} {...chef} />
								))}
							</Box>
							{isAdmin && (
								<Button variant="contained" color="secondary" href="/chefs/new" sx={{ marginTop: "30px", ...styles.button }}>
									Add A Dish
								</Button>
							)}
						</>
					)}
					{loading && <Loading />}
				</Container>
			</Box>
			<Testimonials />
			<Box className="best chefs" sx={{ marginBlock: { sm: "100px", xxs: "30px" }, height: "auto" }}>
				<Container maxWidth="lg" sx={styles.best__chefs__container}>
					<Box sx={{ width: { xxs: "100%", sm: "40%" }, order: { xxs: 2, sm: 1 }, height: "auto" }}>
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
					<Box
						sx={{
							width: { xxs: "100%", sm: "300px", md: "400px" },
							height: { xxs: "100%", md: "100%", sm: "450px" },
							marginTop: "auto",
							marginRight: { sm: "50px" },
							order: { xxs: 1, sm: 2 },
							marginBottom: { xxs: "30px", sm: 0 },
						}}>
						<img src={ExperiencedChefImage} alt="" className="w-[100%] h-[100%]  " />
					</Box>
				</Container>
			</Box>
			<Reservation />
		</>
	);
};

export default ChefsPage;
