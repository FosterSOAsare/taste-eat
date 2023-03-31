import React, { useEffect, useReducer } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "@emotion/react";
import { useForm } from "react-hook-form";

import { reservationSchema } from "../../hooks/validations/react-hook-form";
import styles from "../../app.styles";
import { statusFunc } from "../Snackbar/status.service";
import { httpSendReservation } from "../../hooks/requests/request";

import Error from "../Error/Error";
import Title from "../Title/Title";
import Snackbar from "../../components/Snackbar/Snackbar";
import { useState } from "react";
const Reservation = () => {
	const theme = useTheme();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: zodResolver(reservationSchema) });
	const [status, statusDispatchFunc] = useReducer(statusFunc, { error: null, success: null, waiting: null });

	useEffect(() => {
		let errorKeys = Array.from(Object.keys(errors));
		errorKeys?.length && statusDispatchFunc({ type: "setError", payload: errors[errorKeys[0]].message });
	}, [errors]);

	async function saveReservation(data) {
		try {
			statusDispatchFunc({ type: "setWaiting" });
			let time = `${data.date} ${data.timing}`;
			// Check to see if time is in the future
			let specified = new Date(time).getTime();
			let now = new Date().getTime();
			if (specified - now <= 0) {
				statusDispatchFunc({ type: "setError", payload: "Make sure date and time is in the future" });
				return;
			}

			data = {
				name: data.name,
				email: data.email,
				reservationType: data.reservation,
				time,
			};

			let res = await sendReservation(data);

			if (res.error) {
				statusDispatchFunc({ type: "setError", payload: "Message sending failed. Please try again later" });
				return;
			}

			reset();
			statusDispatchFunc({ type: "setSuccess", payload: "Your reservation has been registered" });
		} catch (e) {
			statusDispatchFunc({ type: "setError", payload: "Message sending failed. Please try again later" });
		}

		// Send data as email or store it on the DB
	}
	return (
		<>
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
										onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
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
												onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
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

						<Button variant="contained" color="white" sx={{ ...styles.button, marginInline: "auto", display: "block" }} type="submit" disabled={status.waiting}>
							{status.waiting ? "Waiting..." : "Book a Table"}
						</Button>
						{status.error && <Error text={status.error} sx={{ textAlign: "center" }} />}
					</form>
				</Box>
			</Box>
			{status.success && <Snackbar text={status.success} close={() => statusDispatchFunc({ type: "clearStatus" })} />}
		</>
	);
};

export default Reservation;
