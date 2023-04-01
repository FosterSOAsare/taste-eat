import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Title from "../Title/Title";
import styles from "../../app.styles";
import { Link } from "react-router-dom";

const BlogItem = ({ imageUrl, summary, title, date, tag, _id, index }) => {
	// Formatting date
	const options = { month: "short", day: "numeric", year: "numeric" };
	date = new Intl.DateTimeFormat("en-US", options).format(new Date(date));

	return (
		<Grid item xxs={12} sm={6} sx={{ width: "100%", display: "flex", height: "auto", justifyContent: (index + 1) % 2 == 0 ? "flex-end" : "flex-start", marginBottom: "20px" }}>
			<Box sx={{ width: "98%", border: "1px solid #D5D5D5", height: "100%" }}>
				<Link to={`/blog/${_id}`}>
					<img src={imageUrl} alt="" className="w-[100%] h-[250px] md:h-[300px]" crossOrigin="true" />
					<Box sx={{ height: { xxs: "45%", sm: "45%", md: "40%" }, width: "100%", padding: "20px" }}>
						<Title text={tag} sx={{ marginRight: "20px", fontSize: "10px" }} />
						<Title text={date} sx={{ fontSize: "10px" }} />
						<Typography variant="p" sx={{ ...styles.title, width: { md: "60%" }, marginBlock: "5px 10px" }}>
							{title}
						</Typography>
						<Typography variant="p" sx={{ ...styles.desc, fontSize: "13px", lineHeight: "20px", width: { md: "85%" } }}>
							{summary}
						</Typography>
					</Box>
				</Link>
			</Box>
		</Grid>
	);
};

export default BlogItem;
