import React, { useState, useEffect } from "react";
import { Box, Container, Button } from "@mui/material";
import { useTheme } from "@emotion/react";

import styles from "../../app.styles";
import { httpFetchDishes } from "../../hooks/requests/request";

import Dishes from "../../components/Dishes";
import Loading from "../../components/Loading/Loading";

const MenuDishes = ({ type, image, order }) => {
	const theme = useTheme();

	return (
		<Box sx={{ marginBlock: "100px" }}>
			<Container maxWidth="lg" sx={{ ...styles.dishes__container }}>
				<img src={image} alt="" style={{ order }} className="w-[50%] h-[100%]" />
				<Box sx={{ order: order === 1 ? 2 : 1, width: "50%" }}>{type && <Dishes type={type} next={true} limit={4} />}</Box>
			</Container>
		</Box>
	);
};

export default MenuDishes;
