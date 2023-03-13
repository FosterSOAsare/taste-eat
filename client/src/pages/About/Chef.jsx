import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../../app.styles";
import { Link } from "react-router-dom";

const Chef = ({ img, name, position, index }) => {
	return (
		<Link to={`/chef/${index}`}>
			<Box sx={styles.chef} id={index}>
				<img src={img} alt="" className="w-full h-[200px]" />
				<Typography variant="h3" sx={{ ...styles.title, fontSize: "20px", marginTop: "10px" }}>
					{name}
				</Typography>
				<Typography variant="h3" sx={{ ...styles.desc, fontSize: "13px" }}>
					{position}
				</Typography>
			</Box>
		</Link>
	);
};

export default Chef;
