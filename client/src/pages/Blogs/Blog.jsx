import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import blogs from "../../data/blogData";
import { httpFetchABlog } from "../../hooks/requests/request";
import { useAdminContext } from "../../context/AdminContext";

import Loading from "../../components/Loading/Loading";
import BlogPreview from "./BlogPreview";
import ConfirmationPopper from "../../components/ConfirmPopup/Popper";

const BlogPage = ({ previewData }) => {
	const [blogData, setBlogData] = useState(previewData || {});
	const [loading, setLoading] = useState(true);
	const { blogId } = useParams();
	const navigate = useNavigate();
	const { isAdmin } = useAdminContext();

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

	function deleteBlog() {}
	return (
		<Box>
			{loading && <Loading />}
			{!loading && (
				<>
					<BlogPreview {...blogData} />
					{/* Edit and delete chef */}
					<Box sx={{ display: "flex", justifyContent: "center", marginBlock: "20px" }}>
						{isAdmin && (
							<Box sx={{ marginTop: "20px", display: "flex" }}>
								<Button href={`/blog/${blogData._id}/edit`} variant="outlined">
									Edit Blog
								</Button>

								<ConfirmationPopper
									anchor={<Button>Delete Blog</Button>}
									anchorType="button"
									question={`Are you sure you want to delete this blog?`}
									confirm={deleteBlog}
									proceedLink="/blogs"
									successMessage={`Blog of id ${blogId} has been deleted`}
								/>
							</Box>
						)}
					</Box>
				</>
			)}
		</Box>
	);
};

export default BlogPage;
