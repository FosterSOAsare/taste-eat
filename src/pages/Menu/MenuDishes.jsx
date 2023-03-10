import React, { useState, useEffect } from "react";
import { Box, Container, Button } from "@mui/material";
import styles from "../../app.styles";
import Dishes from "../../components/Dishes";

import foodDishes from "../../data/dishesData";
import { useTheme } from "@emotion/react";
const MenuDishes = ({ type, image, order }) => {
	const theme = useTheme();
	let [menuDishes, setMenuDishes] = useState({});

	useEffect(() => {
		setMenuDishes(foodDishes.find((dish) => dish.type.toLowerCase() === type.toLowerCase()));
	}, [type]);

	return (
		<Box sx={{ marginBlock: "100px" }}>
			<Container maxWidth="lg" sx={{ ...styles.dishes__container }}>
				<img src={image} alt="" style={{ order }} className="w-[50%] h-[100%]" />
				<Box sx={{ order: order === 1 ? 2 : 1, width: "50%" }}>
					{menuDishes.dishes && <Dishes type={menuDishes.type} dishes={menuDishes.dishes} />}
					<Button variant="outlined" color="secondary" sx={{ ...styles.button }}>
						See all dishes
					</Button>
				</Box>
			</Container>
		</Box>
	);
};

export default MenuDishes;
