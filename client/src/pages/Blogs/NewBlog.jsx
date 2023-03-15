import React, { useState } from "react";
import { Box, Container, Typography, useTheme, TextField } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import EditorBalloon from "@ckeditor/ckeditor5-build-balloon";

import styles from "../../app.styles";
import Title from "../../components/Title/Title";
import PageDesc from "../../components/Header/PageDesc";

const NewBlogPage = () => {
	const theme = useTheme();
	const [blogData, setBlogData] = useState({});
	console.log(blogData);

	function storeBlog(e) {
		e.preventDefault();
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

					<TextField placeholder="Blog title" multiline maxRows={4} sx={styles.new__blog__text__field} onChange={(event) => handleChange("title", event.target.value)} />
					{/* For the content of the blog */}
					<CKEditor
						editor={ClassicEditor}
						data=""
						onChange={(event, editor) => {
							const data = editor.getData();
							handleChange("content", data);
						}}
						config={{
							placeholder: "Enter detailed blog content here",
							style: {
								definitions: {
									options: [
										{ model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
										{ model: "heading1", view: "h1", title: "Heading 1", class: "ck-heading_heading1" },
										{ model: "heading2", view: "h2", title: "Heading 2", class: "ck-heading_heading2" },
									],
								},
							},
						}}
						onReady={(editor) => {
							// You can store the "editor" and use when it is needed.
							editor.editing.view.change((writer) => {
								writer.setStyle("min-height", "300px", editor.editing.view.document.getRoot());
								writer.setStyle("font-size", "inherit", editor.editing.view.document.getRoot());
							});
						}}
						onFocus={(event, editor) => {}}
						className="ck-editor"
					/>

					<Box sx={styles.blog__summary__container}>
						<TextField placeholder="Blog summary" multiline maxRows={4} sx={{ ...styles.new__blog__text__field }} onChange={(event) => handleChange("summary", event.target.value)} />
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default NewBlogPage;
