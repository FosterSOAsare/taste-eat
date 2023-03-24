import React, { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import blogs from "../../data/blogData";
import { httpFetchABlog } from "../../hooks/requests/request";

import Loading from "../../components/Loading/Loading";
import BlogPreview from "./BlogPreview";

const BlogPage = ({ previewData }) => {
	const [blogData, setBlogData] = useState(previewData || {});
	const [loading, setLoading] = useState(true);
	const { blogId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		(async function () {
			let res = await httpFetchABlog(blogId);
			setLoading(false);
			if (res.error) {
				navigate("/404");
				return;
			}
			setBlogData(res);
		})();
	}, []);
	return (
		<Box>
			{loading && <Loading />}
			{!loading && <BlogPreview {...{ ...blogData }} />}
		</Box>
	);
};

export default BlogPage;
