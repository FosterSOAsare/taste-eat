import { Box, Typography, Button } from "@mui/material";
import React from "react";

const Reload = ({ error, reloadFunc }) => {
	return (
		<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
			<Typography variant="h3" sx={{ fontSize: "18px", textTransform: "capitalize" }}>
				A {error} occurred.
			</Typography>
			<Typography variant="p" sx={{ opacity: "0.5", fontSize: "14px" }}>
				Please click button below to reload
			</Typography>
			<Button variant="outlined" color="secondary" sx={{ display: "block", marginTop: "10px" }} onClick={() => reloadFunc()}>
				Reload
			</Button>
		</Box>
	);
};

export default Reload;
