import React from "react";
import styles from "../../app.styles";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const Testimonial = ({ name, image, location, comment }) => {
	const theme = useTheme();
	return (
		<Box sx={{ ...styles.testimonial, backgroundColor: theme.palette.background3.main }}>
			<Box sx={{ ...styles.testimonial__top }}>
				<img src={image} alt="" className="w-[50px] mr-[10px]" crossOrigin="true" />
				<Box>
					<Typography variant="h3" sx={{ ...styles.title, fontSize: "18px", margin: "0" }}>
						{name}
					</Typography>
					<Typography variant="p" sx={{ ...styles.desc, fontSize: "12px", color: theme.palette.secondary.main, fontWeight: "regular" }}>
						{location}
					</Typography>
				</Box>
			</Box>

			<Typography variant="h3" sx={{ ...styles.testimonial__comment }}>
				{`" ${comment}`}
			</Typography>
		</Box>
	);
};

export default Testimonial;
