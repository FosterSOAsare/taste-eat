import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

import styles from "../../app.styles";

const Snackbar = ({ text }) => {
	const theme = useTheme();
	return (
		<Box sx={{ ...styles.snackbar, background: theme.palette.primary.main, borderColor: theme.palette.secondary.main }}>
			<Button sx={{ ...styles.snackbar__close }}>
				<CloseIcon sx={{ color: theme.palette.secondary.main }} />
			</Button>
			<Typography variant="p" sx={{ ...styles.desc, color: theme.palette.white.main }} color="white">
				{text}
			</Typography>
		</Box>
	);
};

export default Snackbar;
