import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Container, Typography, TextField, Button, Grid } from "@mui/material";

import styles from "../../app.styles";
import PageDesc from "../../components/Header/PageDesc";
import Title from "../../components/Title/Title";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

import LARestaurantImage from "../../assets/la-restaurant.png";
import SFRestaurantImage from "../../assets/sf-restaurant.png";

const ContactUsPage = () => {
	const theme = useTheme();
	return (
		<>
			<PageDesc content="Contact Us"></PageDesc>
			<Box sx={{ marginBlock: { xxs: "30px", sm: "100px" } }}>
				<Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", height: "auto", flexDirection: { xxs: "column", sm: "row" } }}>
					<Box
						sx={{
							width: { xxs: "100%", sm: "42%" },
							height: { sm: "500px", md: "100%" },
							background: "#FFF8F5",
							padding: { xxs: "40px", xs: "40px 20px", md: "40px" },
						}}>
						<Typography variant="h3" sx={{ ...styles.title, fontSize: "28px", marginBottom: "10px" }}>
							Contact Information
						</Typography>
						<Typography variant="p" sx={{ ...styles.desc, fontSize: "15px", marginBottom: "20px" }}>
							Bring the table winwin survival strateges ensure proactive domination the end of the day going real times multiple touchpoints.
						</Typography>

						<Box className="details">
							{[
								{
									icon: LocationOnOutlinedIcon,
									text: "Riverside 25 , San Francisco , California",
								},
								{
									icon: MailOutlineOutlinedIcon,
									text: "evanmattew@mail.com",
								},
								{
									icon: CallOutlinedIcon,
									text: "800-234-567",
								},
							].map((detail, index) => (
								<Box key={index} sx={{ display: "flex", marginBottom: "20px", gap: "15px", alignItems: "center" }}>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											width: "40px",
											height: "40px",
											backgroundColor: theme.palette.primary.main,
											borderRadius: "50%",
										}}>
										<detail.icon sx={{ color: theme.palette.white.main, fontSize: "24px" }}></detail.icon>
									</Box>
									<Typography variant="p" sx={{ ...styles.desc, width: "calc(100% - 70px)", fontSize: "15px" }}>
										{detail.text}
									</Typography>
								</Box>
							))}
						</Box>

						<Box
							className="socials"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "flex-start",
								width: "100%",
								height: "40px",
								gap: "20px",
							}}>
							{[
								{
									icon: InstagramIcon,
									link: "http://instagram.com",
								},
								{
									icon: FacebookOutlinedIcon,
									link: "http://facebook.com",
								},
								{
									icon: TwitterIcon,
									link: "http://twitter.com",
								},
								{
									icon: PinterestIcon,
									link: "http://pinterest.com",
								},
							].map((detail, index) => (
								<Box
									key={index}
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										width: "40px",
										height: "40px",
										backgroundColor: "#292E3624",
										borderRadius: "50%",
									}}>
									<a href={detail.link} target="_blank" rel="noreferrer">
										<p style={{ display: "none" }}>{detail.link}</p>
										<detail.icon sx={{ color: theme.palette.primary.main, fontSize: "16px" }}></detail.icon>
									</a>
								</Box>
							))}
						</Box>
					</Box>
					<Box
						sx={{
							width: { xxs: "100%", sm: "55%" },
							height: "100%",
							display: "flex",
							alignItems: { xxs: "center", sm: "flex-start" },
							flexDirection: "column",
							marginTop: { xxs: "30px", sm: 0 },
						}}>
						<Title text="mail" />
						<Typography variant="h3" sx={{ ...styles.title, marginBlock: "20px", fontSize: "24px" }}>
							Have a Question?
						</Typography>
						<Grid container>
							{[{ text: "Name" }, { text: "Email" }, { text: "Subject" }, { text: "Phone" }].map((e, index) => {
								return (
									<Grid
										item
										key={index}
										xxs={12}
										xs={12}
										md={6}
										sx={{ height: "auto", marginBottom: "20px", justifyContent: (index + 1) % 2 === 0 ? "flex-end" : "flex-start", display: "flex" }}>
										<input style={styles.input__field} className="focus:outline-none w-full md:w-[97%] " placeholder={e.text} aria-label={e.text}></input>
									</Grid>
								);
							})}
							<Grid
								item
								xxs={12}
								sx={{
									height: "auto",
									marginBottom: "20px",
									"& .MuiInputBase-root": { minHeight: "120px", alignItems: "flex-start", borderRadius: 0, "&:hover": { outline: "none" } },
								}}>
								<TextField sx={{ width: "100%", borderRadius: 0 }} multiline className="focus:outline-none" placeholder="Message" aria-label="Enter message here"></TextField>
							</Grid>
						</Grid>
						<Button variant="outlined" color="secondary" sx={{ ...styles.button, paddingInline: "30px" }}>
							Send
						</Button>
					</Box>
				</Container>
			</Box>
			<Box sx={{ paddingBlock: { xxs: "30px", sm: "100px" }, backgroundColor: theme.palette.primary.main }}>
				<Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
					<Title text="Visit us" sx={{ color: theme.palette.white.main }} />
					<Typography variant="h3" sx={{ ...styles.title, fontSize: "28px", marginTop: "20px" }} color={theme.palette.white.main}>
						Come and visit our Branches
					</Typography>

					<Grid container sx={{ gap: "20px", justifyContent: "space-between", marginTop: "20px" }}>
						{[
							{
								title: "Los Angeles, CA",
								loc: "Riverside 25, San Francisco California",
								mail: "contact@restaurantate.com",
								phone: "(487) 870 - 1087",
								image: LARestaurantImage,
							},
							{
								title: "San Francisco, CA",
								loc: "Riverside 25, San Francisco California",
								mail: "contact@restaurantate.com",
								phone: "(487) 870 - 1087",
								image: SFRestaurantImage,
							},
						].map((e, index) => (
							<Grid
								item
								md={5.8}
								sx={{
									width: "100%",
									height: { xxs: "auto", xs: "300px" },
									border: `2px solid #C4C4C4ff`,
									display: "flex",
									alignItems: "center",
									flexDirection: { xxs: "column ", xs: "row" },
								}}
								key={index}>
								<Box sx={{ width: { xxs: "100%", sx: "50%" }, padding: "20px", order: { xxs: 2, xs: 1 } }}>
									<Typography variant="h3" sx={{ ...styles.title, fontSize: "24px", marginBottom: "10px" }} color={theme.palette.white.main}>
										{e.title}
									</Typography>
									<Typography variant="p" sx={{ ...styles.desc, fontSize: "16px", opacity: "0.7", lineHeight: "20px", marginBottom: "20px" }} color={theme.palette.white.main}>
										{e.loc}
									</Typography>
									<Box sx={{ display: "flex", gap: "5px", alignItems: "center", marginBottom: "20px" }}>
										<MailOutlineOutlinedIcon color="secondary" />
										<Typography variant="p" sx={{ ...styles.desc }} color={theme.palette.white.main}>
											{e.mail}
										</Typography>
									</Box>
									<Box sx={{ display: "flex", gap: "5px", alignItems: "center", marginBottom: "20px" }} color={theme.palette.white.main}>
										<CallOutlinedIcon color="secondary" />
										<Typography variant="p" sx={{ ...styles.desc }}>
											{e.phone}
										</Typography>
									</Box>
								</Box>
								<Box sx={{ width: { xxs: "100%", sx: "50%" }, height: { xxs: "400px", xs: "100%" }, order: { xxs: 1, xs: 2 } }}>
									<img src={e.image} alt="" className="w-full h-full" />
								</Box>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default ContactUsPage;
