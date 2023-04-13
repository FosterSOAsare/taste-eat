import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import Title from "../../components/Title/Title";
import styles from "../../app.styles";
import gallery from "../../data/gallery";
import { useTheme } from "@mui/material/styles";

const InstagramGallery = () => {
	const theme = useTheme();
	return (
		<Box className="stories" sx={{ ...styles.blogpage__stories }}>
			<Container maxWidth="lg" sx={{ ...styles.blogpage__reservation__container }}>
				<Title text="stories" sx={{ color: theme.palette.primary.main }} />
				<Typography variant="p" sx={{ color: theme.palette.primary.main, ...styles.title, marginTop: "5px", fontSize: "24px" }}>
					Instagram Gallery
				</Typography>

				<Grid container sx={{ width: "100%", height: "auto", justifyContent: "space-between", marginTop: "20px", alignItems: "center" }}>
					{gallery.map((item, index) => {
						return (
							<Grid
								item
								xxs={12}
								md={2}
								sm={6}
								key={index}
								sx={{
									height: {
										xxs: "200px",
										md: index % 2 === 0 ? "130px" : "200px",
									},
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									marginBottom: { xxs: "40px", md: 0 },
								}}>
								<Box sx={{ height: "100%", width: "90%" }}>
									<img src={item} srcSet={item} alt="" loading="lazy" className="w-full h-full block" />
								</Box>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</Box>
	);
};

export default InstagramGallery;
