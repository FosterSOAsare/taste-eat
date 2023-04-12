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

				<Grid container sx={{ width: "100%", height: "auto", gap: "20px", justifyContent: "space-between", marginTop: "20px", alignItems: "center" }}>
					{gallery.map((item, index) => (
						<Grid item md={1.8} key={index} sx={{ background: "red" }}>
							<img src={`${item}?w=161&fit=crop&auto=format`} srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`} alt="" loading="lazy" />
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default InstagramGallery;
