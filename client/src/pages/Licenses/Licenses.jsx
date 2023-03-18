import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

import styles from "../../app.styles";

const LicensesPage = () => {
	return (
		<Box sx={{ marginBlock: "120px" }}>
			<Container maxWidth="lg">
				<Grid container>
					<Grid item md={4} sx={{ marginBottom: { xs: "20px", md: "90px" } }}>
						<Typography variant="h3" sx={{ ...styles.title, fontSize: "38px", fontWeight: "bold" }}>
							Icons & Graphics
						</Typography>
					</Grid>
					<Grid item md={8} sx={{ marginBottom: "90px" }}>
						<Typography variant="p">
							All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below
						</Typography>
						<Typography variant="p" sx={{ display: "block", marginTop: "7px" }}>
							<Typography variant="span" sx={{ fontWeight: "bold" }}>
								Icons8:{" "}
							</Typography>
							License
						</Typography>
						<Typography variant="p" sx={{ display: "block", marginTop: "7px" }}>
							<Typography variant="span" sx={{ fontWeight: "bold" }}>
								Ionicons:{" "}
							</Typography>
							License
						</Typography>
					</Grid>
					<Grid item md={4} sx={{ marginBottom: { xs: "20px", md: "90px" } }}>
						<Typography variant="h3" sx={{ ...styles.title, fontSize: "38px", fontWeight: "bold" }}>
							Photography
						</Typography>
					</Grid>
					<Grid item md={8} sx={{ marginBottom: "90px" }}>
						<Typography variant="p">
							All images used in the Restaurantate Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses
							and download the images for free on Unsplash, Pexels.
						</Typography>
						<Typography variant="p" sx={{ display: "block", marginTop: "7px" }}>
							<Typography variant="span" sx={{ fontWeight: "bold" }}>
								Unsplash:{" "}
							</Typography>
							License
						</Typography>
						<Typography variant="p" sx={{ display: "block", marginTop: "7px" }}>
							<Typography variant="span" sx={{ fontWeight: "bold" }}>
								Pexels:{" "}
							</Typography>
							License
						</Typography>
					</Grid>
					<Grid item md={4} sx={{ marginBottom: { xs: "20px", md: "0" } }}>
						<Typography variant="h3" sx={{ ...styles.title, fontSize: "38px", fontWeight: "bold" }}>
							Fonts
						</Typography>
					</Grid>
					<Grid item md={8}>
						<Typography variant="p">Restaurantate template uses free licensed Google Fonts. Please check Cormorant Garamond and Josefin Sans</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default LicensesPage;
