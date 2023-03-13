import React from "react";
import Typography from "@mui/material/Typography";
import styles from "../../app.styles";
import { useTheme } from "@mui/material/styles";

const Title = ({ text, sx }) => {
	const theme = useTheme();
	return (
		<Typography variant="h3" sx={{ ...styles.section__title, borderBlock: `2px solid ${theme.palette.secondary.main}`, ...sx }}>
			{text.toUpperCase()}
		</Typography>
	);
};

export default Title;
