import React, { useEffect, useState, useReducer } from "react";
import { Box, Container, Typography, useTheme, TextField, Button } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";

import styles from "../../app.styles";
import { httpStoreBlog, httpFetchABlog, httpUpdateBlog } from "../../hooks/requests/request";
import { statusFunc } from "../../components/Snackbar/status.service";

import Title from "../../components/Title/Title";
import PageDesc from "../../components/Header/PageDesc";
import ImageInput from "../../components/ImageInput/ImageInput";
import Error from "../../components/Error/Error";
import loading from "../../components/Loading/Loading";
import Loading from "../../components/Loading/Loading";
import Snackbar from "../../components/Snackbar/Snackbar";

const NewBlogPage = () => {
	const theme = useTheme();
	const { validations } = useAuthContext();
	const [status, statusDispatchFunc] = useReducer(statusFunc, { error: null, success: null, waiting: null });

	const navigate = useNavigate();
	const { blogId } = useParams();
	const [loading, setLoading] = useState(blogId ? true : false);

	const [blogData, setBlogData] = useState({});

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

	async function validateBlogData() {
		return new Promise(function (resolve, reject) {
			let { content, summary, title, image, tag, imageUrl } = blogData;
			if (!content || !summary || !title || (!image && !imageUrl) || !tag) {
				reject("Please fill in all fields");
				return;
			}
			if (validations.checkTextLength(title, 100)) {
				reject("Title is too long. Should be less than 100 characters");
				return;
			}
			if (validations.checkTextLength(tag, 30)) {
				reject("Tag is too long. Should be less than 30 characters");
				return;
			}
			resolve();
		});
	}

	async function PostOrUpdateBlog(callback, successMessage) {
		try {
			statusDispatchFunc({ type: "setWaiting" });
			// Form validation
			await validateBlogData();
			// Create a new formData because of the images and append the blogData to the newly created formData
			let formData = new FormData();
			let keys = Object.keys(blogData);
			keys.forEach((e) => {
				formData.append(e, blogData[e]);
			});

			// Call the needed callback and set success as well as  snackbar
			let res = await callback(blogId, formData);
			statusDispatchFunc({ type: "setSuccess", payload: successMessage });
		} catch (e) {
			statusDispatchFunc({ type: "setError", payload: e });
		}
	}
	function handleChange(name, value) {
		setBlogData((prev) => {
			return { ...prev, [name]: value };
		});
	}

	return (
		<>
			<PageDesc content="Create Blog" />
			<Box sx={styles.new__blog}>
				<Container maxWidth="md" sx={styles.new__blog__container}>
					{!loading && (
						<>
							<Title text="create blog"></Title>
							<Typography variant="h1" sx={{ ...styles.title, fontSize: "28px", marginBlock: "10px" }}>
								Write A New Blog
							</Typography>
							<TextField
								placeholder="Blog title"
								multiline
								maxRows={4}
								sx={styles.new__blog__text__field}
								onChange={(event) => handleChange("title", event.target.value)}
								value={blogData.title || ""}
								onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
							/>
							<CKEditor
								editor={ClassicEditor}
								data={blogData.content || ""}
								onChange={(event, editor) => {
									const data = editor.getData();
									handleChange("content", data);
								}}
								onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
								config={{
									placeholder: "Enter detailed blog content here",
								}}
							/>

							<Box sx={styles.blog__summary__container}>
								<TextField
									placeholder="Blog summary"
									multiline
									maxRows={4}
									sx={{ ...styles.new__blog__text__field }}
									value={blogData.summary || ""}
									onChange={(event) => handleChange("summary", event.target.value)}
									onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
								/>
							</Box>
							<TextField
								placeholder="Tag"
								sx={styles.new__blog__text__field}
								onChange={(event) => handleChange("tag", event.target.value)}
								onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
								value={blogData.tag || ""}
							/>

							<ImageInput label="Lead Image" handleChange={handleChange} sx={{ marginTop: "20px" }} image={blogData.imageUrl} />
							{status.error && <Error text={status.error} />}

							<Box sx={{ display: "flex", gap: "20px", marginTop: "30px" }}>
								<Button
									variant="contained"
									sx={{ color: theme.palette.white.main, ...styles.button, padding: "10px 40px" }}
									color="secondary"
									onClick={() =>
										blogId ? PostOrUpdateBlog(httpUpdateBlog, `Blog of id ${blogId} has been updated`) : PostOrUpdateBlog(httpStoreBlog, "A new blog post has been created")
									}
									disabled={status.waiting}>
									{!status.waiting ? (blogId ? "Update" : "Publish") + " Blog" : "Waiting..."}
								</Button>
							</Box>
						</>
					)}
					{loading && <Loading />}
				</Container>
			</Box>
			{status.success && <Snackbar text={status.success} link="/blogs" close={() => statusDispatchFunc({ type: "clearStatus" })} />}
		</>
	);
};

export default NewBlogPage;
