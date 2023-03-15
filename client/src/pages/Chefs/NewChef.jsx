import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import PageDesc from "../../components/Header/PageDesc";
import Title from "../../components/Title/Title";
import styles from "../../app.styles";
import ImageInput from "../../components/ImageInput/ImageInput";

const NewChefPage = () => {
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
			<PageDesc content="Add Chef" />
			<Box sx={{ marginBlock: "100px" }}>
				<Container maxWidth="md">
					<Title text="add chef"></Title>
					<Typography variant="h1" sx={{ ...styles.title, fontSize: "28px", marginBlock: "10px" }}>
						Add A New Chef
					</Typography>
					<Box sx={styles.chef__textarea__container}>
						<TextField sx={{ width: "50%" }} onChange={(event) => handleChange("name", event.target.value)} placeholder="Chef Name" />
						<TextField sx={{ width: "50%" }} onChange={(event) => handleChange("position", event.target.value)} placeholder="Chef Position" />
					</Box>
					<Box sx={styles.chef__textarea__container}>
						<TextField sx={{ width: "50%" }} onChange={(event) => handleChange("email", event.target.value)} placeholder="Email" />
						<TextField sx={{ width: "50%" }} onChange={(event) => handleChange("experience", event.target.value)} placeholder="Years of experience" />
					</Box>
					<Box sx={styles.chef__textarea__container}>
						<TextField sx={{ width: "50%" }} onChange={(event) => handleChange("contact", event.target.value)} placeholder="Contact" />
						<TextField sx={{ width: "50%" }} onChange={(event) => handleChange("location", event.target.value)} placeholder="Location" />
					</Box>
					<TextField sx={{ width: "100%", marginBottom: "20px" }} onChange={(event) => handleChange("facebook", event.target.value)} placeholder="Facebook Link to profile" />
					<TextField sx={{ width: "100%", marginBottom: "20px" }} onChange={(event) => handleChange("twitter", event.target.value)} placeholder="Twitter Link to profile" />
					<TextField sx={{ width: "100%", marginBottom: "20px" }} onChange={(event) => handleChange("instagram", event.target.value)} placeholder="Instagram Link to profile" />
					<TextField sx={{ width: "100%", marginBottom: "20px" }} onChange={(event) => handleChange("pinterest", event.target.value)} placeholder="Pinterest Link to profile" />
					<Box sx={styles.dish__desc__container}>
						<TextField placeholder="Chef summary" multiline maxRows={4} sx={{ ...styles.new__dish__text__field }} onChange={(event) => handleChange("summary", event.target.value)} />
					</Box>

					<ImageInput name="image" label="Chef Image" handleChange={handleChange} sx={{ marginTop: "20px" }} />
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

export default NewChefPage;
