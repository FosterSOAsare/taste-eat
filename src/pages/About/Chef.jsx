import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../../app.styles";

const Chef = ({ img, name, position }) => {
	return (
		<Box sx={styles.chef}>
			<img src={img} alt="" className="w-full h-[200px]" />
			<Typography variant="h3" sx={{ ...styles.title, fontSize: "20px", marginTop: "10px" }}>
				{name}
			</Typography>
			<Typography variant="h3" sx={{ ...styles.desc, fontSize: "13px" }}>
				{position}
			</Typography>
		</Box>
	);
};

export default Chef;
