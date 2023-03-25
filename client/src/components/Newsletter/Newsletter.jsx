import React, { useEffect, useState, useReducer } from "react";
import { Button, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import styles from "../../app.styles";
import { insertSubscription } from "../../hooks/requests/request";
import { useAuthContext } from "../../context/AuthContext";

import Error from "../../components/Error/Error";
import Snackbar from "../../components/Snackbar/Snackbar";
import { statusFunc } from "../../components/Snackbar/status.service";

const Newsletter = ({ setSnackbar }) => {
	const [email, setEmail] = useState("");
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(null);
	const [waiting, setWaiting] = useState(false);
	const { validations } = useAuthContext();
	const [status, statusDispatchFunc] = useReducer(statusFunc, { error: null, success: null, waiting: null });

	async function registerNewsletter() {
		// Validate email
		statusDispatchFunc({ type: "setWaiting" });
		if (!email) {
			statusDispatchFunc({ type: "setError", payload: "Please enter  your email address" });
			return;
		}
		if (!validations.validateEmail(email)) {
			statusDispatchFunc({ type: "setError", payload: "Please enter a valid email address" });
			return;
		}
		let res = await insertSubscription(email);

		if (res.error) {
			statusDispatchFunc({ type: "setError", payload: res.error });
			return;
		}
		// setSuccess(true);
		statusDispatchFunc({ type: "setSuccess", payload: res.success });
		setEmail("");
		setTimeout(() => statusDispatchFunc({ type: "clearStatus" }), 2000);
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
					onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
				/>
				<Button color="white" sx={{ ...styles.button, width: "30%" }} variant="contained" onClick={registerNewsletter} disabled={waiting}>
					{waiting ? "Waiting..." : "Subscribe"}
				</Button>
			</Box>
			{status.error && <Error text={status.error} />}
			{status.success && <Snackbar text={status.success} close={() => statusDispatchFunc({ type: "clearStatus" })} />}
		</>
	);
};

export default Newsletter;
