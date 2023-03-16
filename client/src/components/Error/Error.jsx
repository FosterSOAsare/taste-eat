import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../../app.styles";
const Error = ({ text }) => {
	return (
		<Box sx={{ width: "100%", height: "50px", marginTop: "10px" }}>
			<Typography variant="p" color="error">
				{text}
			</Typography>
		</Box>
	);
};

export default Error;
