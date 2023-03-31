import React, { useReducer, useEffect } from "react";
import { Box, Container, Typography, Grid, TextField, Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import styles from "../../app.styles";
import { reservationPageSchema } from "../../hooks/validations/react-hook-form";
import { statusFunc } from "../../components/Snackbar/status.service";
import { httpSendReservation } from "../../hooks/requests/request";

import PageDesc from "../../components/Header/PageDesc";
import Title from "../../components/Title/Title";
import Error from "../../components/Error/Error";
import Snackbar from "../../components/Snackbar/Snackbar";

import FreshFoodImage from "../../assets/fresh-food.svg";
import FastDeliveryImage from "../../assets/fast-delivery.svg";
import QualityMaintainImage from "../../assets/quality-maintain.svg";
import Service247 from "../../assets/service-247.svg";
import WhyChooseUsImage from "../../assets/why-choose-us.png";
import ReservedImage from "../../assets/reserved-image.jpg";

const ReservationPage = () => {
	const theme = useTheme();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: zodResolver(reservationPageSchema) });

	const [status, statusDispatchFunc] = useReducer(statusFunc, { error: null, success: null, waiting: null });

	useEffect(() => {
		let errorKeys = Array.from(Object.keys(errors));
		errorKeys?.length && statusDispatchFunc({ type: "setError", payload: errors[errorKeys[0]].message });
	}, [errors]);

	async function saveReservation(data) {
		statusDispatchFunc({ type: "setWaiting", payload: "Make sure date and time is in the future" });
		let time = `${data.date} ${data.time}`;
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
			phone: data.phone,
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
		// Send data as email or store it on the DB
	}
	return (
		<>
			<PageDesc content="Booking Page"></PageDesc>
			<Box sx={{ marginBlock: { xxs: "30px", sm: "100px" } }}>
				<Container maxWidth="lg" sx={{ ...styles.reservation__page__container, alignItems: "center" }}>
					<Box className="story__text" sx={{ ...styles.homepage__story__text, width: { md: "50%", xxs: "100%" }, order: { xxs: 2, md: 1 } }}>
						<Title text="reservation" />
						<Typography variant="h3" sx={{ ...styles.homepage__story__title, fontSize: "40px", marginBlock: "5px" }}>
							Book your table now
						</Typography>

						<Typography variant="p" sx={{ ...styles.homepage__story__desc, fontSize: "16px", lineHeight: "10px" }}>
							The people, food and the prime locations make Rodich the perfect place good friends & family to come together and have great time.
						</Typography>

						<form action="" onSubmit={handleSubmit(saveReservation)}>
							<Grid container sx={{ width: "100%", height: "auto", marginTop: "20px" }}>
								{[{ text: "Name" }, { text: "Email" }, { text: "Phone" }, { text: "Date" }, { text: "Time" }, { text: "Person" }].map((e, index) => {
									if (e.text !== "Person") {
										return (
											<Grid item key={index} xxs={12} xs={6} sx={{ height: "auto", marginBottom: "20px" }}>
												<input
													style={{ ...styles.choose__us__reason }}
													className="focus:outline-none reservation__white"
													placeholder={e.text}
													aria-label={e.text}
													type={e.text === "Date" ? "date" : e.text === "Time" ? "time" : "text"}
													onFocus={() => {
														statusDispatchFunc({ type: "clearStatus" });
													}}
													{...register(e.text.toLowerCase())}></input>
											</Grid>
										);
									}
									return (
										<Grid item key={index} xxs={12} xs={6} sx={{ height: "auto", marginBottom: "20px" }}>
											<select
												className="w-[calc(100%-20px)] block h-[50px] text-[14px] text-primary focus:outline-none px-[10px] border-[1px] border-black  py-[7px]"
												{...register("reservation")}
												onFocus={() => {
													statusDispatchFunc({ type: "clearStatus" });
												}}>
												<option value="Reservation Type" disabled style={{ background: theme.palette.primary.main, display: "block", marginTop: "10px" }}>
													Reservation Type
												</option>
												{["Regular", "VIP", "Couple"].map((e, index) => (
													<option value={e} key={index} style={{ background: theme.palette.primary.main, marginBottom: "5px" }}>
														{e}
													</option>
												))}
											</select>
											{/* <input style={{ ...styles.choose__us__reason }} className="focus:outline-none" placeholder={e.text} aria-label={e.text}></input> */}
										</Grid>
									);
								})}
							</Grid>
							{status.error && <Error text={status.error} />}
							<Button variant="outlined" color="secondary" sx={{ ...styles.button, marginTop: "20px" }} type="submit" disabled={status.waiting}>
								{status.waiting ? "Waiting..." : "Book a Table"}
							</Button>
						</form>
					</Box>

					<Box sx={{ width: { md: "40%", xxs: "100%" }, height: { md: "450px", xxs: "350px" }, order: { xxs: 1, md: 2 } }}>
						<img src={ReservedImage} alt="" className="w-[100%] h-[100%]" />
					</Box>
				</Container>
			</Box>

			<Box sx={{ marginBlock: { xxs: "30px", md: "100px" } }}>
				<Container maxWidth="lg" sx={{ ...styles.reservation__page__container, alignItems: "center" }}>
					<Box sx={{ width: { xxs: "100%", md: "40%" }, height: { md: "450px", xxs: "350px" } }}>
						<img src={WhyChooseUsImage} alt="" className="w-[100%] h-[100%]" />
					</Box>

					<Box className="story__text" sx={{ ...styles.homepage__story__text, width: { md: "50%", xxs: "100%" } }}>
						<Title text="Why choose us" />
						<Typography variant="h3" sx={{ ...styles.homepage__story__title, fontSize: "40px", marginBlock: "5px" }}>
							Why We Are The Best?
						</Typography>

						<Typography variant="p" sx={{ ...styles.homepage__story__desc, fontSize: "16px", lineHeight: "10px" }}>
							Bring the table winwin survival strateges ensure proactive the domination the end of the day going forward new normal that has evolved froms generation on the runway
							heading towards streamlined cloud solution generated content in real times will have multiple touchpoints.
						</Typography>

						<Grid container sx={{ width: "100%", height: "auto", marginTop: "20px" }}>
							{[
								{ text: "Fresh Food", icon: FreshFoodImage },
								{ text: "Fast Delivery", icon: FastDeliveryImage },
								{ text: "Quality Maintain", icon: QualityMaintainImage },
								{ text: "24/7 Service", icon: Service247 },
							].map((e, index) => {
								return (
									<Grid item key={index} xxs={12} xs={6} sx={{ height: "auto", marginBottom: "20px", width: "100%" }}>
										<Box sx={styles.choose__us__reason}>
											<img src={e.icon} alt="Why choose us" className="w-[30px] h-[25px] mr-[10px]" />
											<Typography variant="p"> {e.text}</Typography>
										</Box>
									</Grid>
								);
							})}
						</Grid>
					</Box>
				</Container>
			</Box>

			{status.success && <Snackbar text={status.success} close={() => statusDispatchFunc({ type: "clearStatus" })} />}
		</>
	);
};

export default ReservationPage;
