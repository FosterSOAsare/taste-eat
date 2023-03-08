import React from "react";
import Logo from "../../assets/Logo.svg";
import { Box, Container, Button, Typography } from "@mui/material";
import styles from "../../app.styles";
import { useTheme } from "@mui/material/styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Links from "./links";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { flex } from "../../app.styles";

const Header = () => {
	const theme = useTheme();
	return (
		<Box sx={{ ...styles.header, backgroundColor: theme.palette.primary.main }}>
			<Container className="logo" maxWidth="lg" sx={styles.container}>
				<Box className="logo" sx={styles.logo__section}>
					<Button variant="outlined" color="secondary" sx={{ ...styles.button, color: theme.palette.white.main }}>
						Call +233 550529015
					</Button>
					<img src={Logo} alt="" className="w-[180px]" />
					<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
						<ShoppingCartOutlinedIcon sx={{ ...styles.icon }} color="white" />
						<Button variant="contained" color="secondary" sx={styles.button}>
							Reservation
						</Button>
					</Box>
				</Box>
			</Container>
			<Box className="menu" sx={{ ...styles.menu }}>
				<Container className="logo" maxWidth="lg" sx={styles.menu__container}>
					<nav className="navigation ">
						{Links.map((link, index) => (
							<a href={link.link} key={index} className="text-[14px] text-white hover:text-secondary mr-[30px]">
								{link.name}
							</a>
						))}
					</nav>

					<Box>
						<InstagramIcon sx={styles.menu__icon} />
						<FacebookOutlinedIcon sx={styles.menu__icon} />
						<TwitterIcon sx={styles.menu__icon} />
						<PinterestIcon sx={styles.menu__icon} />
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default Header;
