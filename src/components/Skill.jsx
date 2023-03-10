import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import styles from "../app.styles";

const Skill = ({ title, value }) => {
	const theme = useTheme();
	return (
		<Box sx={{ width: "100%", height: "auto" }}>
			<Typography variant="p" sx={{ ...styles.title }}>
				{title}
			</Typography>
			<Box sx={{ width: "100%", height: "3px", backgroundColor: "#C4C4C4" }}>
				<Box sx={{ width: `${value}%`, height: "100%", background: theme.palette.primary.main }}></Box>
			</Box>
		</Box>
	);
};

export default Skill;
