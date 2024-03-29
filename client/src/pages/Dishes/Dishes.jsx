import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Typography, Card, CardContent, Button } from "@mui/material";
import { httpFetchAllDishes } from "../../hooks/requests/request";
import { Link } from "react-router-dom";

import styles from "../../app.styles";
import { useAdminContext } from "../../context/AdminContext";

import Loading from "../../components/Loading/Loading";
import PageDesc from "../../components/Header/PageDesc";
import Title from "../../components/Title/Title";

const DishesPage = () => {
	const [dishesData, setDishesData] = useState({});
	const [loading, setLoading] = useState(true);
	const { isAdmin } = useAdminContext();
	useEffect(() => {
		document.title = "Restaurante - Our Dishes";

		(async function () {
			let res = await httpFetchAllDishes(20, dishesData?.dishes?.length || 0);
			setDishesData(res);
			setLoading(false);
		})();
	}, []);

	async function fetchMoreDishes() {
		let res = await httpFetchAllDishes(20, dishesData?.dishes?.length);

		setDishesData((prev) => {
			return { nextpage: res.nextpage, dishes: [...prev.dishes, ...res.dishes] };
		});
		setLoading(false);
	}
	return (
		<>
			<PageDesc content="Our Dishes" />
			<Box sx={{ marginBlock: "100px" }}>
				<Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px" }}>
					{!loading && (
						<>
							<Title text="Our Dishes" />
							<Typography variant="p" sx={{ ...styles.desc, textAlign: "center", width: { sm: "60%" } }}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non illum eligendi, molestiae nemo unde ratione similique repellat placeat labore?
							</Typography>
							<Grid container sx={{ marginBlock: "30px", justifyContent: "center" }}>
								{dishesData.dishes.map((e) => (
									<Grid item key={e._id} md={3} xs={6} xxs={12} sx={{ marginBottom: { xxs: "20px", xs: 0 } }}>
										<Link to={`/dish/${e._id}`}>
											<Card variant="outlined" sx={{ height: "100%", padding: "20px" }}>
												<img src={e.imageUrl} alt="" className="max-h-[80px]" crossOrigin="true" />
												<CardContent sx={{ padding: 0, marginTop: "20px" }}>
													<Typography variant="h3" sx={{ ...styles.title, fontSize: "20px" }}>
														{e?.name}
													</Typography>
													<Typography variant="p" sx={{ ...styles.desc, opacity: "0.7" }}>
														{e?.summary}
													</Typography>
													<Typography variant="p" sx={{ textAlign: "right", display: "block", marginTop: "5px" }}>
														{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(e?.price)}
													</Typography>
												</CardContent>
											</Card>
										</Link>
									</Grid>
								))}
							</Grid>
							<Box sx={{ display: "flex", alignItems: "center", marginTop: "30px", gap: "20px" }}>
								{dishesData.nextpage && (
									<Button variant="outlined" color="secondary" sx={{ ...styles.button, paddingInline: "40px" }} onClick={() => fetchMoreDishes()}>
										Load More
									</Button>
								)}
								{isAdmin && (
									<Button variant="contained" color="secondary" href="/dishes/new">
										Add A Dish
									</Button>
								)}
							</Box>
						</>
					)}
					{loading && <Loading />}
				</Container>
			</Box>
		</>
	);
};

export default DishesPage;
