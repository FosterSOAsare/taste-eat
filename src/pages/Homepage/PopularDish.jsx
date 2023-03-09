import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../../app.styles";
import { useTheme } from "@mui/material/styles";

const PopularDish = ({ image, name, price, desc }) => {
	const theme = useTheme();
	return (
		<Box sx={styles.popular__dish}>
			<img src={image} alt="" />
			<Box sx={{ ...styles.popular__dish__top }}>
				<Typography variant="p" sx={{ ...styles.title }}>
					{name}
				</Typography>
				<Typography variant="p" sx={{ ...styles.title }}>
					${price}
				</Typography>
			</Box>
			<Typography variant="p" sx={{ ...styles.desc, fontSize: "12px", marginTop: "5px", lineHeight: "15px" }}>
				{desc}
			</Typography>
		</Box>
	);
};

export default PopularDish;
