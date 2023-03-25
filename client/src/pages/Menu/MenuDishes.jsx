import React, { useState, useEffect } from "react";
import { Box, Container, Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

import styles from "../../app.styles";
import { httpFetchDishes } from "../../hooks/requests/request";

import Dishes from "../../components/Dishes";
import Loading from "../../components/Loading/Loading";

const MenuDishes = ({ type, image, order }) => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

	return (
		<Box sx={{ marginBlock: { xxs: "30px", sm: "100px" } }}>
			<Container maxWidth="lg" sx={{ ...styles.dishes__container }}>
				{!isSmallScreen && <img src={image} alt="" style={{ order }} className="sm:block sm:w-[50%]  sm:h-[600px]" />}
				<Box sx={{ order: order === 1 ? 2 : 1, width: { xxs: "100%", sm: "50%" } }}>{type && <Dishes type={type} next={true} limit={4} />}</Box>
			</Container>
		</Box>
	);
};

export default MenuDishes;
