import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Title from "../Title/Title";
import styles from "../../app.styles";
import { useTheme } from "@emotion/react";

const Reservation = () => {
	const theme = useTheme();
	return (
		<Box className="reservation" sx={styles.reservation}>
			<Box sx={{ ...styles.reservation__container, backgroundColor: theme.palette.background3.main }}>
				<Title text="reservation" sx={{ color: theme.palette.white.main }} />
				<Typography variant="p" sx={{ color: theme.palette.white.main, ...styles.title, marginTop: "5px" }}>
					Book your table now
				</Typography>
				<Grid container sx={{ width: "80%", height: "auto", marginBlock: "20px", justifyContent: "space-between" }}>
					{[{ name: "Name" }, { name: "Email" }].map((e, index) => (
						<Grid item xs={5.9} sx={{ width: "100%", marginBottom: "20px", display: "flex", justifyContent: (index + 1) % 2 === 0 ? "flex-end" : "flex-start" }} key={index}>
							<input
								type="text"
								className="w-[100%] block bg-transparent hover : outline-none px-[10px] border-[1px] border-white border-solid text-[10px] text-white py-[7px]"
								aria-label={e.name}
								placeholder={e.name}
								name={e.name.toLowerCase()}
							/>
						</Grid>
					))}

					{[{ name: "Person" }, { name: "Timing" }, { name: "Date" }].map((e, index) => (
						<Grid item xs={3.8} sx={{ width: "100%", marginBottom: "10px" }} key={index}>
							<input
								type="text"
								className="w-[100%] block bg-transparent hover : outline-none px-[10px] border-[1px] border-white border-solid text-[10px] text-white py-[7px]"
								aria-label={e.name}
								placeholder={e.name}
								name={e.name.toLowerCase()}
							/>
						</Grid>
					))}
				</Grid>

				<Button variant="contained" color="white" sx={{ ...styles.button }}>
					Book a Table
				</Button>
			</Box>
		</Box>
	);
};

export default Reservation;
