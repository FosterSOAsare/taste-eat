import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Title from "../Title/Title";
import styles from "../../app.styles";
import { useTheme } from "@emotion/react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
	name: z.string().min(1, { message: "Please fill in all credentials" }),
	email: z.string().min(1, { message: "Please fill in all credentials" }),
	date: z.string().min(1, { message: "Please fill in all credentials" }),
	timing: z.string().min(1, { message: "Please fill in all credentials" }),
	reservation: z.string().min(1, { message: "Please fill in all credentials" }),
});

const Reservation = () => {
	const theme = useTheme();
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm({ resolver: zodResolver(schema) });
	const [error, setError] = useState(null);

	useEffect(() => {
		let errorKeys = Array.from(Object.keys(errors));
		errorKeys?.length && setError(errors[errorKeys[0]].message);
	}, [errors]);

	function saveReservation(data) {
		const time = `${data.date} ${data.timing}`;
		console.log({
			type: "New Reservation",
			time,
			name: data.name,
			email: data.email,
			reservationType: data.reservation,
		});

		// Send data as email or store it on the DB
	}
	return (
		<Box className="reservation" sx={styles.reservation}>
			<Box sx={{ ...styles.reservation__container, backgroundColor: theme.palette.background3.main }}>
				<Title text="reservation" sx={{ color: theme.palette.white.main }} />
				<Typography variant="p" sx={{ color: theme.palette.white.main, ...styles.title, marginTop: "5px" }}>
					Book your table now
				</Typography>
				<form action="" style={{ width: "100%" }} onSubmit={handleSubmit(saveReservation)}>
					<Grid container sx={{ width: "80%", height: "auto", marginBlock: "20px", justifyContent: "space-between", marginInline: "auto" }}>
						{[{ name: "Name" }, { name: "Email" }].map((e, index) => (
							<Grid item xs={5.9} sx={{ width: "100%", marginBottom: "20px", display: "flex", justifyContent: (index + 1) % 2 === 0 ? "flex-end" : "flex-start" }} key={index}>
								<input
									type="text"
									className="w-[100%] block bg-transparent hover : outline-none px-[10px] border-[1px] border-white border-solid text-[10px] text-white py-[7px]"
									aria-label={e.name}
									placeholder={e.name}
									{...register(e.name.toLowerCase())}
									onFocus={() => setError(null)}
								/>
							</Grid>
						))}

						{[{ name: "Reservation" }, { name: "Timing" }, { name: "Date" }].map((e, index) => {
							let lowercase = e.name.toLowerCase();
							return (
								<Grid item xs={3.8} sx={{ width: "100%", marginBottom: "10px" }} key={index}>
									{e.name !== "Reservation" && (
										<input
											type={lowercase === "date" ? "date" : lowercase === "timing" ? "time" : "text"}
											className="w-[100%] block bg-transparent hover : outline-none px-[10px] border-[1px] border-white border-solid text-[10px] text-white py-[7px]"
											aria-label={e.name}
											placeholder={e.name}
											name={e.name.toLowerCase()}
											{...register(e.name.toLowerCase())}
											onFocus={() => setError(null)}
										/>
									)}
									{e.name === "Reservation" && (
										<select
											className="w-[100%] block bg-transparent hover : outline-none px-[10px] border-[1px] border-white border-solid text-[10px] text-white py-[7px]"
											{...register("reservation")}>
											<option value="Reservation Type" disabled style={{ background: theme.palette.primary.main, display: "block", marginTop: "10px" }}>
												Reservation Type
											</option>
											{["Regular", "VIP", "Couple"].map((e, index) => (
												<option value={e} key={index} style={{ background: theme.palette.primary.main, marginBottom: "5px" }}>
													{e}
												</option>
											))}
										</select>
									)}
								</Grid>
							);
						})}
					</Grid>

					<Button variant="contained" color="white" sx={{ ...styles.button, marginInline: "auto", display: "block" }} type="submit">
						Book a Table
					</Button>
					{error && <p className=" ml-[auto] text-[red] mx-[auto] text-[12px] block my-[20px] text-center"> {error}</p>}
				</form>
			</Box>
		</Box>
	);
};

export default Reservation;
