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
import gallery from "../../data/gallery";

const BlogPage = () => {
	const theme = useTheme();
	return (
		<>
			<PageDesc content="Blog" />
			<Box className="blog" sx={styles.blog}>
				<Container maxWidth="lg" sx={{ ...styles.blogs__container }}>
					<Title text="blog" />
					<Typography variant="p" sx={{ ...styles.title, display: "block", fontWeight: "bold", fontSize: "20px", marginBottom: "10px" }}>
						Be First Who Read News
					</Typography>
					<Typography variant="p" sx={{ ...styles.desc, width: "40%", fontWeight: "normal", fontSize: "12px", textAlign: "center" }}>
						Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making.
					</Typography>

					<Grid container sx={{ marginTop: "20px", gap: "30px", justifyContent: "space-between" }}>
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

			<Box className="stories" sx={{ ...styles.blogpage__stories }}>
				<Container maxWidth="lg" sx={{ ...styles.blogpage__reservation__container }}>
					<Title text="stories" sx={{ color: theme.palette.primary.main }} />
					<Typography variant="p" sx={{ color: theme.palette.primary.main, ...styles.title, marginTop: "5px", fontSize: "24px" }}>
						Instagram Gallery
					</Typography>

					<Grid container sx={{ width: "100%", height: "auto", gap: "20px", justifyContent: "space-between", marginTop: "20px", alignItems: "center" }}>
						{gallery.map((item, index) => (
							<Grid item md={1.8} key={index}>
								<img src={`${item}?w=161&fit=crop&auto=format`} srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`} alt="" loading="lazy" />
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default BlogPage;
