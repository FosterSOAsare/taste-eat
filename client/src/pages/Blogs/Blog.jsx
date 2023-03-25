import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import blogs from "../../data/blogData";
import { httpDeleteABlog, httpFetchABlog } from "../../hooks/requests/request";
import { useAdminContext } from "../../context/AdminContext";
import { useTheme } from "@mui/material/styles";

import Loading from "../../components/Loading/Loading";
import BlogPreview from "./BlogPreview";
import ConfirmationPopper from "../../components/ConfirmPopup/Popper";
import styles from "../../app.styles";

const BlogPage = ({ previewData }) => {
	const [blogData, setBlogData] = useState(previewData || {});
	const [loading, setLoading] = useState(true);
	const { blogId } = useParams();
	const navigate = useNavigate();
	const theme = useTheme();
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

	function deleteBlog() {
		return new Promise(async (resolve, reject) => {
			try {
				let res = await httpDeleteABlog(blogData._id);
				if (res.error) {
					reject(res.error);
				} else {
					resolve();
				}
			} catch (e) {
				reject(e);
			}
		});
	}
	return (
		<Box>
			{loading && <Loading />}
			{!loading && (
				<>
					<BlogPreview {...blogData} />
					{/* Edit and delete chef */}
					<Box sx={{ display: "flex", justifyContent: "center", marginBlock: "20px" }}>
						{isAdmin && (
							<Box sx={{ marginBlock: "40px", display: "flex", gap: "20px" }}>
								<Button href={`/blog/${blogData._id}/edit`} variant="outlined" sx={{ ...styles.button, paddingInline: "20px" }}>
									Edit Blog
								</Button>

								<ConfirmationPopper
									anchor={
										<Button sx={{ ...styles.button, paddingInline: "20px" }} color="secondary" variant="contained">
											Delete Blog
										</Button>
									}
									anchorType="button"
									question={`Are you sure you want to delete this blog?`}
									confirm={deleteBlog}
									proceedLink="/blogs"
									successMessage={`Blog of id ${blogId} has been deleted`}
									sx={{ background: theme.palette.primary.main }}
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
