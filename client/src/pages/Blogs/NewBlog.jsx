import React, { useEffect, useState } from "react";
import { Box, Container, Typography, useTheme, TextField, Button } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import styles from "../../app.styles";
import { httpStoreBlog, httpFetchBlogs } from "../../hooks/requests/request";

import Title from "../../components/Title/Title";
import PageDesc from "../../components/Header/PageDesc";
import ImageInput from "../../components/ImageInput/ImageInput";
import Error from "../../components/Error/Error";

const NewBlogPage = () => {
	const theme = useTheme();
	const { error, errorDispatchFunc, validations, clearError, waiting, setWaiting } = useAuthContext();
	const navigate = useNavigate();

	const [blogData, setBlogData] = useState({
		title: "This is a test title",
		summary: "This is a test summary",
		content: "This is a test content",
		tag: "Recipes",
	});

	async function storeBlog() {
		setWaiting(true);
		// Form validation
		let { content, summary, title, image, tag } = blogData;
		if (!content || !summary || !title || !image || !tag) {
			errorDispatchFunc({ type: "displayError", payload: "Please fill in all fields" });
			return;
		}
		if (validations.checkTextLength(title, 100)) {
			errorDispatchFunc({ type: "displayError", payload: "Title is too long. Should be less than 100 characters" });
			return;
		}
		if (validations.checkTextLength(tag, 30)) {
			errorDispatchFunc({ type: "displayError", payload: "Tag is too long. Should be less than 30 characters" });
			return;
		}
		let formData = new FormData();
		let keys = Object.keys(blogData);
		keys.forEach((e) => {
			formData.append(e, blogData[e]);
		});

		try {
			let res = await httpStoreBlog(formData);
			setWaiting(false);
			setBlogData({});
			navigate("/");
		} catch (e) {
			console.log(e);
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
						onFocus={() => clearError()}
					/>
					<CKEditor
						editor={ClassicEditor}
						data={blogData.content || ""}
						onChange={(event, editor) => {
							const data = editor.getData();
							handleChange("content", data);
						}}
						onFocus={() => clearError()}
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
							onFocus={() => clearError()}
						/>
					</Box>
					<TextField
						placeholder="Tag"
						sx={styles.new__blog__text__field}
						onChange={(event) => handleChange("tag", event.target.value)}
						onFocus={() => clearError()}
						value={blogData.tag || ""}
					/>

					<ImageInput label="Lead Image" handleChange={handleChange} sx={{ marginTop: "20px" }} />
					{error.display === "block" && <Error text={error.text} />}

					<Box sx={{ display: "flex", gap: "20px", marginTop: "30px" }}>
						<Button variant="contained" sx={{ color: theme.palette.white.main, ...styles.button }} color="secondary" onClick={() => storeBlog()} disabled={waiting}>
							{!waiting ? "Publish" : "Waiting..."}
						</Button>
						<Button variant="outlined" sx={{ ...styles.button }} color="secondary">
							Save Draft
						</Button>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default NewBlogPage;
