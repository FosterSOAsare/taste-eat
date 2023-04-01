import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Title from "../../components/Title/Title";
import styles from "../../app.styles";

const Feature = ({ img, title, desc, link, order }) => {
	return (
		<Box sx={{ ...styles.gallery__feature }}>
			<Box sx={{ width: { xxs: "100%", sm: "50%" }, order: { xxs: 2, sm: order === 1 ? 2 : 1 }, paddingInline: { sm: order === 2 ? "0px" : "25px" }, marginBlock: { xxs: "30px", sm: 0 } }}>
				<Title text="feature" />
				<Typography variant="h3" sx={{ ...styles.title, width: { xxs: "100%", md: "80%" }, marginTop: "10px", fontSize: { xxs: "28px", sm: "32px", md: "50px" } }}>
					{title}
				</Typography>
				<Typography variant="p" sx={{ ...styles.desc, fontSize: { xxs: "14px", sm: "16px" }, width: { xxs: "100%", md: "85%" }, marginBlock: "20px" }}>
					{desc}
				</Typography>
				<Button variant="outlined" color="secondary" sx={{ ...styles.button }} href="/menu">
					View Menu
				</Button>
			</Box>
			<Box sx={{ width: { sm: "50%", xxs: "100%" }, height: { sm: "100%", xxs: "250px" }, order: { xxs: 1, sm: order } }}>
				<img src={img} alt="" className="w-full h-full" crossOrigin="true" />
			</Box>
		</Box>
	);
};

export default Feature;
