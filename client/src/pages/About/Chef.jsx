import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../../app.styles";
import { Link } from "react-router-dom";

const Chef = ({ image, name, position, _id }) => {
	return (
		<Link to={`/chef/${_id}`}>
			<Box sx={styles.chef} id={_id}>
				<img src={image} alt="" className="w-full h-[200px]" crossOrigin="true" />
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
