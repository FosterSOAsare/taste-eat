import React, { useEffect, useState } from "react";
import { Box, Container, Typography, useTheme, TextField, Button } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import styles from "../../app.styles";
import Title from "../../components/Title/Title";
import PageDesc from "../../components/Header/PageDesc";
import ImageInput from "../../components/ImageInput/ImageInput";
import { httpStoreBlog, httpFetchBlogs } from "../../hooks/requests/request";

const NewBlogPage = () => {
	const theme = useTheme();
	const [blogData, setBlogData] = useState({
		title: "This is a test title",
		summary: "This is a test summary",
		content: "This is a test content",
	});

	async function storeBlog() {
		// console.log(await httpFetchBlogs());
		let formData = new FormData();
		let keys = Object.keys(blogData);
		keys.forEach((e) => {
			formData.append(e, blogData[e]);
		});

		let res = await httpStoreBlog(formData);
		console.log("result", res);
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
					/>
					<CKEditor
						editor={ClassicEditor}
						data={blogData.content || ""}
						onChange={(event, editor) => {
							const data = editor.getData();
							handleChange("content", data);
						}}
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
						/>
					</Box>
					<TextField placeholder="Tag" sx={styles.new__blog__text__field} onChange={(event) => handleChange("tag", event.target.value)} value={blogData.tag || ""} />

					<ImageInput label="Lead Image" handleChange={handleChange} sx={{ marginTop: "20px" }} />
					<Box sx={{ display: "flex", gap: "20px", marginTop: "30px" }}>
						<Button variant="contained" sx={{ color: theme.palette.white.main, ...styles.button }} color="secondary" onClick={() => storeBlog()}>
							Publish
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
