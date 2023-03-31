import React, { useState, useEffect, useReducer } from "react";
import { Container, Box, Grid, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import styles from "../../app.styles";
import { statusFunc } from "../../components/Snackbar/status.service";
// import blogs from "../../data/blogData";
import { reservationSchema } from "../../hooks/validations/react-hook-form";
import { httpFetchBlogs, httpSendReservation } from "../../hooks/requests/request";
import { useAdminContext } from "../../context/AdminContext";

import PageDesc from "../../components/Header/PageDesc";
import Title from "../../components/Title/Title";
import BlogItem from "../../components/BlogItem/BlogItem";
import InstagramGallery from "../../components/InstagramGallery/InstagramGallery";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import Snackbar from "../../components/Snackbar/Snackbar";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const BlogsPage = () => {
	const theme = useTheme();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: zodResolver(reservationSchema) });
	const [status, statusDispatchFunc] = useReducer(statusFunc, { error: null, success: null, waiting: null });
	const [blogsData, setBlogsData] = useState([]);
	const [loading, setLoading] = useState(true);
	const { isAdmin } = useAdminContext();

	useEffect(() => {
		let errorKeys = Array.from(Object.keys(errors));
		errorKeys?.length && statusDispatchFunc({ type: "setError", payload: errors[errorKeys[0]].message });
	}, [errors]);

	useEffect(() => {
		(async function () {
			let res = await httpFetchBlogs(4, blogsData?.blogs?.length || 0);
			setBlogsData(res);
			setLoading(false);
		})();
	}, []);

	async function fetchMoreBlogs() {
		let res = await httpFetchBlogs(4, blogsData?.blogs?.length || 0);

		setBlogsData((prev) => {
			return { nextpage: res.nextpage, blogs: [...prev.blogs, ...res.blogs] };
		});
		setLoading(false);
	}
	async function saveReservation(data) {
		statusDispatchFunc({ type: "setWaiting" });
		const time = `${data.date} ${data.timing}`;
		data = {
			name: data.name,
			email: data.email,
			reservationType: data.reservation,
			time,
		};

		const response = await sendReservation(data);

		if (response.error) {
			statusDispatchFunc({ type: "setError", payload: "Message sending failed. Please try again later" });
			return;
		}
		statusDispatchFunc({ type: "setSuccess", payload: "Reservation was successfully sent" });
		// Send data as email or store it on the DB
		reset();
	}

	return (
		<>
			<PageDesc content="Blogs" />
			<Box className="blog" sx={styles.blog}>
				<Container maxWidth="lg" sx={{ ...styles.blogs__container }}>
					{!loading && (
						<>
							<Title text="blogs" />
							<Typography variant="p" sx={{ ...styles.title, display: "block", fontWeight: "bold", fontSize: "20px", marginBottom: "10px" }}>
								Be First Who Read News
							</Typography>
							<Typography variant="p" sx={{ ...styles.desc, width: { xxs: "90%", sm: "60%", md: "40%" }, fontWeight: "normal", fontSize: "12px", textAlign: "center" }}>
								Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making.
							</Typography>

							<Grid container sx={{ marginTop: "20px", justifyContent: "space-between", height: "auto" }}>
								{blogsData.blogs.map((blog, index) => {
									return <BlogItem {...blog} key={index} />;
								})}
							</Grid>

							<Box sx={{ display: "flex", alignItems: "center", marginTop: "30px", gap: "20px" }}>
								{blogsData.nextpage && (
									<Button variant="outlined" color="secondary" endIcon={<KeyboardArrowRightIcon />} sx={{ ...styles.button }} onClick={() => fetchMoreBlogs()}>
										Next
									</Button>
								)}
								{isAdmin && (
									<Button variant="contained" color="secondary" href="/blogs/new" sx={{ ...styles.button }}>
										Add A Blog
									</Button>
								)}
							</Box>
						</>
					)}
					{loading && <Loading />}
				</Container>
			</Box>

			<Box className="reservation" sx={{ ...styles.blogpage__reservation, backgroundColor: theme.palette.footerBg.main }}>
				<Container maxWidth="lg" sx={{ ...styles.blogpage__reservation__container, borderColor: theme.palette.background3.main }}>
					<Title text="reservation" sx={{ color: theme.palette.white.main }} />
					<Typography variant="p" sx={{ color: theme.palette.white.main, ...styles.title, marginTop: "5px" }}>
						Book your table now
					</Typography>
					<form action="" style={{ width: "100%" }} onSubmit={handleSubmit(saveReservation)}>
						<Grid container sx={{ width: "80%", height: "auto", marginBlock: "20px", justifyContent: "space-between", marginInline: "auto" }}>
							{[{ name: "Name" }, { name: "Email" }].map((e, index) => (
								<Grid item xs={5.9} sx={{ width: "100%", marginBottom: "20px", display: "flex", justifyContent: (index + 1) % 2 === 0 ? "flex-end" : "flex-start" }} key={index}>
									<input
										type="text"
										className="w-[100%] block bg-transparent hover : outline-none px-[10px] border-[1px] border-white border-solid text-[10px] text-white py-[7px]"
										aria-label={e.name}
										placeholder={e.name}
										{...register(e.name.toLowerCase())}
										onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
									/>
								</Grid>
							))}

							{[{ name: "Reservation" }, { name: "Timing" }, { name: "Date" }].map((e, index) => {
								let lowercase = e.name.toLowerCase();
								return (
									<Grid item xs={3.8} sx={{ width: "100%", marginBottom: "10px" }} key={index}>
										{e.name !== "Reservation" && (
											<input
												type={lowercase === "date" ? "date" : lowercase === "timing" ? "time" : "text"}
												className="w-[100%] block bg-transparent hover : outline-none px-[10px] border-[1px] border-white border-solid text-[10px] text-white py-[7px]"
												aria-label={e.name}
												placeholder={e.name}
												name={e.name.toLowerCase()}
												{...register(e.name.toLowerCase())}
												onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
											/>
										)}
										{e.name === "Reservation" && (
											<select
												className="w-[100%] block bg-transparent hover : outline-none px-[10px] border-[1px] border-white border-solid text-[10px] text-white py-[7px]"
												{...register("reservation")}
												onFocus={() => statusDispatchFunc({ type: "clearStatus" })}>
												<option value="Reservation Type" disabled style={{ background: theme.palette.primary.main, display: "block", marginTop: "10px" }}>
													Reservation Type
												</option>
												{["Regular", "VIP", "Couple"].map((e, index) => (
													<option value={e} key={index} style={{ background: theme.palette.primary.main, marginBottom: "5px" }}>
														{e}
													</option>
												))}
											</select>
										)}
									</Grid>
								);
							})}
						</Grid>

						<Button variant="contained" color="white" sx={{ ...styles.button, marginInline: "auto", display: "block" }} type="submit" disabled={status.waiting}>
							{status.waiting ? "Waiting..." : "Book a Table"}
						</Button>
						{status.error && <Error text={status.error} sx={{ textAlign: "center" }} />}
					</form>
				</Container>
			</Box>
			<InstagramGallery />
			{status.success && <Snackbar text={status.success} close={() => statusDispatchFunc({ type: "clearStatus" })} />}
		</>
	);
};

export default BlogsPage;
