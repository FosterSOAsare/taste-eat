import React, { useState } from "react";
import styles from "../../app.styles";
import { Box, Container, TextField, Typography, Button, MenuItem, Select } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PageDesc from "../../components/Header/PageDesc";
import Title from "../../components/Title/Title";
import ImageInput from "../../components/ImageInput/ImageInput";

const NewDishPage = () => {
	const theme = useTheme();
	const [dishData, setDishData] = useState({});
	function handleChange(name, value) {
		console.log(value);
		setDishData((prev) => {
			return { ...prev, [name]: value };
		});
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
					<TextField sx={styles.new__dish__text__field} onChange={(event) => handleChange("title", event.target.value)} placeholder="Dish Name" />

					<Select
						value={dishData.type || "Select Dish Type"}
						onChange={(e) => handleChange("type", e.target.value)}
						sx={{ width: "100%" }}
						renderValue={(selected) => {
							if (selected.length === 0) {
								return <em>Placeholder</em>;
							}

							return selected;
						}}
						placeholder="Type">
						<MenuItem value="Select Dish Type" selected={true} disabled={true}>
							Select Dish Type
						</MenuItem>
						<MenuItem value="Starter">Starter</MenuItem>
						<MenuItem value="Main Dish">Main Dish</MenuItem>
						<MenuItem value="Dessert">Dessert</MenuItem>
					</Select>
					<Box sx={styles.dish__desc__container}>
						<TextField placeholder="Dish Description" multiline maxRows={4} sx={{ ...styles.new__dish__text__field }} onChange={(event) => handleChange("summary", event.target.value)} />
					</Box>

					<ImageInput name="image" label="Dish Image" handleChange={handleChange} sx={{ marginTop: "20px" }} />
					<Box sx={{ display: "flex", gap: "20px", marginTop: "30px" }}>
						<Button variant="outlined" sx={{ ...styles.button }} color="secondary">
							Save Dish
						</Button>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default NewDishPage;
