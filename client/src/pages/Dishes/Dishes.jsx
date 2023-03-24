import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Typography, Card, CardContent, Button } from "@mui/material";
import { httpFetchAllDishes } from "../../hooks/requests/request";

import styles from "../../app.styles";

import Loading from "../../components/Loading/Loading";
import PageDesc from "../../components/Header/PageDesc";
import Title from "../../components/Title/Title";

const DishesPage = () => {
	const [dishesData, setDishesData] = useState({});
	const [loading, setLoading] = useState(true);
	// console.log(dishesData);
	useEffect(() => {
		(async function () {
			let res = await httpFetchAllDishes(20, dishesData?.dishes?.length || 0);
			setDishesData(res);
			setLoading(false);
		})();
	}, []);
	return (
		<>
			<PageDesc content="Our Dishes" />
			<Box sx={{ marginBlock: "100px" }}>
				<Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px" }}>
					{!loading && (
						<>
							<Title text="Our Dishes" />
							<Typography variant="p" sx={{ ...styles.desc, textAlign: "center", width: "60%" }}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non illum eligendi, molestiae nemo unde ratione similique repellat placeat labore?
							</Typography>
							<Grid container sx={{ marginBlock: "30px", justifyContent: "center" }}>
								{dishesData.dishes.map((e) => (
									<Grid item key={e._id} md={3} xxs={6}>
										<a href={`/dishes/${e._id}`}>
											<Card variant="outlined" sx={{ height: "100%", padding: "20px" }}>
												<img src={e.imageUrl} alt="" />
												<CardContent sx={{ padding: 0, marginTop: "20px" }}>
													<Typography variant="h3" sx={{ ...styles.title, fontSize: "20px" }}>
														{e?.name}
													</Typography>
													<Typography variant="p" sx={{ ...styles.desc, opacity: "0.7" }}>
														{e?.summary}
													</Typography>
													<Typography variant="p" sx={{ textAlign: "right", display: "block" }}>
														{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(e?.price)}
													</Typography>
												</CardContent>
											</Card>
										</a>
									</Grid>
								))}
							</Grid>
							<Button variant="outlined" color="secondary" sx={{ ...styles.button, paddingInline: "40px" }}>
								Load More
							</Button>
						</>
					)}
					{loading && <Loading />}
				</Container>
			</Box>
		</>
	);
};

export default DishesPage;
