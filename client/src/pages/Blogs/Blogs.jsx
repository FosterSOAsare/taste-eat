import React from "react";
import PageDesc from "../../components/Header/PageDesc";
import { Container, Box, Grid, Button } from "@mui/material";
import styles from "../../app.styles";
import { useTheme } from "@mui/material/styles";
import Title from "../../components/Title/Title";
import Typography from "@mui/material/Typography";
import blogs from "../../data/blogData";
import BlogItem from "../../components/BlogItem/BlogItem";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import InstagramGallery from "../../components/InstagramGallery/InstagramGallery";

const BlogsPage = () => {
	const theme = useTheme();
	return (
		<>
			<PageDesc content="Blogs" />
			<Box className="blog" sx={styles.blog}>
				<Container maxWidth="lg" sx={{ ...styles.blogs__container }}>
					<Title text="blogs" />
					<Typography variant="p" sx={{ ...styles.title, display: "block", fontWeight: "bold", fontSize: "20px", marginBottom: "10px" }}>
						Be First Who Read News
					</Typography>
					<Typography variant="p" sx={{ ...styles.desc, width: "40%", fontWeight: "normal", fontSize: "12px", textAlign: "center" }}>
						Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making.
					</Typography>

					<Grid container sx={{ marginTop: "20px", justifyContent: "space-between" }}>
						{blogs.map((blog, index) => {
							return <BlogItem {...blog} key={index} />;
						})}
					</Grid>

					<Button variant="outlined" color="secondary" endIcon={<KeyboardArrowRightIcon />} sx={{ ...styles.button, marginTop: "30px" }}>
						Next
					</Button>
				</Container>
			</Box>

			<Box className="reservation" sx={{ ...styles.blogpage__reservation, backgroundColor: theme.palette.footerBg.main }}>
				<Container maxWidth="lg" sx={{ ...styles.blogpage__reservation__container, borderColor: theme.palette.background3.main }}>
					<Title text="reservation" sx={{ color: theme.palette.white.main }} />
					<Typography variant="p" sx={{ color: theme.palette.white.main, ...styles.title, marginTop: "5px" }}>
						Book your table now
					</Typography>
					<Grid container sx={{ width: "80%", height: "auto", marginBlock: "20px" }}>
						{[{ name: "Name" }, { name: "Email" }].map((e, index) => (
							<Grid item md={6} sx={{ width: "100%", marginBottom: "20px" }} key={index}>
								<input
									type="text"
									className="w-[95%] block bg-transparent hover : outline-none px-[10px] border-[1px] border-white border-solid text-[10px] text-white py-[7px]"
									aria-label={e.name}
									placeholder={e.name}
									name={e.name.toLowerCase()}
								/>
							</Grid>
						))}

						{[{ name: "Person" }, { name: "Timing" }, { name: "Date" }].map((e, index) => (
							<Grid item md={4} sx={{ width: "100%", marginBottom: "10px" }} key={index}>
								<input
									type="text"
									className="w-[95%] block bg-transparent hover : outline-none px-[10px] border-[1px] border-white border-solid text-[10px] text-white py-[7px]"
									aria-label={e.name}
									placeholder={e.name}
									name={e.name.toLowerCase()}
								/>
							</Grid>
						))}
					</Grid>

					<Button variant="contained" color="white" sx={{ ...styles.button }}>
						Book a Table
					</Button>
				</Container>
			</Box>
			<InstagramGallery />
		</>
	);
};

export default BlogsPage;
