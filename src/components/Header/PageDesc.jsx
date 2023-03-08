import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../../app.styles";
import { useTheme } from "@mui/material/styles";

const PageDesc = ({ content }) => {
	const theme = useTheme();
	return (
		<Box className="pageDescription" sx={{ ...styles.page__desc, backgroundColor: theme.palette.primary.main }}>
			<Box sx={{ ...styles.desc__container, borderColor: theme.palette.secondary.main }}>
				<Typography variant="h3" component="h3" sx={{ color: theme.palette.white.main, ...styles.desc__text }}>
					{content}
				</Typography>
			</Box>
		</Box>
	);
};

export default PageDesc;
