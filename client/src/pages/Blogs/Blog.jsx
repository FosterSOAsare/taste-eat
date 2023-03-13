import React, { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import blogs from "../../data/blogData";
import Title from "../../components/Title/Title";
import Loading from "../../components/Loading/Loading";

const BlogPage = () => {
	const [blogData, setBlogData] = useState({});
	const [loading, setLoading] = useState(true);
	const { blogId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		let blog = blogs.find((e) => e.id == blogId);
		setLoading(false);
		if (!blog) {
			navigate("/404");
			return;
		}

		setBlogData(blog);
	}, [blogId]);
	return (
		<Box>
			{loading && <Loading />}
			{!loading && (
				<Container maxWidth="lg">
					<Title text={blogData.tag} />
					<Title text={blogData.date} />
					<Typography variant="h1">{blogData.title}</Typography>
					<Typography variant="p">{blogData.desc}</Typography>
					<img alt="name" src={blogData.image} />
				</Container>
			)}
		</Box>
	);
};

export default BlogPage;
