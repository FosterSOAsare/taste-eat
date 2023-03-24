import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../../app.styles";
const Error = ({ text, sx }) => {
	return (
		<Box sx={{ width: "100%", height: "50px", marginBlock: "10px", ...sx }}>
			<Typography variant="p" color="error">
				{text}
			</Typography>
		</Box>
	);
};

export default Error;
