import React, { useState } from "react";
import styles from "../../app.styles";
import { Box, Container, TextField, Typography, Button, MenuItem, Select } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useAuthContext } from "../../context/AuthContext";
import { httpStoreDish } from "../../hooks/requests/request";

import PageDesc from "../../components/Header/PageDesc";
import Title from "../../components/Title/Title";
import ImageInput from "../../components/ImageInput/ImageInput";
import Error from "../../components/Error/Error";
import { useNavigate } from "react-router-dom";

const NewDishPage = () => {
	const theme = useTheme();
	const { error, errorDispatchFunc, validations, clearError, waiting, setWaiting } = useAuthContext();
	const [dishData, setDishData] = useState({
		price: 40,
		summary: "Candied Jerusalem artichokes, truffle",
	});
	const navigate = useNavigate();
	function handleChange(name, value) {
		setDishData((prev) => {
			return { ...prev, [name]: name === "price" ? parseFloat(value) : value };
		});
	}

	async function saveDish() {
		setWaiting(true);
		// Form validation
		let { name, summary, type, image, price } = dishData;
		if (!name || !summary || !type || !image || !price) {
			errorDispatchFunc({ type: "displayError", payload: "Please fill in all fields" });
			return;
		}

		if (validations.checkTextLength(name, 40)) {
			errorDispatchFunc({ type: "displayError", payload: "Name is too long. Should be less than 40 characters" });
			return;
		}

		if (typeof price !== "number") {
			errorDispatchFunc({ type: "displayError", payload: "Enter a valid price. To Nearest Whole Number" });
			return;
		}

		if (validations.checkTextLength(summary, 70)) {
			errorDispatchFunc({ type: "displayError", payload: "Summary is too long. Should be less than 70 characters" });
			return;
		}

		if (type === "Select Dish Type") {
			errorDispatchFunc({ type: "displayError", payload: "Please select a dish type" });
			return;
		}

		let formData = new FormData();
		let keys = Object.keys(dishData);
		keys.forEach((e) => {
			formData.append(e, dishData[e]);
		});

		try {
			let res = await httpStoreDish(formData);
			setWaiting(false);
			setDishData({});
			navigate("/");
		} catch (e) {
			console.log(e);
		}
	}
	return (
		<>
			<PageDesc content="Add Dish" />
			<Box sx={styles.new__dish}>
				<Container maxWidth="md" sx={styles.new__dish__container}>
					<Title text="add dish"></Title>
					<Typography variant="h1" sx={{ ...styles.title, fontSize: "28px", marginBlock: "10px" }}>
						Add A New Dish
					</Typography>
					<TextField
						sx={styles.new__dish__text__field}
						onChange={(event) => handleChange("name", event.target.value)}
						onFocus={() => clearError()}
						placeholder="Dish Name"
						value={dishData.name || ""}
					/>
					<TextField
						sx={styles.new__dish__text__field}
						onChange={(event) => handleChange("price", event.target.value)}
						onFocus={() => clearError()}
						placeholder="Dish Price"
						value={dishData.price || ""}
					/>

					<Select value={dishData.type || "Select Dish Type"} onChange={(e) => handleChange("type", e.target.value)} sx={{ width: "100%" }} onFocus={() => clearError()}>
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
							onFocus={() => clearError()}
							onChange={(event) => handleChange("summary", event.target.value)}
							value={dishData.summary || ""}
						/>
					</Box>

					<ImageInput label="Dish Image" handleChange={handleChange} sx={{ marginTop: "20px" }} />
					{error.display === "block" && <Error text={error.text} />}
					<Box sx={{ display: "flex", gap: "20px", marginTop: "30px" }}>
						<Button variant="outlined" sx={{ ...styles.button }} color="secondary" onClick={() => saveDish()} disabled={waiting}>
							{!waiting ? "Save Dish" : "Waiting..."}
						</Button>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default NewDishPage;
