import React, { useState, useReducer } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import styles from "../../app.styles";
import { useAdminContext } from "../../context/AdminContext";
import { httpValidateAdmin } from "../../hooks/requests/request";
import { statusFunc } from "../../components/Snackbar/status.service";

import PageDesc from "../../components/Header/PageDesc";
import Error from "../../components/Error/Error";
import Snackbar from "../../components/Snackbar/Snackbar";

const PasswordProtectedPage = () => {
	const theme = useTheme();
	const { setIsAdmin } = useAdminContext();
	const [status, statusDispatchFunc] = useReducer(statusFunc, { error: null, success: null, waiting: null });

	let [password, setPassword] = useState("");

	async function logInAdmin() {
		try {
			statusDispatchFunc({ type: "setWaiting" });
			// Validate password
			if (!password) {
				statusDispatchFunc({ type: "setError", payload: "Please enter your password " });
				return;
			}
			let res = await httpValidateAdmin("password", password);
			if (res.error) {
				statusDispatchFunc({ type: "setError", payload: res.error });
				return;
			}
			statusDispatchFunc({ type: "setSuccess", payload: "Admin user authenticated successfully..." });
			setTimeout(() => {
				setIsAdmin(true);
				localStorage.setItem("admin-session", res._id);
			}, 1000);
		} catch (error) {
			statusDispatchFunc({ type: "setError", payload: error.message });
		}
	}
	return (
		<>
			<PageDesc content="Password Protected" />
			<Box sx={{ marginBlock: "120px" }}>
				<Container maxWidth="sm" sx={{ ...styles.passwordpage__container, background: theme.palette.protectedBg.main, border: `2px solid ${theme.palette.stroke.main}` }}>
					<Box sx={{ ...styles.padlock__container, backgroundColor: theme.palette.primary.main }}>
						<LockOutlinedIcon sx={{ fontSize: "40px" }} color="secondary" />
					</Box>
					<Typography variant="h3" sx={{ ...styles.title, fontSize: "28px", marginBottom: "20px" }}>
						Protected Page
					</Typography>
					<Typography variant="p" sx={{ ...styles.desc, width: "85%", textAlign: "center", fontSize: "14px" }}>
						This page is password protected. If you are the website admin, or have access to this page, please type your password below.
					</Typography>
					<TextField
						id=""
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Enter password here"
						sx={{ width: "60%", marginBlock: "20px" }}
						type="password"
						onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
					/>
					<Button variant="contained" color="secondary" sx={{ ...styles.button, width: "60%" }} onClick={logInAdmin} disabled={status.waiting ? true : false}>
						{status.waiting ? "Waiting..." : "Submit"}
					</Button>
					{status.error && <Error text={status.error} sx={{ textAlign: "center", marginTop: "30px" }} />}
					{status.success && <Snackbar text={status.success} close={() => statusDispatchFunc({ type: "clearStatus" })} />}
				</Container>
			</Box>
		</>
	);
};

export default PasswordProtectedPage;
