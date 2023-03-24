import { Box, Container, Typography } from "@mui/material";
import React from "react";

import styles from "../../app.styles";

import Title from "../../components/Title/Title";

const BlogPreview = ({ title, imageUrl, summary, tag, content }) => {
	// let { tag, imageUrl, content, summary } = props;
	return (
		<Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", alignItems: "center", paddingBlock: "40px" }}>
			<Title text={tag} />
			{/* <Title text={blogData.date} /> */}
			<Typography variant="h1" sx={{ ...styles.title, fontSize: "42px", width: { sm: "50%" }, textAlign: "center", marginBottom: "10px" }}>
				{title}
			</Typography>
			<Typography variant="p" sx={{ ...styles.desc, width: { sm: "60%" }, textAlign: "center" }}>
				{summary}
			</Typography>
			<img alt="name" src={imageUrl} className="w-full h-[500px] my-[20px]" image={blogData?.imageUrl} />
			<Container maxWidth="md">
				<div dangerouslySetInnerHTML={{ __html: content }} className="ck-content"></div>
			</Container>
		</Container>
	);
};

export default BlogPreview;