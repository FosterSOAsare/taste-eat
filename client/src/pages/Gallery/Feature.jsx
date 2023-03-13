import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Title from "../../components/Title/Title";
import styles from "../../app.styles";

const Feature = ({ img, title, desc, link, order }) => {
	return (
		<Box sx={styles.gallery__feature}>
			<Box sx={{ width: "50%", order: order === 1 ? 2 : 1, paddingInline: order === 2 ? "0px" : "25px" }}>
				<Title text="feature" />
				<Typography variant="h3" sx={{ ...styles.title, width: "80%", marginTop: "10px", fontSize: "50px" }}>
					{title}
				</Typography>
				<Typography variant="p" sx={{ ...styles.desc, fontSize: "16px", width: "85%", marginBlock: "20px" }}>
					{desc}
				</Typography>
				<Button variant="outlined" color="secondary" sx={{ ...styles.button }}>
					View Menu
				</Button>
			</Box>
			<Box sx={{ width: "50%", height: "100%", order }}>
				<img src={img} alt="" className="w-full h-full" />
			</Box>
		</Box>
	);
};

export default Feature;
