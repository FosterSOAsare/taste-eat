import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../../app.styles";
import { useTheme } from "@mui/material/styles";

const Contact = ({ img, title, desc }) => {
	const theme = useTheme();
	return (
		<Box sx={styles.homepage__about__contact}>
			<Box sx={{ ...styles.homepage__contact__icon, backgroundColor: theme.palette.primary.main }}>
				<img src={img} alt="" className="w-[20px]" />
			</Box>
			<Box>
				<Typography variant="h3" sx={styles.homepage__contact__title}>
					{title}
				</Typography>
				<Typography variant="p" sx={styles.homepage__contact__desc}>
					{desc}
				</Typography>
			</Box>
		</Box>
	);
};

export default Contact;
