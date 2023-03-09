import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Title from "../Title/Title";
import styles from "../../app.styles";

const Reservation = () => {
	return (
		<Box className="reservation" sx={styles.homepage__reservation}>
			<Box sx={{ ...styles.homepage__reservation__container, backgroundColor: theme.palette.background3.main }}>
				<Title text="reservation" sx={{ color: theme.palette.white.main }} />
				<Typography variant="p" sx={{ color: theme.palette.white.main, ...styles.title, marginTop: "5px" }}>
					Book your table now
				</Typography>
				<Grid container sx={{ width: "80%", height: "auto", marginBlock: "20px" }}>
					{[{ name: "Name" }, { name: "Email" }].map((e, index) => (
						<Grid item md={6} sx={{ width: "100%", marginBottom: "20px" }} key={index}>
							<input
								type="text"
								className="w-[95%] block bg-transparent hover : outline-none px-[10px] border-[1px] border-white border-solid text-[10px] text-white py-[7px]"
								aria-label={e.name}
								placeholder={e.name}
								name={e.name.toLowerCase()}
							/>
						</Grid>
					))}

					{[{ name: "Person" }, { name: "Timing" }, { name: "Date" }].map((e, index) => (
						<Grid item md={4} sx={{ width: "100%", marginBottom: "10px" }} key={index}>
							<input
								type="text"
								className="w-[95%] block bg-transparent hover : outline-none px-[10px] border-[1px] border-white border-solid text-[10px] text-white py-[7px]"
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
