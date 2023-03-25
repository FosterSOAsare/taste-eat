import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

import styles from "../../app.styles";
import { useAdminContext } from "../../context/AdminContext";
import { httpFetchADish } from "../../hooks/requests/request";

import Loading from "../../components/Loading/Loading";
import PageDesc from "../../components/Header/PageDesc";
import Socials from "../../components/Socials/Socials";

import DishRatingImage from "../../assets/dish-rating.png";

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

	const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	useEffect(() => {
		(async function () {
			let res = await httpFetchADish(dishId);
			setDishData(res);
			setLoading(false);
		})();
	}, []);
	return (
		<>
			<PageDesc content="Single Dish" />
			<Box sx={{ marginBlock: { xxs: "30px", sm: "70px" } }}>
				<Container maxWidth="lg" sx={{}}>
					{!loading && (
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
									<img src={dishData.imageUrl} alt="Dish image" className="w-[100px] h-[100px]" />
								</Box>
								<Box sx={{ width: { xxs: "100%", sm: "50%" }, height: "auto" }}>
									<Typography variant="h3" sx={{ ...styles.title, fontSize: "32px" }}>
										{dishData.name}
									</Typography>
									<img src={DishRatingImage} alt="" className="my-[10px]" />
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
									</Box>
								</Box>
							</Box>
							<Box sx={{ width: "100%" }}>
								{isMobileScreen && <Box sx={{ ...styles.divider }}></Box>}
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
					)}
					{loading && <Loading />}
				</Container>
			</Box>
		</>
	);
};

export default SingleDishPage;
