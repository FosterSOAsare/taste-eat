import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Typography, Button, Popper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

import styles from "../../app.styles";
import { httpDeleteChef, httpFetchAChef } from "../../hooks/requests/request";
import { useAdminContext } from "../../context/AdminContext";

import PageDesc from "../../components/Header/PageDesc";
import Reservation from "../../components/Reservation/Reservation";
import Title from "../../components/Title/Title";
import Loading from "../../components/Loading/Loading";
// import chefsData from "../../data/chefsData";
import NotFound from "../../components/NotFound/NotFound";

import ConfirmationPopper from "../../components/ConfirmPopup/Popper";

import PromoVideoImage from "../../assets/promo-video.png";
import { useParams } from "react-router-dom";
import SkillIcon from "../../components/SkillIcon/SkillIcon";

const Chef = () => {
	const [chefData, setChefData] = useState({});
	const [loading, setLoading] = useState(true);
	const theme = useTheme();
	const navigate = useNavigate();
	const { chefId } = useParams();
	const { isAdmin } = useAdminContext();
	const [notFound, setNotFound] = useState(false);

	// Using data from the database
	useEffect(() => {
		(async function () {
			let res = await httpFetchAChef(chefId);
			setLoading(false);
			if (res.error) {
				setNotFound(true);
				return;
			}
			setChefData(res);
		})();
	}, [chefId]);

	// For process before deleting chef

	const deleteChef = () => {
		return new Promise(async (resolve, reject) => {
			try {
				let res = await httpDeleteChef(chefData._id);
				if (res.error) {
					reject(res.error);
				} else {
					resolve();
				}
			} catch (e) {
				reject(e);
			}
		});
		// Handle confirmation logic here
	};

	return (
		<>
			{loading && <Loading />}
			{!loading && !notFound && (
				<>
					<PageDesc content="Chefs Single" />
					<Box sx={{ marginBlock: "70px" }}>
						<Container maxWidth="lg" sx={styles.chef__info__container}>
							<>
								<Box sx={{ width: { xxs: "100%", sm: "40%" }, height: "450px" }}>
									<img src={chefData.image} alt="" className="w-[100%] h-[100%]" />
								</Box>

								<Box className="story__text" sx={styles.homepage__story__text}>
									<Typography variant="h3" sx={{ ...styles.homepage__story__title, fontSize: "40px" }}>
										{chefData.name}
									</Typography>
									<Typography variant="p" sx={{ ...styles.homepage__story__desc, color: theme.palette.secondary.main, display: "block", marginBlock: "5px", fontSize: "25px" }}>
										{chefData.position}
									</Typography>
									<Typography variant="p" sx={{ ...styles.homepage__story__desc, fontSize: "16px", lineHeight: "10px" }}>
										{chefData.summary}
									</Typography>

									<Grid container sx={{ width: "100%", height: "auto", marginTop: "20px" }}>
										{[
											{ topic: " Experience", details: `${chefData["experience"]} Years of Experience`, icon: WorkOutlineOutlinedIcon },
											{ topic: "Mail", details: chefData["email"], icon: MailOutlineIcon },
											{ topic: "Contact Us", details: chefData["contact"], icon: LocalPhoneOutlinedIcon },
											{ topic: "Locate Us", details: chefData["location"], icon: PlaceOutlinedIcon },
										].map((e, index) => {
											return (
												<Grid item xxs={6} sx={{ marginBottom: "20px" }} key={index}>
													<SkillIcon subject={e.topic} details={e.details}>
														{<e.icon sx={{ ...styles.icon__style, color: theme.palette.white.main }} />}
													</SkillIcon>
												</Grid>
											);
										})}
									</Grid>
									<Box>
										{chefData.instagram && (
											<a href={chefData.instagram} target="_blank" rel="noreferrer" aria-label="Instagram icon">
												<p className="hidden">Chef's Instagram Profile</p>
												<InstagramIcon sx={{ ...styles.menu__icon, color: theme.palette.primary.main }} />
											</a>
										)}
										{chefData.facebook && (
											<a href={chefData.facebook} target="_blank" rel="noreferrer">
												<p className="hidden">Chef's Facebook Profile</p>
												<FacebookOutlinedIcon sx={{ ...styles.menu__icon, color: theme.palette.primary.main }} />
											</a>
										)}
										{chefData.twitter && (
											<a href={chefData.twitter} target="_blank" rel="noreferrer">
												<p className="hidden">Chef's Twitter Profile</p>
												<TwitterIcon sx={{ ...styles.menu__icon, color: theme.palette.primary.main }} />{" "}
											</a>
										)}
										{chefData.pinterest && (
											<a href={chefData.pinterest} target="_blank" rel="noreferrer">
												<p className="hidden">Chef's Pinterest Profile</p>
												<PinterestIcon sx={{ ...styles.menu__icon, color: theme.palette.primary.main }} />
											</a>
										)}
									</Box>

									{/* Edit and delete chef */}
									{isAdmin && (
										<Box sx={{ marginTop: "20px", display: "flex" }}>
											<Box onClick={() => navigate(`/chef/${chefData._id}/edit`)}>
												<CreateIcon sx={{ fontSize: "16px", marginRight: "5px", color: theme.palette.primary.main, "&:hover": { cursor: "pointer" } }} />
											</Box>

											<ConfirmationPopper
												anchor={<DeleteIcon sx={{ fontSize: "16px", color: theme.palette.error.main, "&:hover": { cursor: "pointer" } }} />}
												question={`Are you sure you want to delete this chef?`}
												confirm={deleteChef}
												proceedLink="/chefs"
												successMessage={`Chef of id ${chefId} has been deleted`}
											/>
										</Box>
									)}
								</Box>
							</>
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
			)}

			{!loading && notFound && <NotFound />}
		</>
	);
};

export default Chef;
