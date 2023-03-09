import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import styles from "../../app.styles";
import { useTheme } from "@mui/material/styles";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Logo from "../../assets/Logo.svg";
import Title from "../../components/Title/Title";

const Footer = () => {
	const theme = useTheme();
	return (
		<>
			<Box sx={{ ...styles.footer, backgroundColor: theme.palette.footerBg.main, borderBottom: "1px solid #D5D5D5" }}>
				<Container maxWidth="lg" sx={{ width: "100%", height: "100%" }}>
					<Grid container sx={{ width: "100%", height: "auto", paddingBlock: "30px" }}>
						<Grid item md={3} sx={{ display: "flex", alignItems: "center", justifyContent: "center", color: theme.palette.white.main, textDecoration: "underline", marginBottom: "30px" }}>
							<Typography variant="p">Instagram Feed</Typography>
						</Grid>
						<Grid item md={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "30px" }}>
							<img src={Logo} alt="" className="w-[210px]" />
						</Grid>
						<Grid item md={3} sx={styles.footer__socials}>
							<InstagramIcon sx={styles.menu__icon} />
							<FacebookOutlinedIcon sx={styles.menu__icon} />
							<TwitterIcon sx={styles.menu__icon} />
							<PinterestIcon sx={styles.menu__icon} />
						</Grid>
						<Grid item md={3} sx={{ display: "flex", alignItems: "flex-start", flexDirection: "column" }}>
							<Title text="Contact" sx={{ color: theme.palette.white.main }} />
							<Typography variant="p" sx={{ display: "block", color: theme.palette.white.main, marginTop: "20px" }}>
								5 Rue Dalou, 75015 Paris
							</Typography>
							<Typography variant="p" sx={{ color: theme.palette.secondary.main, display: "inline" }}>
								Call{" "}
								<Typography variant="p" sx={{ color: theme.palette.white.main }}>
									- +233 55 052 9015
								</Typography>
							</Typography>
							<Typography variant="p" sx={{ display: "block", color: theme.palette.secondary.main }}>
								benoit@mail.com
							</Typography>
						</Grid>
						<Grid item md={6} sx={styles.footer__newsletter}>
							<Typography variant="p" sx={{ color: theme.palette.white.main, width: "35%" }}>
								Join our mailing list for updates, Get news & offers events.
							</Typography>
							<Box sx={{ marginTop: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", width: "60%" }}>
								<input
									type="text"
									aria-label="Email address"
									placeholder="Email"
									className="h-full w-[70%] bg-transparent border-white border-[1px] px-[10px] focus:outline-none text-white"
								/>
								<Button color="white" sx={{ ...styles.button, width: "30%" }} variant="contained">
									Subscribe
								</Button>
							</Box>
						</Grid>
						<Grid item md={3} sx={{ display: "flex", alignItems: "flex-end", flexDirection: "column" }}>
							<Title text="Working Hours" sx={{ marginBottom: "20px", color: theme.palette.white.main }} />
							<Typography variant="p" sx={{ fontSize: "10px", color: theme.palette.secondary.main }}>
								Mon - Fri:
								<Typography variant="p" sx={{ color: theme.palette.white.main, marginLeft: "3px" }}>
									7.00am – 6.00pm
								</Typography>
							</Typography>
							<Typography variant="p" sx={{ fontSize: "10px", color: theme.palette.secondary.main }}>
								Sat:
								<Typography variant="p" sx={{ color: theme.palette.white.main, marginLeft: "3px" }}>
									8.30am – 5.00pm
								</Typography>
							</Typography>
							<Typography variant="p" sx={{ fontSize: "10px", color: theme.palette.secondary.main }}>
								Sun:
								<Typography variant="p" sx={{ color: theme.palette.white.main, marginLeft: "3px" }}>
									10.00am – 4.00pm
								</Typography>
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box sx={{ paddingBlock: "20px", backgroundColor: theme.palette.footerBg.main }}>
				<Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
					<Typography variant="p" sx={{ color: theme.palette.white.main, fontSize: "12px" }}>
						© Copyright - Restaurantate | Designed by{" "}
						<Typography variant="p" sx={{ color: theme.palette.secondary.main }}>
							VictorFlow
						</Typography>{" "}
						Templates - Powered by{" "}
						<Typography variant="p" sx={{ color: theme.palette.secondary.main }}>
							Webflow
						</Typography>
					</Typography>
					<Typography variant="p" sx={{ color: theme.palette.white.main, fontSize: "12px" }}>
						Styleguide / Licenses
					</Typography>
				</Container>
			</Box>
		</>
	);
};

export default Footer;
