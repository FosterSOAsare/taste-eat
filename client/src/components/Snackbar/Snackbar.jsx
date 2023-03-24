import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

import styles from "../../app.styles";
import { useNavigate } from "react-router-dom";

const Snackbar = ({ text, link, close }) => {
	const [desc, setDesc] = useState(text);
	const theme = useTheme();
	const navigate = useNavigate();
	useEffect(() => {
		link &&
			setTimeout(() => {
				setDesc("Redirecting...");
				setTimeout(() => {
					navigate(link);
				}, 1000);
			}, 1000);
	}, []);
	return (
		<Box sx={{ ...styles.snackbar, background: theme.palette.primary.main, borderColor: theme.palette.secondary.main }}>
			<Button sx={{ ...styles.snackbar__close }} onClick={() => close()}>
				<CloseIcon sx={{ color: theme.palette.secondary.main }} />
			</Button>
			<Typography variant="p" sx={{ ...styles.desc, color: theme.palette.white.main }} color="white">
				{desc}
			</Typography>
		</Box>
	);
};

export default Snackbar;
