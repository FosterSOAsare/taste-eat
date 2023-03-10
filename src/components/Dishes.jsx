import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../app.styles";
import LineImage from "../assets/Line.png";

const Dishes = ({ type, dishes }) => {
	return (
		<Box sx={{ width: "100%", marginBottom: "20px" }}>
			<Typography variant="h3" sx={{ fontSize: "24px", marginBottom: "20px", fontFamily: "'Cormorant Infant', serif !important", fontWeight: "bold" }}>
				{type}
			</Typography>
			<Box sx={{ width: "100%" }}>
				{dishes.map((dish, index) => (
					<Box key={index} sx={{ width: "100%", display: "flex", alignItems: "flex-end", marginBottom: "20px" }}>
						<img src={dish.image} alt="" className="block mr-[10px] w-[50px] h-[50px]" />
						<Box sx={{ width: "70%", paddingRight: "10px" }}>
							<Typography variant="p" sx={{ ...styles.title, fontWeight: "bold", fontSize: "18px" }}>
								{dish.name}
							</Typography>
							<Box sx={{ display: "flex", alignItems: "center" }}>
								<Typography variant="p" sx={{ ...styles.desc, fontSize: "12px", width: "47%", wordWrap: "wrap" }}>
									{dish.description}
								</Typography>
								<img src={LineImage} alt="" className="inline h-[2px] w-[50%]" />
							</Box>
						</Box>
						<Box>
							<Typography variant="p" sx={{ ...styles.title, fontWeight: "bold", fontSize: "18px" }}>
								${dish.price}
							</Typography>
						</Box>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default Dishes;
