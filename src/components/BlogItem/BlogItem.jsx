import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Title from "../Title/Title";
import styles from "../../app.styles";

const BlogItem = ({ image, desc, title, date, tag }) => {
	return (
		<Grid item md={5.8} sx={{ width: "100%", height: "100%", border: "1px solid #D5D5D5 " }}>
			<img src={image} alt="" className="w-[100%] h-[60%]" />
			<Box sx={{ height: "40%", width: "100%", padding: "20px" }}>
				<Title text={tag} sx={{ marginRight: "20px", fontSize: "10px" }} />
				<Title text={date} sx={{ fontSize: "10px" }} />
				<Typography variant="p" sx={{ ...styles.title, width: "60%", marginBlock: "5px 10px" }}>
					{title}
				</Typography>
				<Typography variant="p" sx={{ ...styles.desc, fontSize: "13px", lineHeight: "20px", width: "85%" }}>
					{desc}
				</Typography>
			</Box>
		</Grid>
	);
};

export default BlogItem;
