import React, { useState, useReducer, useEffect } from "react";
import styles from "../../app.styles";
import { Box, Container, TextField, Typography, Button, MenuItem, Select } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";
import { httpFetchADish, httpStoreDish, httpUpdateDish } from "../../hooks/requests/request";
import { statusFunc } from "../../components/Snackbar/status.service";

import PageDesc from "../../components/Header/PageDesc";
import Title from "../../components/Title/Title";
import ImageInput from "../../components/ImageInput/ImageInput";
import Error from "../../components/Error/Error";
import Snackbar from "../../components/Snackbar/Snackbar";
import Loading from "../../components/Loading/Loading";

const NewDishPage = () => {
	const theme = useTheme();
	const { validations } = useAuthContext();
	const [status, statusDispatchFunc] = useReducer(statusFunc, { error: null, success: null, waiting: null });
	const { dishId } = useParams();
	const [dishData, setDishData] = useState({
		// price: 40,
		// summary: "Candied Jerusalem dummy texts",
		// type: "Dessert",
	});
	const [loading, setLoading] = useState(dishId ? true : false);

	useEffect(() => {
		dishId &&
			(async function () {
				let res = await httpFetchADish(dishId);
				if (res.error) {
					navigate("/404");
					return;
				}
				setDishData(res);
				setLoading(false);
			})();
	}, []);
	const navigate = useNavigate();
	function handleChange(name, value) {
		setDishData((prev) => {
			return { ...prev, [name]: name === "price" ? parseFloat(value) : value };
		});
	}

	async function validateDishData() {
		return new Promise((resolve, reject) => {
			let { name, summary, type, image, imageUrl, price } = dishData;
			if (!name || !summary || !type || (!image && !imageUrl) || !price) {
				reject("Please fill in all fields");
				return;
			}

			if (validations.checkTextLength(name, 40)) {
				reject("Name is too long. Should be less than 40 characters");
				return;
			}

			if (typeof price !== "number") {
				reject("Enter a valid price. To Nearest Whole Number");
				return;
			}

			if (validations.checkTextLength(summary, 70)) {
				reject("Summary is too long. Should be less than 70 characters");
				return;
			}

			if (type === "Select Dish Type") {
				reject("Please select a dish type");
				return;
			}
			resolve();
		});
	}
	async function PostOrUpdateDish() {
		try {
			statusDispatchFunc({ type: "setWaiting" });
			// Form validation
			await validateDishData();

			let formData = new FormData();
			let keys = Object.keys(dishData);
			keys.forEach((e) => {
				formData.append(e, dishData[e]);
			});

			let res = dishId ? await httpUpdateDish(dishId, formData) : await httpStoreDish(formData);

			if (res?.error) {
				statusDispatchFunc({ type: "setError", payload: res.error });
				return;
			}
			statusDispatchFunc({ type: "setSuccess", payload: dishId ? `Dish of id ${dishId} has been updated` : "New dish has been created" });
		} catch (err) {
			console.log(err);
			statusDispatchFunc({ type: "setError", payload: err });
		}
	}
	return (
		<>
			<PageDesc content="Add Dish" />
			<Box sx={styles.new__dish}>
				<Container maxWidth="md" sx={styles.new__dish__container}>
					{!loading && (
						<>
							<Title text="add dish"></Title>
							<Typography variant="h1" sx={{ ...styles.title, fontSize: "28px", marginBlock: "10px" }}>
								Add A New Dish
							</Typography>
							<TextField
								sx={styles.new__dish__text__field}
								onChange={(event) => handleChange("name", event.target.value)}
								onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
								placeholder="Dish Name"
								value={dishData.name || ""}
							/>
							<TextField
								sx={styles.new__dish__text__field}
								onChange={(event) => handleChange("price", event.target.value)}
								onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
								placeholder="Dish Price"
								value={dishData.price || ""}
							/>

							<Select
								value={dishData.type || "Select Dish Type"}
								onChange={(e) => handleChange("type", e.target.value)}
								sx={{ width: "100%" }}
								onFocus={() => statusDispatchFunc({ type: "clearStatus" })}>
								<MenuItem value="Select Dish Type" selected={true} disabled={true}>
									Select Dish Type
								</MenuItem>
								<MenuItem value="Starter">Starter</MenuItem>
								<MenuItem value="Main Dish">Main Dish</MenuItem>
								<MenuItem value="Dessert">Dessert</MenuItem>
							</Select>
							<Box sx={styles.dish__desc__container}>
								<TextField
									placeholder="Dish Description"
									multiline
									maxRows={4}
									sx={{ ...styles.new__dish__text__field }}
									onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
									onChange={(event) => handleChange("summary", event.target.value)}
									value={dishData.summary || ""}
								/>
							</Box>

							<ImageInput label="Dish Image" handleChange={handleChange} sx={{ marginTop: "20px" }} image={dishData.imageUrl} />
							{status.error && <Error text={status.error} />}
							<Box sx={{ display: "flex", gap: "20px", marginTop: "30px" }}>
								<Button variant="outlined" sx={{ ...styles.button }} color="secondary" onClick={() => PostOrUpdateDish()} disabled={status.waiting}>
									{!status.waiting ? (dishId ? "Update" : "Save") + " Dish" : "Waiting..."}
								</Button>
							</Box>
						</>
					)}
					{loading && <Loading />}
				</Container>
			</Box>
			{status.success && <Snackbar text={status.success} close={() => statusDispatchFunc({ type: "clearStatus" })} link="/dishes" />}
		</>
	);
};

export default NewDishPage;
