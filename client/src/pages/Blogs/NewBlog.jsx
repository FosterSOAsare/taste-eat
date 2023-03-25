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
import BlogPreview from "./BlogPreview";
import readImage from "../../hooks/readImage";

const NewBlogPage = () => {
	const theme = useTheme();
	const { validations } = useAuthContext();
	const [status, statusDispatchFunc] = useReducer(statusFunc, { error: null, success: null, waiting: null });

	const navigate = useNavigate();
	const { blogId } = useParams();
	const [loading, setLoading] = useState(blogId ? true : false);
	const [preview, setPreview] = useState(false);

	const [blogData, setBlogData] = useState({
		summary:
			"Enthusiastically mesh long-term high-impact infrastructures vis efficient customer service professionally fashion wireless rather than prospective experiences nergistically myocardinate clicks procedures whereas manufactured products.",
		tag: "Recipes",
		title: "Elegant Dessert: 10 Tips How to Make It at Home",
		content:
			"<p>Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.</p><p>&nbsp;</p><h3>Perfect Food for all Hungry Livings</h3><p>Objectively integrate enterprise-wide strategic theme areas with functionalized infrastructures ipsum Interactively productized premium technologies where as interdependent quality vectors rapaciously utilize enterprise experiences via 24/7 markets.</p><ul><li>Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor&nbsp;</li><li>Adipiscing elit ut aliquam purus sit amet viverra suspendisse potent&nbsp;</li><li>Mauris commodo quis imperdiet massa tincidunt nunc pulvinar</li></ul><blockquote><p>The ultimate learn-how-to-cook book filled with 100+ amazing,<br>easy-to-follow recipes for every occasion plus helpful<br>kitchen tricks to inspire young cooks</p></blockquote><p>&nbsp;</p><h3>What burger recipes exist you can follow?</h3><p>At risus viverra adipiscing at tellus integer feugiat pretium fusce id velit ut tortor sagittis scelerisque purus semper eget lectus urna duis convallis porta nibh venenatis crase sed felis egets neque laoreet aliquam nunc lobortis mattis aliquam faucibus purus in.</p><p>&nbsp;</p><ol><li>Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor&nbsp;</li><li>Adipiscing elit ut aliquam purus sit amet viverra suspendisse potent</li><li>Mauris commodo quis imperdiet massa tincidunt nunc pulvinar&nbsp;</li></ol>",
	});

	useEffect(() => {
		blogId &&
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

	async function PostOrUpdateBlog() {
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

			let res = blogId ? await httpUpdateBlog(blogId, formData) : await httpStoreBlog(formData);
			if (res?.error) {
				statusDispatchFunc({ type: "displayError", payload: res.error });
				return;
			}

			statusDispatchFunc({ type: "setSuccess", payload: blogId ? `Blog of id ${blogId} has been updated` : "New blog created" });
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

			<Box sx={{ position: "relative", overflowY: "auto" }}>
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
										onClick={() => PostOrUpdateBlog()}
										disabled={status.waiting}>
										{!status.waiting ? (blogId ? "Update" : "Publish") + " Blog" : "Waiting..."}
									</Button>
									<Button variant="outlined" sx={{ color: theme.palette.primary.main, ...styles.button, padding: "10px 40px" }} onClick={() => setPreview(true)}>
										Preview Blog
									</Button>
								</Box>
							</>
						)}
						{loading && <Loading />}
					</Container>
				</Box>

				{status.success && <Snackbar text={status.success} link="/blogs" close={() => statusDispatchFunc({ type: "clearStatus" })} />}
				{preview && (
					<Box sx={{ position: "absolute", height: "auto", minHeight: "100%", width: "100%", top: "0", left: "0", background: theme.palette.white.main, zIndex: 3, paddingBottom: "40px" }}>
						<BlogPreview {...{ ...blogData }} />
						<Button variant="outlined" onClick={() => setPreview(false)} sx={{ ...styles.button, marginInline: "auto", display: "block" }}>
							Exit Preview
						</Button>
					</Box>
				)}
			</Box>
		</>
	);
};

export default NewBlogPage;
