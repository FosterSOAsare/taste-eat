import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

import styles from "../../app.styles";
import { useAdminContext } from "../../context/AdminContext";
import { httpDeleteADish, httpFetchADish } from "../../hooks/requests/request";

import Loading from "../../components/Loading/Loading";
import PageDesc from "../../components/Header/PageDesc";
import Socials from "../../components/Socials/Socials";
import ConfirmationPopper from "../../components/ConfirmPopup/Popper";

import DishRatingImage from "../../assets/dish-rating.png";
import NotFound from "../../components/NotFound/NotFound";

const shareLinks = {
	facebook: "http://facebook.com/",
	instagram: "http://instagram.com/",
	pinterest: "http://pinterest.com",
	twitter: "http://twitter.com/",
};

const SingleDishPage = () => {
	const theme = useTheme();
	const [dishData, setDishData] = useState({});
	const [loading, setLoading] = useState(true);
	const { dishId } = useParams();
	const { isAdmin } = useAdminContext();
	const [active, setActive] = useState("description");
	let navigate = useNavigate();
	const [notFound, setNotFound] = useState(false);

	const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
	useEffect(() => {
		(async function () {
			let res = await httpFetchADish(dishId);
			setLoading(false);
			if (res.error) {
				setNotFound(true);
				return;
			}
			setDishData(res);
			document.title = "Restaurante Dish : " + res.name;
		})();
	}, []);

	function deleteDish() {
		return new Promise(async (resolve, reject) => {
			let res = await httpDeleteADish(dishId);
			if (res.error) {
				reject(res.error);
			}
			resolve();
		});
	}
	return (
		<>
			{loading && <Loading />}
			{!loading && !notFound && (
				<>
					<PageDesc content="Single Dish" />
					<Box sx={{ marginBlock: { xxs: "30px", sm: "70px" } }}>
						<Container maxWidth="lg" sx={{}}>
							<>
								<Box sx={styles.single__dish__detail}>
									<Box
										sx={{
											width: { xxs: "100%", sm: "40%" },
											height: { xxs: "200px", sm: "100%" },
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}>
										{/* Needs a larger image */}
										<img src={dishData.imageUrl} alt="Dish image" className="w-[100px] h-[100px]" crossOrigin="true" />
									</Box>
									<Box sx={{ width: { xxs: "100%", sm: "50%" }, height: "auto" }}>
										<Typography variant="h3" sx={{ ...styles.title, fontSize: "32px" }}>
											{dishData.name}
										</Typography>
										<img src={DishRatingImage} alt="" className="my-[10px]" crossOrigin="true" />
										<Typography variant="h3" sx={{ fontSize: "20px", ...styles.title }}>
											{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(dishData?.price)}
										</Typography>

										<Box sx={styles.divider}></Box>
										<Typography variant="p" sx={{ ...styles.desc, fontSize: "16px", marginBottom: "20px" }}>
											{dishData.summary} <br />
											Interactively procrastinate high-payoff content without backward compatible data uickly cultivate optimal processes and tactical via accurate e-markets.
										</Typography>

										<Box className="product details">
											{[
												{ name: "#id", value: dishData._id },
												{ name: "category", value: "food" },
												{ name: "tags", value: "Recipes, Sweet, Tasty" },
											].map((e, index) => (
												<Typography variant="p" key={index} sx={{ marginBottom: "10px", display: "block", textTransform: "capitalize", fontSize: "16px" }}>
													<Typography variant="span" color="secondary" sx={{ textTransform: "uppercase", marginRight: "5px" }}>
														{e.name}:
													</Typography>
													{e.value}
												</Typography>
											))}

											{/* Share */}
											<Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
												<Typography variant="p" sx={{ ...styles.desc, fontSize: "16px", textTransform: "uppercase" }} color="secondary">
													Share :
												</Typography>
												<Socials links={shareLinks} sx={{ color: theme.palette.secondary.main, fontSize: "16px" }} />
											</Box>
											{isAdmin && (
												<Box sx={{ marginTop: "20px", display: "flex", alignItems: "center", marginBottom: { xxs: "20px", sm: 0 } }}>
													<Button href={`/dish/${dishData._id}/edit`} variant="outlined" sx={{ marginRight: "20px" }}>
														Edit
													</Button>

													<ConfirmationPopper
														anchor={
															<Button variant="contained" color="secondary">
																Delete
															</Button>
														}
														question={`Are you sure you want to delete this dish?`}
														confirm={deleteDish}
														proceedLink="/dishes"
														anchorType="button"
														successMessage={`Dish of id ${dishId} has been deleted`}
													/>
												</Box>
											)}
										</Box>
									</Box>
								</Box>
								<Box sx={{ width: "100%" }}>
									{isSmallScreen && <Box sx={{ ...styles.divider }}></Box>}
									<Box>
										<Button variant="text" color="primary" onClick={() => setActive("description")} sx={{ opacity: active === "description" ? 1 : 0.2 }}>
											Description
										</Button>
										<Button variant="text" color="primary" onClick={() => setActive("reviews")} sx={{ opacity: active === "reviews" ? 1 : 0.2 }}>
											REVIEWS(0)
										</Button>
									</Box>
									<Box sx={{ ...styles.divider }}></Box>
									<Box sx={{ transition: "all 0.5s ease-in-out" }}>
										{active === "description" && (
											<Box>
												<Typography variant="h3" sx={{ ...styles.title, fontSize: "24px", marginBottom: "10px" }}>
													Description
												</Typography>
												<Typography variant="p" sx={{ ...styles.desc, fontSize: "16px" }}>
													Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate standardized metrics resource leveling processes.
													Objectively pursue diverse catalysts for change for interoperable meta-services.Proactively fabricate one-to-one materials effective e-business.
													Completely synergize scalable e-commerce rather than high standards in e-services. Assertively iterate resource maximizing products leading-edge
													intellectual capitaligh standards in e-services.
												</Typography>
											</Box>
										)}
										{active === "reviews" && (
											<Box>
												<Typography variant="h3" sx={{ ...styles.title, fontSize: "24px" }}>
													Reviews
												</Typography>
												<Box>
													<Typography variant="p" sx={{ ...styles.desc, fontSize: "16px", opacity: 0.4 }}>
														No reviews yet...
													</Typography>
												</Box>
											</Box>
										)}
									</Box>
									<Box sx={{ ...styles.divider }}></Box>
								</Box>
							</>
						</Container>
					</Box>
				</>
			)}
			{!loading && notFound && <NotFound />}
		</>
	);
};
// ;
export default SingleDishPage;
