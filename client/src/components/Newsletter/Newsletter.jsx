import React, { useEffect, useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import styles from "../../app.styles";
import { insertSubscription } from "../../hooks/requests/request";
import { useAuthContext } from "../../context/AuthContext";

import Error from "../../components/Error/Error";

const Newsletter = () => {
	const [email, setEmail] = useState("");
	const [success, setSuccess] = useState(false);
	const { error, errorDispatchFunc, validations, clearError, waiting, setWaiting } = useAuthContext();

	async function registerNewsletter() {
		// Validate email
		if (!email) {
			errorDispatchFunc({ type: "displayError", payload: "Please enter  your email address" });
			return;
		}
		if (!validations.validateEmail(email)) {
			errorDispatchFunc({ type: "displayError", payload: "Please enter a valid email address" });
			return;
		}
		setWaiting(true);
		let res = await insertSubscription(email);
		if (res.error) {
			errorDispatchFunc({ type: "displayError", payload: res.error });
			setTimeout(() => clearError(), 2000);
			return;
		}
		setWaiting(false);
		setSuccess(true);
		setEmail("");
		setTimeout(() => setSuccess(false), 2000);
	}
	const theme = useTheme();
	return (
		<>
			<Typography variant="p" sx={{ color: theme.palette.white.main, width: { xxs: "80%", md: "35%" } }}>
				Join our mailing list for updates, Get news & offers events.
			</Typography>
			<Box sx={{ marginTop: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", width: { xxs: "90%", md: "60%" } }}>
				<input
					type="text"
					aria-label="Email address"
					placeholder="Email"
					className="h-full w-[70%] bg-transparent border-white border-[1px] px-[10px] focus:outline-none text-white"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					onFocus={() => clearError()}
				/>
				<Button color="white" sx={{ ...styles.button, width: "30%" }} variant="contained" onClick={registerNewsletter} disabled={waiting}>
					{waiting ? "Waiting..." : "Subscribe"}
				</Button>
			</Box>
			{error.display === "block" && <Error text={error.text} />}
			{success && <p className="text-[green] mt-[5px]">Newsletter subscription was successful</p>}
		</>
	);
};

export default Newsletter;
