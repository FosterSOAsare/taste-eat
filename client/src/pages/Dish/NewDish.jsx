import React, { useState } from "react";
import styles from "../../app.styles";
import { Box, Container, TextField, Typography, Button, MenuItem, Select } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useAuthContext } from "../../context/AuthContext";

import PageDesc from "../../components/Header/PageDesc";
import Title from "../../components/Title/Title";
import ImageInput from "../../components/ImageInput/ImageInput";
import Error from "../../components/Error/Error";

const NewDishPage = () => {
	const theme = useTheme();
	const { error, errorDispatchFunc, validations, clearError, waiting, setWaiting } = useAuthContext();
	const [dishData, setDishData] = useState({});
	function handleChange(name, value) {
		setDishData((prev) => {
			return { ...prev, [name]: value };
		});
	}

	function saveDish() {
		setWaiting(true);
		// Form validation
		let { name, summary, type, image } = dishData;
		if (!name || !summary || !type || !image) {
			errorDispatchFunc({ type: "displayError", payload: "Please fill in all fields" });
			return;
		}

		if (validations.checkTextLength(name, 40)) {
			errorDispatchFunc({ type: "displayError", payload: "Name is too long. Should be less than 40 characters" });
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
		console.log(Array.from(formData.entries()));
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
						<Button variant="outlined" sx={{ ...styles.button }} color="secondary" onClick={() => saveDish()}>
							Save Dish
						</Button>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default NewDishPage;
