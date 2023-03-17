import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import styles from "../../app.styles";
import { useAuthContext } from "../../context/AuthContext";
import { httpStoreChef } from "../../hooks/requests/request";

import PageDesc from "../../components/Header/PageDesc";
import Title from "../../components/Title/Title";
import ImageInput from "../../components/ImageInput/ImageInput";
import Error from "../../components/Error/Error";

const NewChefPage = () => {
	const theme = useTheme();
	const { error, errorDispatchFunc, validations, clearError, waiting, setWaiting } = useAuthContext();
	const navigate = useNavigate();
	const [chefData, setChefData] = useState({
		name: "Asare Foster",
		position: "Senior chef",
		email: "evanmattew@mail.com",
		experience: "10",
		contact: "+1 (800)-234-5675",
		location: "Riverside 25, San Francisco, California",
		summary:
			"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divid with additional clickthroughs from Nanotechnology immersion along the information highway will close the loop on focusing solely the bottom line.",
		facebook: "http://facebook.com",
		twitter: "http://twitter.com",
		instagram: "http://instagram.com",
		pinterest: "http://pinterest.com",
	});
	function handleChange(name, value) {
		setChefData((prev) => {
			return { ...prev, [name]: value };
		});
	}

	function validateForm() {
		return new Promise((resolve, reject) => {
			let { email, contact, experience, location, facebook, twitter, instagram, pinterest, name, image, summary, position } = chefData;
			if (!name || !email || !experience || !location || !image || !summary || !position) {
				reject({ type: "displayError", payload: "Please fill in all required fields" });
				return;
			}
			if (!validations.validateNumber(experience)) {
				reject({ type: "displayError", payload: "Enter a valid number for years of experiece" });
				return;
			}
			if (!validations.validatePhoneNumber(contact)) {
				reject({ type: "displayError", payload: "Enter a valid phone number" });
				return;
			}
			resolve({ success: true });
		});
	}

	async function saveChef(type = "store") {
		setWaiting(true);
		// Form validation
		try {
			await validateForm();

			let formData = new FormData();
			let keys = Object.keys(chefData);
			keys.forEach((e) => {
				formData.append(e, chefData[e]);
			});
			let res = await httpStoreChef(formData);
			setWaiting(false);
			navigate("/chefs");
		} catch (err) {
			errorDispatchFunc(err);
		}
	}

	function handleClose() {
		console.log("closed");
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
						<TextField
							sx={{ width: "50%" }}
							onChange={(event) => handleChange("name", event.target.value)}
							placeholder="Chef Name"
							value={chefData.name || ""}
							onFocus={() => clearError()}
						/>
						<TextField
							sx={{ width: "50%" }}
							onChange={(event) => handleChange("position", event.target.value)}
							placeholder="Chef Position"
							value={chefData.position || ""}
							onFocus={() => clearError()}
						/>
					</Box>
					<Box sx={styles.chef__textarea__container}>
						<TextField
							sx={{ width: "50%" }}
							onChange={(event) => handleChange("email", event.target.value)}
							placeholder="Email"
							value={chefData.email || ""}
							onFocus={() => clearError()}
						/>
						<TextField
							sx={{ width: "50%" }}
							onChange={(event) => handleChange("experience", event.target.value)}
							placeholder="Years of experience"
							value={chefData.experience || ""}
							onFocus={() => clearError()}
						/>
					</Box>
					<Box sx={styles.chef__textarea__container}>
						<TextField
							sx={{ width: "50%" }}
							onChange={(event) => handleChange("contact", event.target.value)}
							placeholder="Contact - add country code and valid country format"
							value={chefData.contact || ""}
							onFocus={() => clearError()}
						/>
						<TextField
							sx={{ width: "50%" }}
							onChange={(event) => handleChange("location", event.target.value)}
							placeholder="Location"
							value={chefData.location || ""}
							onFocus={() => clearError()}
						/>
					</Box>
					<TextField
						sx={{ width: "100%", marginBottom: "20px" }}
						onChange={(event) => handleChange("facebook", event.target.value)}
						placeholder="Facebook Link to profile (optional)"
						value={chefData.facebook || ""}
						onFocus={() => clearError()}
					/>
					<TextField
						sx={{ width: "100%", marginBottom: "20px" }}
						onChange={(event) => handleChange("twitter", event.target.value)}
						placeholder="Twitter Link to profile (optional)"
						value={chefData.twitter || ""}
						onFocus={() => clearError()}
					/>
					<TextField
						sx={{ width: "100%", marginBottom: "20px" }}
						onChange={(event) => handleChange("instagram", event.target.value)}
						placeholder="Instagram Link to profile (optional)"
						value={chefData.instagram || ""}
						onFocus={() => clearError()}
					/>
					<TextField
						sx={{ width: "100%", marginBottom: "20px" }}
						onChange={(event) => handleChange("pinterest", event.target.value)}
						placeholder="Pinterest Link to profile (optional)"
						value={chefData.pinterest || ""}
						onFocus={() => clearError()}
					/>
					<Box sx={styles.dish__desc__container}>
						<TextField
							placeholder="Chef summary"
							multiline
							maxRows={4}
							sx={{ ...styles.new__dish__text__field }}
							onChange={(event) => handleChange("summary", event.target.value)}
							value={chefData.summary || ""}
							onFocus={() => clearError()}
						/>
					</Box>

					<ImageInput name="image" label="Chef Image" handleChange={handleChange} sx={{ marginTop: "20px" }} image={chefData.image} />
					{error.display === "block" && <Error text={error.text} />}
					<Box sx={{ display: "flex", gap: "20px", marginTop: "30px" }}>
						<Button variant="outlined" sx={{ ...styles.button }} color="secondary" onClick={() => saveChef()} disabled={waiting}>
							Save Chef
						</Button>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default NewChefPage;
