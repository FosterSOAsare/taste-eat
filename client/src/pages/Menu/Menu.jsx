import React, { useEffect } from "react";
import { Box } from "@mui/material";

import PageDesc from "../../components/Header/PageDesc";
import MenuDishes from "./MenuDishes";
import StartersImage from "../../assets/starters.jpg";
import MainDishImage from "../../assets/main-dish.jpg";
import DessertImage from "../../assets/dessert.jpg";
import DishesImage1 from "../../assets/dishes-1.png";
import DishesImage2 from "../../assets/dishes-2.png";

const MenuPage = () => {
	useEffect(() => {
		document.title = "Restaurante - Our Menu";
	}, []);
	return (
		<>
			<PageDesc content="Our Menu" />
			<MenuDishes type="starters" image={StartersImage} order="1" />
			<Box sx={{ width: "100%", height: { xxs: "120px", md: "200px" } }}>
				<img src={DishesImage1} alt="" className="w-full h-full" />
			</Box>
			<MenuDishes type="main dishes" image={MainDishImage} order="2" />
			<Box sx={{ width: "100%", height: { xxs: "120px", md: "200px" } }}>
				<img src={DishesImage2} alt="" className="w-full h-full" />
			</Box>
			<MenuDishes type="desserts" image={DessertImage} order="1" />
		</>
	);
};

export default MenuPage;
