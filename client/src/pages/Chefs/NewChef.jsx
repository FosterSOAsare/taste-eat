import React, { useEffect, useState, useReducer } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";

import styles from "../../app.styles";
import { useAuthContext } from "../../context/AuthContext";
import { httpStoreChef, httpFetchAChef, httpUpdateChef, httpDeleteChef } from "../../hooks/requests/request";
import { statusFunc } from "../../components/Snackbar/status.service";

import PageDesc from "../../components/Header/PageDesc";
import Title from "../../components/Title/Title";
import ImageInput from "../../components/ImageInput/ImageInput";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import Snackbar from "../../components/Snackbar/Snackbar";

const NewChefPage = () => {
	const theme = useTheme();
	const { validations } = useAuthContext();
	const navigate = useNavigate();
	const { chefId } = useParams();
	const [status, statusDispatchFunc] = useReducer(statusFunc, { error: null, success: null, waiting: null });
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
	const [loading, setLoading] = useState(chefId ? true : false);

	useEffect(() => {
		(async function () {
			if (chefId) {
				try {
					let chefData = await httpFetchAChef(chefId);
					setLoading(false);
					if (chefData?.error) {
						navigate("/404");
						return;
					}
					setChefData(chefData);
				} catch (err) {
					setLoading(false);
					navigate("/404");
				}
				return;
			}
		})();
	}, [chefId]);
	function handleChange(name, value) {
		setChefData((prev) => {
			return { ...prev, [name]: value };
		});
	}

	function validateForm() {
		return new Promise((resolve, reject) => {
			let { email, contact, experience, location, facebook, twitter, instagram, pinterest, name, image, summary, position } = chefData;
			if (!name || !email || !experience || !location || !image || !summary || !position) {
				reject("Please fill in all required fields");
				return;
			}
			if (!validations.validateNumber(experience)) {
				reject("Enter a valid number for years of experiece");
				return;
			}
			if (!validations.validatePhoneNumber(contact)) {
				reject("Enter a valid phone number");
				return;
			}
			if (!validations.validateEmail(email)) {
				reject("Enter a valid email address");
				return;
			}
			if (facebook && !validations.validateUrl(facebook)) {
				reject("Enter a valid facebook profile link");
				return;
			}
			if (twitter && !validations.validateUrl(twitter)) {
				reject("Enter a valid twitter profile link");
				return;
			}
			if (instagram && !validations.validateUrl(instagram)) {
				reject("Enter a valid instagram profile link");
				return;
			}
			if (pinterest && !validations.validateUrl(pinterest)) {
				reject("Enter a valid pinterest profile link");
				return;
			}
			resolve({ success: true });
		});
	}

	async function postOrUpdateChef() {
		statusDispatchFunc({ type: "setWaiting" });
		// Form validation
		try {
			await validateForm();

			let formData = new FormData();
			let keys = Object.keys(chefData);
			keys.forEach((e) => {
				formData.append(e, chefData[e]);
			});

			let res = chefId ? await httpUpdateChef(chefData._id, formData) : await httpStoreChef(formData);

			if (res?.error) {
				statusDispatchFunc({ type: "setError", payload: res.error });
				return;
			}
			statusDispatchFunc({ type: "setSuccess", payload: chefId ? `Chef of id ${chefId} has been updated` : "New chef has been registered" });
		} catch (err) {
			console.log(err);
			// Handles the form validation
			statusDispatchFunc({ type: "setError", payload: err });
		}
	}

	return (
		<>
			<PageDesc content="Add Chef" />
			<Box sx={{ marginBlock: "100px" }}>
				<Container maxWidth="md">
					{!loading && (
						<>
							<Title text="add chef"></Title>
							<Typography variant="h1" sx={{ ...styles.title, fontSize: "28px", marginBlock: "10px" }}>
								Add A New Chef
							</Typography>
							<Box sx={styles.chef__textarea__container}>
								<TextField
									sx={{ width: { xxs: "100%", md: "50%" } }}
									onChange={(event) => handleChange("name", event.target.value)}
									placeholder="Chef Name"
									value={chefData.name || ""}
									onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
								/>
								<TextField
									sx={{ width: { xxs: "100%", md: "50%" } }}
									onChange={(event) => handleChange("position", event.target.value)}
									placeholder="Chef Position"
									value={chefData.position || ""}
									onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
								/>
							</Box>
							<Box sx={styles.chef__textarea__container}>
								<TextField
									sx={{ width: { xxs: "100%", md: "50%" } }}
									onChange={(event) => handleChange("email", event.target.value)}
									placeholder="Email"
									value={chefData.email || ""}
									onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
								/>
								<TextField
									sx={{ width: { xxs: "100%", md: "50%" } }}
									onChange={(event) => handleChange("experience", event.target.value)}
									placeholder="Years of experience"
									value={chefData.experience || ""}
									onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
								/>
							</Box>
							<Box sx={styles.chef__textarea__container}>
								<TextField
									sx={{ width: { xxs: "100%", md: "50%" } }}
									onChange={(event) => handleChange("contact", event.target.value)}
									placeholder="Contact - add country code and valid country format"
									value={chefData.contact || ""}
									onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
								/>
								<TextField
									sx={{ width: { xxs: "100%", md: "50%" } }}
									onChange={(event) => handleChange("location", event.target.value)}
									placeholder="Location"
									value={chefData.location || ""}
									onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
								/>
							</Box>
							<TextField
								sx={{ width: "100%", marginBottom: "20px" }}
								onChange={(event) => handleChange("facebook", event.target.value)}
								placeholder="Facebook Link to profile (optional)"
								value={chefData.facebook || ""}
								onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
							/>
							<TextField
								sx={{ width: "100%", marginBottom: "20px" }}
								onChange={(event) => handleChange("twitter", event.target.value)}
								placeholder="Twitter Link to profile (optional)"
								value={chefData.twitter || ""}
								onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
							/>
							<TextField
								sx={{ width: "100%", marginBottom: "20px" }}
								onChange={(event) => handleChange("instagram", event.target.value)}
								placeholder="Instagram Link to profile (optional)"
								value={chefData.instagram || ""}
								onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
							/>
							<TextField
								sx={{ width: "100%", marginBottom: "20px" }}
								onChange={(event) => handleChange("pinterest", event.target.value)}
								placeholder="Pinterest Link to profile (optional)"
								value={chefData.pinterest || ""}
								onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
							/>
							<Box sx={styles.dish__desc__container}>
								<TextField
									placeholder="Chef summary"
									multiline
									maxRows={4}
									sx={{ ...styles.new__dish__text__field }}
									onChange={(event) => handleChange("summary", event.target.value)}
									value={chefData.summary || ""}
									onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
								/>
							</Box>

							<ImageInput name="image" label="Chef Image" handleChange={handleChange} sx={{ marginTop: "20px" }} image={chefData.image} />
							{status.error && <Error text={status.error} />}
							<Box sx={{ display: "flex", gap: "20px", marginTop: "30px" }}>
								<Button variant="contained" sx={{ ...styles.button, color: theme.palette.white.main }} color="secondary" onClick={() => postOrUpdateChef()} disabled={status.waiting}>
									{!status.waiting ? (chefId ? "Update" : "Save") + " Chef" : "Waiting..."}
								</Button>
								<Button
									variant="outlined"
									sx={{ ...styles.button }}
									color="primary"
									onClick={() => {
										statusDispatchFunc({ type: "clearStatus" });
										navigate("/chefs");
									}}>
									Cancel
								</Button>
							</Box>
						</>
					)}
					{loading && <Loading />}
				</Container>
			</Box>
			{status.success && <Snackbar text={status.success} close={() => statusDispatchFunc({ type: "clearStatus" })} link="/chefs" />}
		</>
	);
};

export default NewChefPage;
