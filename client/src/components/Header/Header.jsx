import React from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

import styles from "../../app.styles";
import Links from "../../data/links";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MenuIcon from "@mui/icons-material/Menu";

import Logo from "../../assets/Logo.svg";
import PhoneMenu from "./PhoneMenu";

const Header = () => {
	const theme = useTheme();
	const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
	const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
	return (
		<Box sx={{ ...styles.header, backgroundColor: theme.palette.primary.main, position: "relative" }}>
			<Container className="logo" maxWidth="lg" sx={styles.container}>
				<Box className="logo" sx={{ ...styles.logo__section }}>
					{!isMediumScreen && (
						<Button variant="outlined" color="secondary" sx={{ ...styles.button, color: theme.palette.white.main }}>
							Call +233 550529015
						</Button>
					)}
					<img src={Logo} alt="" className="w-[100px] md:w-[180px]" />
					{!isMediumScreen && (
						<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
							<Button variant="contained" color="secondary" sx={styles.button}>
								Reservation
							</Button>
						</Box>
					)}
					{isMobileScreen && (
						<Button sx={{ width: "50px" }} color="white">
							<MenuIcon />
						</Button>
					)}
				</Box>
			</Container>

			{!isMobileScreen && (
				<Box className="menu" sx={{ ...styles.menu }}>
					<Container className="logo" maxWidth="lg" sx={styles.menu__container}>
						<Box className="navigation" sx={{ width: { xs: "100%", sm: "auto" }, display: "flex", justifyContent: "space-between", gap: "30px" }}>
							{Links.map((link, index) => (
								<NavLink to={link.link} key={index} className="text-[14px] text-white hover:text-secondary  block">
									{link.name}
								</NavLink>
							))}
						</Box>

						{!isSmallScreen && (
							<Box>
								<InstagramIcon sx={{ ...styles.menu__icon, color: theme.palette.white.main }} />
								<FacebookOutlinedIcon sx={{ ...styles.menu__icon, color: theme.palette.white.main }} />
								<TwitterIcon sx={{ ...styles.menu__icon, color: theme.palette.white.main }} />
								<PinterestIcon sx={{ ...styles.menu__icon, color: theme.palette.white.main }} />
							</Box>
						)}
					</Container>
				</Box>
			)}

			{isMobileScreen && <PhoneMenu />}
		</Box>
	);
};

export default Header;
