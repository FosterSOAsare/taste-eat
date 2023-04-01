import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import styles from "../../app.styles";
import readImage from "../../hooks/readImage";

import Title from "../../components/Title/Title";

const BlogPreview = ({ title, imageUrl, summary, tag, content, date, image }) => {
	let [imageData, setImageData] = useState(imageUrl || null);

	useEffect(() => {
		image &&
			(async function () {
				setImageData(await readImage(image));
			})();
	}, [image]);
	if (!date) date = new Date();

	const options = { month: "short", day: "numeric", year: "numeric" };
	date = new Intl.DateTimeFormat("en-US", options).format(new Date(date));
	return (
		<Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", alignItems: "center", paddingBlock: "40px" }}>
			<Box sx={{ display: "flex", gap: "25px" }}>
				<Title text={tag} />
				<Title text={date} />
			</Box>
			<Typography variant="h1" sx={{ ...styles.title, fontSize: { xxs: "32px", md: "42px" }, width: { xxs: "100%", sm: "80%", md: "60%" }, textAlign: "center", marginBlock: "10px" }}>
				{title}
			</Typography>
			<Typography variant="p" sx={{ ...styles.desc, width: { sm: "60%", xxs: "100%" }, textAlign: { md: "center" } }}>
				{summary}
			</Typography>
			{imageData && <img alt="name" src={imageData} className="w-full md:h-[500px] my-[20px]" image={imageUrl} crossOrigin="true" />}
			{!imageData && (
				<Box sx={{ width: "100%", height: "200px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px dashed grey", marginBlock: "30px" }}>
					<Typography variant="h4">No Lead Image Yet...</Typography>
				</Box>
			)}
			<Container maxWidth="md">
				<div dangerouslySetInnerHTML={{ __html: content }} className="ck-content md:p-[20px 40px]"></div>
			</Container>
		</Container>
	);
};

export default BlogPreview;
