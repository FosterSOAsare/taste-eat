import React, { useState } from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import styles from "../../app.styles";
import socialLinks from "../../data/socialLinks";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

import Logo from "../../assets/Logo.svg";
import Title from "../../components/Title/Title";
import Socials from "../Socials/Socials";
import Newsletter from "../Newsletter/Newsletter";
const Footer = () => {
	const theme = useTheme();
	const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
	const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));

	return (
		<>
			<Box sx={{ ...styles.footer, backgroundColor: theme.palette.footerBg.main, borderBottom: "1px solid #D5D5D5" }}>
				<Container maxWidth="lg" sx={{ width: "100%", height: "100%", paddingInline: { xxs: "25px", md: "0" } }}>
					<Grid container sx={{ width: "100%", height: "auto", paddingBlock: "30px" }}>
						{!isSmallScreen && (
							<Grid
								item
								sm={3}
								sx={{ display: "flex", alignItems: "center", justifyContent: "center", color: theme.palette.white.main, textDecoration: "underline", marginBottom: "30px" }}>
								<Typography variant="p">Instagram Feed</Typography>
							</Grid>
						)}
						<Grid item xxs={6} sx={{ display: "flex", justifyContent: { xxs: "flex-start", sm: "center" }, alignItems: "center", marginBottom: "30px" }}>
							<img src={Logo} alt="" className="w-[120px] sm:w-[210px]" />
						</Grid>
						<Grid item sm={3} xxs={6} sx={styles.footer__socials}>
							<Socials sx={{ color: theme.palette.white.main }} links={socialLinks} />
						</Grid>
						<Grid item sm={3} xxs={6} sx={{ display: "flex", alignItems: "flex-start", flexDirection: "column", order: 1 }}>
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
						<Grid item sm={6} xxs={12} sx={{ ...styles.footer__newsletter, order: { xxs: 2, sm: 1 }, marginTop: { xxs: "20px", sm: "0" } }}>
							<Newsletter />
						</Grid>
						<Grid item sm={3} xxs={6} sx={{ display: "flex", alignItems: "flex-end", flexDirection: "column", order: 1 }}>
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
				<Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: { xxs: "column", sm: "row" }, gap: "20px" }}>
					<Typography variant="p" sx={{ color: theme.palette.white.main, fontSize: "12px", textAlign: "center" }}>
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
