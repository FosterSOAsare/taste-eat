import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import styles from "../../app.styles";
import Title from "../Title/Title";

import testimonials from "../../data/testimonials";

const Testimonials = () => {
	const [left, setLeft] = useState(0);
	const theme = useTheme();

	function slideLeft() {
		setLeft(left + 100);
	}
	function slideRight() {
		setLeft(left - 100);
	}
	return (
		<Box sx={{ ...styles.aboutpage__section, background: theme.palette.primary.main, paddingBlock: "80px" }} className="testimonias">
			<Container maxWidth="md" sx={{ ...styles.aboutpage__container }}>
				<Title text="testimonial" sx={{ color: theme.palette.white.main }} />
				<Typography variant="p" sx={{ ...styles.title, display: "block", fontWeight: "bold", fontSize: "28px", marginBottom: "10px", color: theme.palette.white.main }}>
					What Our Clients Say
				</Typography>
				<div style={styles.about__slider}>
					<Box style={{ ...styles.slider__container, width: `${testimonials.length * 100}%`, marginLeft: `${left}%`, transition: "all 0.5s ease" }}>
						{testimonials.map((testimonial, index) => (
							<Box key={index} sx={{ ...styles.about__testimonial, width: `${100 / testimonials.length}%` }}>
								<Typography variant="p" sx={{ ...styles.title, textAlign: "center", width: "80%", color: theme.palette.white.main, marginBottom: "15px" }}>
									{testimonial.comment}
								</Typography>
								<img src={testimonial.image} alt="" className="w-[50px] h-[50px]" />

								<Typography variant="p" sx={{ ...styles.desc, color: theme.palette.white.main, marginTop: "10px" }}>
									{testimonial.name}
								</Typography>
								<Typography variant="p" sx={{ ...styles.desc, color: theme.palette.secondary.main }}>
									{testimonial.position}
								</Typography>
							</Box>
						))}
					</Box>
					{left !== 0 && (
						<Box sx={{ ...styles.slider__control, left: 0, color: theme.palette.secondary.main }}>
							<KeyboardArrowLeftIcon sx={{ fontSize: "50px", marginTop: { xxs: "40px", sm: 0 } }} onClick={slideLeft} />
						</Box>
					)}
					{left !== -(testimonials.length - 1) * 100 && (
						<Box sx={{ ...styles.slider__control, right: 0, color: theme.palette.secondary.main }}>
							<KeyboardArrowRightIcon sx={{ fontSize: "50px", marginTop: { xxs: "40px", sm: 0 } }} onClick={slideRight} />
						</Box>
					)}
				</div>
			</Container>
		</Box>
	);
};

export default Testimonials;
