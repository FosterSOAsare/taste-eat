import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

import PageDesc from "../Header/PageDesc";
import styles from "../../app.styles";
import NotFoundImage from "../../assets/404-image.png";

const NotFound = () => {
	return (
		<>
			<PageDesc content="404" />
			<Box>
				<Container maxWidth="lg" sx={{ ...styles.container, marginBlock: "100px" }}>
					<Box sx={{ display: "flex", alignItems: "center", gap: "5px", height: "auto" }}>
						<Typography variant="h1" sx={{ fontSize: "130px" }}>
							4
						</Typography>
						<Box sx={{ width: "100px", height: "100px" }}>
							<img src={NotFoundImage} alt="" className="w-full h-full" />
						</Box>
						<Typography variant="h1" sx={{ fontSize: "130px" }}>
							4
						</Typography>
					</Box>
					<Typography variant="h3" sx={{ ...styles.title, fontSize: { xxs: "20px", sm: "24px" }, textAlign: "center", marginBottom: "5px" }}>
						Whoops, Nothing delicious to find here!
					</Typography>
					<Typography variant="p" sx={{ ...styles.desc, fontSize: { xxs: "10px", sm: "12px" }, textAlign: "center" }}>
						The page you are looking for doesn't exist or has been moved.
					</Typography>
					<Button color="secondary" variant="contained" sx={{ ...styles.button, marginTop: "40px" }} href="/">
						Back to Home
					</Button>
				</Container>
			</Box>
		</>
	);
};

export default NotFound;
