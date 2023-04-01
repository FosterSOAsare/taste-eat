import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "../app.styles";

import LineImage from "../assets/Line.png";
import Loading from "./Loading/Loading";

import { httpFetchDishes } from "../hooks/requests/request";

const Dishes = ({ type, limit, next = false }) => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState({});

	useEffect(() => {
		(async function () {
			let res = await httpFetchDishes(type, limit);
			setData(res);
			setLoading(false);
		})();
	}, []);

	async function fetchMore() {
		let skip = data.dishes.length;
		let res = await httpFetchDishes(type, limit, skip);

		setData((prev) => {
			return { ...res, dishes: [...prev.dishes, ...res.dishes] };
		});
	}
	return (
		<Box sx={{ width: "100%", marginBottom: "20px" }}>
			<Typography variant="h3" sx={{ fontSize: "24px", marginBottom: "20px", fontFamily: "'Cormorant Infant', serif !important", fontWeight: "bold", textTransform: "capitalize" }}>
				{type}
			</Typography>
			<Box sx={{ width: "100%" }}>
				{!loading && (
					<>
						{data.dishes &&
							data.dishes.map((dish, index) => (
								<Box key={index} sx={{ width: "100%", display: "flex", alignItems: "flex-end", marginBottom: "20px" }}>
									<img src={dish.imageUrl} alt="" className="block mr-[10px] w-[50px] h-[50px]" crossOrigin="true" />
									<Box sx={{ width: { xxs: "84%", sm: "70%" }, paddingRight: "10px" }}>
										<Typography variant="p" sx={{ ...styles.title, fontWeight: "bold", fontSize: "18px" }}>
											{dish.name}
										</Typography>
										<Box sx={{ display: "flex", alignItems: "center" }}>
											<Typography variant="p" sx={{ ...styles.desc, fontSize: "12px", width: { xxs: "100%" }, opacity: "0.3" }}>
												{dish.summary}
											</Typography>
											<img src={LineImage} alt="" className="xs:inline h-[2px] hidden  w-[50%]" />
										</Box>
									</Box>
									<Box>
										<Typography variant="p" sx={{ ...styles.title, fontWeight: "bold", fontSize: "18px" }}>
											${dish.price}
										</Typography>
									</Box>
								</Box>
							))}
						{data.nextpage && next && (
							<Button variant="outlined" color="secondary" sx={{ ...styles.button }} onClick={fetchMore}>
								View More
							</Button>
						)}
					</>
				)}
				{loading && <Loading sx="bg-white" text_sx="text-primary" />}
			</Box>
		</Box>
	);
};

export default Dishes;
