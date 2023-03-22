import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTheme } from "@emotion/react";

import styles from "../../app.styles";
import Links from "../../data/links";

import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MenuIcon from "@mui/icons-material/Menu";

const PhoneMenu = () => {
	const theme = useTheme();
	return (
		<Box sx={{ ...styles.phone__menu, background: theme.palette.footerBg.main }}>
			<Box className="top" sx={{ width: "100%", height: "70px", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
				<Button sx={{ ...styles.button }}>
					<CloseIcon color="secondary" sx={{ fontSize: "24px" }} />
				</Button>
			</Box>
			<Box className="navigation" sx={{ paddingTop: "20px" }}>
				{Links.map((link, index) => (
					<NavLink to={link.link} key={index} className="text-[14px] text-white hover:text-secondary  block mx-[20px] mb-[40px] uppercase">
						{link.name}
					</NavLink>
				))}
			</Box>
			<Box sx={{ paddingInline: "20px" }}>
				<InstagramIcon sx={{ ...styles.menu__icon, color: theme.palette.white.main, marginRight: "20px" }} />
				<FacebookOutlinedIcon sx={{ ...styles.menu__icon, color: theme.palette.white.main, marginRight: "20px" }} />
				<TwitterIcon sx={{ ...styles.menu__icon, color: theme.palette.white.main, marginRight: "20px" }} />
				<PinterestIcon sx={{ ...styles.menu__icon, color: theme.palette.white.main }} />
			</Box>
		</Box>
	);
};

export default PhoneMenu;
